const Sequelize = require('sequelize');
const db = require('./config');
const seed = require('../seeding');
const memeSeedData = require('../seeding/memeSeedData');
const userSeedData = require('../seeding/userSeedData');

const User = db.define('User', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

const Meme = db.define('Meme', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.hasMany(Meme, { foreignKey: { name: 'user_id', allowNull: true }, onDelete: 'CASCADE' });
Meme.belongsTo(User, { foreignKey: { name: 'user_id', allowNull: true }, onDelete: 'CASCADE' });

db.sync({ force: true })
  .then(() => seed(User, userSeedData, 'USER'))
  .then(() => seed(Meme, memeSeedData, 'MEME'));

module.exports = {
  User,
  Meme,
};
