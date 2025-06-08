module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define("Answer", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Answer.associate = (models) => {
    Answer.belongsTo(models.Question, {
      foreignKey: "questionId",
      as: "question",
    });
  };

  return Answer;
};

