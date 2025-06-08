const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('quiz_db', 'user', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => console.log('✅ Connexion à la BDD réussie.'))
  .catch(err => console.error('❌ Erreur connexion BDD :', err));

module.exports = sequelize;

