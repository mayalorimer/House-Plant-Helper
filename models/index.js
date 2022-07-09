const User = require('./User');
const Posts = require('./Posts');
const Advice = require('./advice');
const Post = require('./Posts');

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.belongsTo(User, {
    foreignKey: 'user_id'
}); 

Advice.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
})

Advice.belongsTo(Posts, {
    foreignKey: 'post_id',
    onDelete: "CASCADE"
})

User.hasMany(Advice, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Advice, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});





module.exports = { User, Posts, Advice };