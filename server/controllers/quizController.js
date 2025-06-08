exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    console.log('📦 Questions récupérées :', questions);  // 👈 Ajoute ça
    res.json(questions);
  } catch (error) {
    console.error('❌ Erreur serveur :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

