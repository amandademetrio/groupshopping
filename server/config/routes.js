module.exports = function(app) {

    const room = require('../controllers/rooms.js'),
          user = require('../controllers/users.js'),
          product = require('../controllers/products.js')

    //Rooms
    //Getting all the rooms from the user with this email
    app.get('/rooms/:email', function(req,res) {
        room.all_rooms(req,res);
    });

    //Getting all the rooms where the user is invited to
    app.get('/rooms/joined/:email', function(req,res) {
        room.joined_rooms(req,res);
    });

    //Adding a new room
    app.post('/rooms', function(req,res) {
        room.add_room(req,res);
    });

    //Finding info about room with this id
    app.get('/rooms/get/:id', function(req,res) {
        room.find_room(req,res);
    });

    //Adding user to a room
    app.put('/rooms/update/:id', function(req,res) {
        console.log("got into route to update room")
        room.add_Friend_to_room(req,res);
    });

    //Users
    app.post('/users', function(req,res) {
        user.add_user(req,res);
    });

    app.post('/users/log',function(req,res){
        user.log_user(req,res);
    })

    app.get('/users/:email',function(req,res){
        user.find_user(req,res)
    })

    //Products
    app.get('/products', function(req,res) {
        product.all_products(req,res);
    });

    app.post('/products', function(req,res) {
        room.add_product(req,res);
    });

}