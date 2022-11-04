/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const quizData = [
      {
        question: 'Какова профессия у повара?',
        answer: 'Повар',
        topicId: 1,
      },
      {
        question: 'Сколько ты должен, если сел на пенёк?',
        answer: 'Косарь',
        topicId: 1,
      },
      {
        question: 'Сколько водки было в стакане у Дианы Шурыгиной?',
        answer: 'На донышке',
        topicId: 1,
      },
      {
        question: 'Что случилось с пацаном, который шёл к успеху?',
        answer: 'Не получилось, не фартануло',
        topicId: 1,
      },
      {
        question: 'Что принес своему братишке персонаж картины "Зелёный слоник"?',
        answer: 'Покушать',
        topicId: 1,
      },
      {
        question: 'Что так легко перепутать с камерой?',
        answer: 'Сову',
        topicId: 1,
      },
      {
        question: 'Рыба моей мечты?',
        answer: 'Язь',
        topicId: 1,
      },
      {
        question: 'С чем лучше всего употреблять котлетки?',
        answer: 'С пюрешкой',
        topicId: 1,
      },
      {
        question: 'Каким словом предлагает Наталья Морская Пехота начинать движение?',
        answer: 'Стартуем',
        topicId: 1,
      },
      {
        question: 'Как зовут мужчину, который постоянно прячем боль под улыбкой?',
        answer: 'Гарольд',
        topicId: 1,
      },
      {
        question: 'Моя попытка номер...?',
        answer: '5',
        topicId: 2,
      },
      {
        question: 'Он уехал прочь...?',
        answer: 'на ночной электричке',
        topicId: 2,
      },
      {
        question: 'Еду в магазин Gucci в...?',
        answer: 'Санкт-Петербурге',
        topicId: 2,
      },
      {
        question: 'Я так привыкла жить одним тобой...?',
        answer: 'Одним тобой',
        topicId: 2,
      },
      {
        question: 'Что нам ветер, да неа это ответит, Несущийся мимо...?',
        answer: 'Да сломавший крыло',
        topicId: 2,
      },
      {
        question: 'Я на тебе никогда не женюсь...?',
        answer: 'Я лучше съем перед ЗАГСом свой паспорт',
        topicId: 2,
      },
      {
        question: '8 800 555 35 35, проще позвонить...?',
        answer: 'Чем у кого-то занимать',
        topicId: 2,
      },
      {
        question: 'Я свободен...?',
        answer: 'Словно птица ва небесах',
        topicId: 2,
      },
      {
        question: 'Бухгалтер...?',
        answer: 'Милый мой бухгалтер',
        topicId: 2,
      },
      {
        question: 'Первым делом, первым делом...?',
        answer: 'самолеты',
        topicId: 2,
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
