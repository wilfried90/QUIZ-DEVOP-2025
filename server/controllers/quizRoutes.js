const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController'); // accès au contrôleur

router.get('/questions', quizController.getQuestions); // route pour récupérer les questions

module.exports = router;
