const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  //TODO: Add code to find all the projects and the associated users and render homepage
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain:true }));
    res.render("homepage", {
      posts,
    });
  } catch (err) {
    res.status(500).json(err); 
  }
});

// router.get('/posts', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });

//     const posts = postData.map((post) => post.get({ plain:true }));
//     res.render("homepage", {
//       posts,
//     });
//   } catch (err) {
//     res.status(500).json(err); 
//   }
// });

router.get('/posts', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain:true }));
    res.render("allposts", {
      posts,
    });

  } catch (err) {
    res.status(500).json(err); 
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  //TODO: Add code to find the loggedIn user and their associated projects and render profile
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signUp', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }


  res.render('signUp');
});

module.exports = router;
