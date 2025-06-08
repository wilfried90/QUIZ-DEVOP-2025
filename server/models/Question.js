module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    question_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    option_a: DataTypes.STRING,
    option_b: DataTypes.STRING,
    option_c: DataTypes.STRING,
    option_d: DataTypes.STRING,
    correct_option: DataTypes.STRING,
  });

  return Question;
};

