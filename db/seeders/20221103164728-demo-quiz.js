/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const quizData = [
      {
        question: 'Что?',
        answer: 'Вот',
        topicId: 1,
      },
      {
        question: 'Kak?',
        answer: 'Вот',
        topicId: 3,
      },
    ];

    const quizs = quizData.map((quiz) => ({
      ...quiz,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Quizzes', quizs);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Quizzes');
  },
};
