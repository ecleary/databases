CREATE DATABASE IF NOT EXISTS chat;

USE chat;


CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VarCHAR(255)
);



CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  room_id INT,
  message_text VARCHAR(255) NOT NULL,
  created_at DATETIME,
  user_name VARCHAR(255),
  -- PRIMARY KEY (id , room_id),
  FOREIGN KEY (room_id)
    REFERENCES rooms (id)
);

/* Create other tables and define schemas for them here! */






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- CREATE TABLE IF NOT EXISTS tasks (
--     task_id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     start_date DATE,
--     due_date DATE,
--     status TINYINT NOT NULL,
--     priority TINYINT NOT NULL,
--     description TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE IF NOT EXISTS checklists (
--     todo_id INT AUTO_INCREMENT,
--     task_id INT,
--     todo VARCHAR(255) NOT NULL,
--     is_completed BOOLEAN NOT NULL DEFAULT FALSE,
--     PRIMARY KEY (todo_id , task_id),
--     FOREIGN KEY (task_id)
--         REFERENCES tasks (task_id)
--         ON UPDATE RESTRICT ON DELETE CASCADE
-- );