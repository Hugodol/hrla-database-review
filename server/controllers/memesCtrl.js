const { Meme } = require('../database');

module.exports = {
  fetchAll: (req, res) => {
    Meme.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },
  fetch: (req, res) => {
    Meme.findAll({
      where: { user_id: req.params.userId },
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },
  create: (req, res) => {
    Meme.create({
      url: req.body.url,
      text: req.body.text,
      user_id: req.params.userId,
    })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },
};
