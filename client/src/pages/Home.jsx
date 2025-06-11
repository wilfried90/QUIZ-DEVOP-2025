// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/api/quizzes/')
      .then(res => res.json())
      .then(data => setQuizzes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Liste des Quiz</Typography>
      <Stack spacing={2}>
        {quizzes.map((quiz) => (
          <Card key={quiz.id}>
            <CardContent>
              <Typography variant="h6">{quiz.title}</Typography>
              <Button onClick={() => navigate(`/quiz/${quiz.id}`)} variant="contained" sx={{ mt: 1 }}>
                Commencer
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
