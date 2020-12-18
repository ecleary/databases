var db = require('../db');

module.exports = {
  //Get Request that defines a variable with mysequel commands to access
  getAll: function (callback) {
    // fetch all messages
    // text, username, roomname, id
    var queryStr = 'SELECT messages.id, messages.message_text, messages.room_name, users.username \
                    FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id) \
                    ORDER BY messages.id DESC';
    db.query(queryStr, function (err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    // create a message for a user id based on the given username
    var queryStr = 'INSERT INTO messages(message_text, user_id, room_name) \
                    VALUE (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)'; // ? appears to be some kind of SQL syntax
    db.query(queryStr, params, function (err, results) {
      callback(err, results);
    });
  }

};
