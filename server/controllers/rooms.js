const mongoose = require('mongoose'),
      Room = mongoose.model('Room'),
      User = mongoose.model('User')

module.exports = {
    all_rooms: function(req,res) {
        Room.find({'created_by.0.email':req.params.email},
            function(err,rooms){
            if (err) {
                res.json({'status':500,'errors':'error finding rooms'})
            }
            else {
                res.json({'status':200,'rooms':rooms});
            }
        })
    },
    add_room: function(req,res) {
        console.log("req body is",req.body)
        User.findOne({email:req.body.email},function(err,user){
            if (err) {
                res.json({'status':500,'errors':'error finding user'});
            }
            else {
                var room = new Room({
                    name:req.body.name,
                    created_by:user,
                })
                room.save(function(err,room){
                    if (err) {
                        res.json({'status':500,'errors':'error saving the room'});
                    }
                    else {
                        res.json({'status':200,'room':room});
                    }
                })
            }

        })

    },
    find_room: function(req,res) {
        Room.findById(req.params.id,function(err,room){
            if (err) {
                res.json({'status':500,'errors':'error finding room'})
            }
            else {
                res.json({'status':200,'room':room});
            }
        })
    },
    add_Friend_to_room: function(req,res) {
        Room.findById(req.params.id,function(err,room){
            if (err) {
                res.json({'status':500,'errors':'error finding room'})
            }
            else {
                room['joined_by'].push(req.body)
                room.save()
                res.json({'status':200,'room':room});
            }
        })
    },
    joined_rooms: function(req,res) {
        Room.find({ 'joined_by.email':req.params.email },
        function(err,rooms){
        if (err) {
            res.json({'status':500,'errors':'error finding rooms'})
        }
        else {
            res.json({'status':200,'rooms':rooms});
        }
    })
    }
}
