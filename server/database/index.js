const Sequelize = require('sequelize');
const db = require('./config');
const seed = require('../seeding');
const memeSeedData = require('../seeding/memeSeedData');
const userSeedData = require('../seeding/userSeedData');

// TODO define model for User table
  // firstname: STRING
  // lastname: STRING
  // age: INTEGER

// TODO define model for Meme table
  // url: STRING
  // text: STRING

// TODO set up relations between User and Meme tables
  // User has many Memes
  // Meme belongs to a User

// TODO sync tables and initialize seeding
