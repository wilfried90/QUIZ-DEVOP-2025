// src/pages/QuizPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container, Typography, Button, Card, CardContent, Stack, Box, LinearProgress
} from '@mui/material';
import axios from 'axios';

export default function QuizPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  // 🔁 Charger le quiz
  useEffect(() => {
    axios.get(`http://localhost:8000/api/quizzes/${id}/`)
      .then(res => setQuizData(res.data))
      .catch(err => console.error("Erreur chargement quiz:", err));
  }, [id]);

  const handleAnswerClick = (questionId, selectedAnswer) => {
    const correct = selectedAnswer.is_correct;
    setAnswers(prev => [...prev, { questionId, correct }]);

    const nextIndex = currentIndex + 1;
    if (nextIndex < quizData.questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      // 🧠 Calcul du score
      const totalCorrect = [...answers, { questionId, correct }]
        .filter(a => a.correct).length;

      setScore(totalCorrect);

      // 📤 Envoi au backend
      axios.post("http://localhost:8000/api/results/", {
        quiz: quizData.id,
        score: totalCorrect,
      }).catch(err => console.error("Erreur envoi résultat:", err));
    }
  };

  const handleQuit = () => {
    navigate('/');
  };

  if (!quizData) return <Typography>Chargement...</Typography>;

  // ✅ Fin du quiz
  if (score !== null) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>Quiz terminé !</Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Votre score : {score} / {quizData.questions.length}
        </Typography>
        <Box textAlign="center" sx={{ mt: 3 }}>
          <Button variant="contained" onClick={handleQuit}>Quitter</Button>
        </Box>
      </Container>
    );
  }

  // ✅ Affichage d’une question
  const question = quizData.questions[currentIndex];
  const progress = (currentIndex / quizData.questions.length) * 100;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" align="center">{quizData.title}</Typography>
        <Typography align="center">Question {currentIndex + 1} / {quizData.questions.length}</Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ mt: 2 }} />
      </Box>

      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>{question.text}</Typography>
          <Stack spacing={2}>
            {question.answers.map((ans, idx) => (
              <Button
                key={ans.id}
                variant="outlined"
                onClick={() => handleAnswerClick(question.id, ans)}
              >
                {String.fromCharCode(65 + idx)}. {ans.text}
              </Button>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
