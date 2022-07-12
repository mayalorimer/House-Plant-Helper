const router = require('express').Router();
const { Post, Advice } = require('../../models');

// post a new post
router.post('/', async (req, res) => {
  try {
    const newProject = await Post.create({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      user_id: req.session.user_id
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

//create a comment / advice
router.post('/advice', async (req, res) => {
  try {
    const newAdvice = await Advice.create({
      advice: req.body.advice, 
      user_id: req.session.user_id,
      post_id: req.body.post_id
    });

    res.status(200).json(newAdvice);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
