const Question = require("./models/Question");
const Answer = require("./models/Answer");
const sequelize = require("./db");

const questionsData = [
  {
    text: "Quelle est la capitale de la France ?",
    correctAnswer: "Paris",
    answers: ["Paris", "Lyon", "Marseille", "Bordeaux"],
  },
  {
    text: "Combien de continents existe-t-il sur Terre ?",
    correctAnswer: "7",
    answers: ["5", "6", "7", "8"],
  },
  {
    text: "Qui a peint la Joconde ?",
    correctAnswer: "Léonard de Vinci",
    answers: ["Picasso", "Van Gogh", "Léonard de Vinci", "Monet"],
  },
  {
    text: "Quelle planète est la plus proche du Soleil ?",
    correctAnswer: "Mercure",
    answers: ["Vénus", "Terre", "Mars", "Mercure"],
  },
  {
    text: "Quel est le plus grand océan du monde ?",
    correctAnswer: "Pacifique",
    answers: ["Atlantique", "Pacifique", "Arctique", "Indien"],
  },
  {
    text: "Qui est l'auteur de *Harry Potter* ?",
    correctAnswer: "J.K. Rowling",
    answers: ["George R.R. Martin", "J.K. Rowling", "Tolkien", "Stephen King"],
  },
  {
    text: "Combien de côtés a un hexagone ?",
    correctAnswer: "6",
    answers: ["4", "5", "6", "7"],
  },
  {
    text: "Quelle est la monnaie du Japon ?",
    correctAnswer: "Yen",
    answers: ["Dollar", "Euro", "Yen", "Peso"],
  },
  {
    text: "Quel est l'organe principal du système nerveux ?",
    correctAnswer: "Cerveau",
    answers: ["Cœur", "Poumons", "Foie", "Cerveau"],
  },
  {
    text: "Qui a découvert l'Amérique en 1492 ?",
    correctAnswer: "Christophe Colomb",
    answers: ["Napoléon", "Marco Polo", "Christophe Colomb", "Magellan"],
  },
];

async function seedQuestions() {
  await sequelize.sync({ force: true }); // Réinitialiser la base

  for (const q of questionsData) {
    const question = await Question.create({ text: q.text, correctAnswer: q.correctAnswer });

    for (const answerText of q.answers) {
      await Answer.create({ text: answerText, questionId: question.id });
    }
  }

  console.log("🎉 Questions et réponses ajoutées à la base !");
  process.exit();
}

seedQuestions();
