const router = require('express').Router();
const CardPage = require('../views/CardPage');
const { Quiz } = require('../db/models');

router.get('/:topic', async (req, res) => {
  const { topic } = req.params;
  const quizzes = await Quiz.findAll({ where: { topicId: topic } });
  res.renderComponent(CardPage, { quizzes });
});

router.post('/:topic', async (req, res) => {
  const { answer } = req.body;
  const rightAnswer = await Quiz.findOne({ where: { id: req.params.topic } });
  console.log(rightAnswer, answer);
  if (answer.toLowerCase() === rightAnswer.answer.toLowerCase()) {
    return res.json({ status: true, message: 'Огонь ответ верный' });
  }
  return res.json({ status: false, message: 'Неправда' });
});

module.exports = router;
