const router = require('express').Router();
const CardPage = require('../views/CardPage.jsx');
const { Quiz } = require('../db/models');

router.get('/', async (req, res) => {
  const quizzes = await Quiz.findAll({ raw: true });
  // console.log(quizzes);
  res.renderComponent(CardPage, { quizzes });
});

module.exports = router;
