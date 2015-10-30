'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  pass: { type: String, required: true },
  creationDate: { type: Date, default: new Date() }
});

UserSchema.pre('save', function(done) {
   if (this.username === 'Mister')  {
     return done(new Error('Invalid name'));
   }

   this.creationDate = new Date();

   done();
});

UserSchema.virtual('nameFormatted').get(function()  {
  return this.username.toUpperCase();
});

module.exports = mongoose.model('User', UserSchema);
