const express = require('express');
const app = express();
const quizRoutes = require('./routes/quizRoutes'); // 👈 doit pointer vers ton fichier de routes

app.use(express.json());
app.use('/quiz', quizRoutes); // 👈 préfixe correct pour accéder à /quiz/questions

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));

