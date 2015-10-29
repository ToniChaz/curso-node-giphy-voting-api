'use strict';

let DB = {
  "gustavo": {
    "username": "gustavo",
    "pass": "gus"
  },
  "tony": {
    "username": "tony",
    "pass": "XXX"
  },
};

function addUser(data, cb) {
  let username = data.username;

  if (DB[username]) {
    return cb(new Error('User already exists'));
  }
  DB[username] = {
    username: data.username,
    pass: data.pass
  };

  console.log('User added',   DB[username]);
  cb(null, DB[username]);
}

function findById(username, cb) {
   if (DB[username]) {
     return cb(null, DB[id]);
   }

   return cb(null, null);
}

function authenticate(username, pass, cb) {
  if (!DB[username]) {
    return cb(null, false);
  }
  let isValid = DB[username].pass === pass;

  return cb(null, isValid);
}

module.exports = {
  addUser,
  findById,
  authenticate
};
