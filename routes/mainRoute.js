const router = require('express').Router();
const Main = require('../views/Main.jsx')
const { Topic } = require('../db/models')

router.get('/', async ( req, res ) => {
const topics = await Topic.findAll({raw:true});
res.renderComponent( Main, { topics })
console.log(topics);
})

module.exports = router;