var models = require('../models');

// module.exports = {
//   get: function (req, res) {}, // a function which handles a  request for all messages
//   post: function (req, res) {} // a function which handles posting a message to the database
// };

module.exports = {

  get: function (req, res) {
    models.messages.getAll(function (err, results) {
      if (err) { /* fly to Mars */ }
      res.json(results);
    });
  },
  post: function (req, res) {
    var params = [req.body.message, req.body.username, req.body.roomname];
    models.messages.create(params, function (err, results) {
      if (err) { /* do something */ }
      res.sendStatus(201);
    });
  }
};