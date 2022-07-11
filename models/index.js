const User = require('./User');
const Advice = require('./advice');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
}); 

Advice.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
})

Advice.belongsTo(Post, {
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





module.exports = { User, Post, Advice };