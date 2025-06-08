const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('quiz_db', 'quiz_user', 'quiz_password', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connexion réussie à la base de données.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Erreur de connexion :', err);
    process.exit(1);
  });
