const mongoose = require('mongoose'),
      User = mongoose.model('User'),
      bcrypt = require('bcryptjs')

module.exports = {
    add_user: function(req,res) {
     console.log("add user function called")
    },
    log_user: function(req,res) {
    console.log("log user function called")
    }
}