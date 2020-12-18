var db = require('../db');

// module.exports = {
//   getAll: function () {},
//   create: function () {}
// };

module.exports = {

  getAll: function (callback) {
    // fetch all users
    var queryStr = 'SELECT * FROM users';
    db.query(queryStr, function (err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    // create a user
    var queryStr = 'INSERT INTO users(username) VALUES (?)'; // ? syntax again
    db.query(queryStr, params, function (err, results) {
      callback(err, results);
    });
  }
};