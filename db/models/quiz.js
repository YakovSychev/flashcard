const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      Quiz.belongsTo(Topic, { foreignKey: 'topicId' });
    }
  }

  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    topicId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Topics',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  Quiz.init(attributes, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};
