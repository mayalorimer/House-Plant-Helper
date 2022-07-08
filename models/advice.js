const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Advice extends Model {}

Advice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    advice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Advice;