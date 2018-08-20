module.exports = function(app) {

    const room = require('../controllers/rooms.js'),
          user = require('../controllers/users.js'),
          product = require('../controllers/products.js')

    //Rooms
    app.get('/rooms', function(req,res) {
        room.all_rooms(req,res);
    });

    app.post('/rooms', function(req,res) {
        room.add_room(req,res);
    });

    //Users
    app.post('/users', function(req,res) {
        user.add_user(req,res);
    });

    app.post('/users/log',function(req,res){
        user.log_user(req,res);
    })

    //Products
    app.get('/products', function(req,res) {
        product.all_products(req,res);
    });

    app.post('/products', function(req,res) {
        room.add_product(req,res);
    });

}