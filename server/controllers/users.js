const mongoose = require('mongoose'),
      User = mongoose.model('User'),
      bcrypt = require('bcryptjs')

module.exports = {
    add_user: function(req,res) {
     bcrypt.hash(req.body.password,10,function(err,hash){
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
               var user = new User({
                   name:req.body.name,
                   email:req.body.email,
                   password:hash
               })
               user.save(function(err,user){
                   if (err) {
                    res.json({'status':500,'errors':err})
                   }
                   else {
                    res.json({'status':200,'user':user});
                   }
               })
            }
        })
    },
    log_user: function(req,res) {
        User.findOne({email:req.body.email},function(err,user){
            if (user == null) {
                res.json({'status':500,'errors':'error finding email'});
            }
            else {
                bcrypt.compare(req.body.password, user.password)
                .then(result => {
                    if (result == true ) {
                        res.json({'status':200,'user':user});
                    }
                    else {
                        res.json({'status':500,'errors':'error validating password'});
                    }
                })
                .catch(error => {
                    res.json({'status':500,'errors':'error validating password'});
                })
            }

        })
    },
    find_user: function(req,res) {
        User.findOne({email:req.params.email},function(err,user){
            if (err) {
                res.json({'status':500,'errors':'error finding user'});
            }
            else {
                res.json({'status':200,'user':user});
            }
        })
    }
}