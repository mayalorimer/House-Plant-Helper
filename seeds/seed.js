const sequelize = require('../config/connection');
const { User, Post, Advice } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const adviceData = require('./adviceData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  await Advice.bulkCreate(adviceData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();