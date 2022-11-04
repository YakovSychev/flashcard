const router = require('express').Router();
const Main = require('../views/Main');
const { Topic } = require('../db/models');

router.get('/', async (req, res) => {
  const topics = await Topic.findAll({ raw: true });
  res.renderComponent(Main, { topics });
});

module.exports = router;
