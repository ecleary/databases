var models = require('../models');

// module.exports = {
//   get: function (req, res) {},
//   post: function (req, res) {}
// };

module.exports = {

  get: function (req, res) {
    models.users.getAll(function (err, results) {
      if (err) { /* do something */ }
      res.json(results);
    });
  },
  post: function (req, res) {
    var params = [req.body.username];
    models.users.create(params, function (err, results) {
      if (err) { /* do something */ }
      res.sendStatus(201);
    });
  }
};