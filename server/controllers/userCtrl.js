const { User } = require('../database');

module.exports = {
  fetchAll: (req, res) => {
    User.findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log('IN FETCH ALL USERS ERROR', err);
        res.status(404).send(err);
      });
  },
  create: (req, res) => {
    User.create(req.body)
    .then((newUser) => {
      res.status(201).send(newUser);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },
};
