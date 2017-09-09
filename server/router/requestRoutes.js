const router = require('express').Router();
const memesCtrl = require('../controllers/memesCtrl');
const userCtrl = require('../controllers/userCtrl');

// === USER ROUTES ===
router.get('/users', userCtrl.fetchAll); // return all users
router.post('/user', userCtrl.create); // create a new user

// === MEMES ROUTES ===
router.get('/memes', memesCtrl.fetchAll); // return all memes
router.get('/memes/:userId', memesCtrl.fetch); // return user specific memes
router.post('/meme/:userId', memesCtrl.create); // create a new meme

module.exports = router;
