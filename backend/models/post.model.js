'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.User, { foreignKey: 'userId' });
      models.Post.hasMany(models.Like, { onDelete: 'cascade' });
      models.Post.hasMany(models.Comment, { onDelete: 'cascade' });
    }
  }
  Post.init({
    userId: {
      type: DataTypes.INTEGER
    },
    content: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};