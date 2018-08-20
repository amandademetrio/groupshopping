const mongoose = require('mongoose'),
      Room = mongoose.model('Room')

module.exports = {
    all_rooms: function(req,res) {
        console.log("all rooms function called")
    },
    add_room: function(req,res) {
        console.log("add rooms function called")
    }
}
