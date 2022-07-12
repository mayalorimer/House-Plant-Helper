const router = require('express').Router();
const { Post, Advice } = require('../../models');
const withAuth = require('../../utils/auth');

// get post by ID
router.get('/posts/:id', withAuth, async (req, res) => {
  try {
   const postData = await Post.findByPk(req.params.id);

   const post = postData.get({ plain: true });
  // figure out where to send this data
   res.render('homepage', {
    post,
    logged_in: req.session.logged_in,
   });

  } catch (err) {
    res.status(500).json(err); 
  }
});


// get all advice
router.get('/', async (req, res) => {
  try {
    const adviceData = await Advice.findAll({
      include: [
        {
          model: Post, 
          attributes: ['title', 'description', 'image'],
        },
      ],
    });

    const advices = adviceData.map((advice) => advice.get({ plain:true }));
    //figure out where to send this data
    res.render('homepage', {
      advices,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err); 
  }
});


// get by ID
router.get('/advice/:id', withAuth, async (req, res) => {
  try {
   const adviceData = await advice.findByPk(req.params.id);

   const advice = adviceData.get({ plain: true });
  // figure out where to send this data
   res.render('homepage', {
    advice,
    logged_in: req.session.logged_in,
   });

  } catch (err) {
    res.status(500).json(err); 
  }
});


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
