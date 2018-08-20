const mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
    hearts: {
        type: Number,
        default: 0
    },
    mehs: {
        type: Number,
        default: 0
    },
    hates: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

var ProductSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    nodeID: {
        type:Number,
        required: [true,'Please give an Amazon link for the product']
    },
    poll: [PollSchema]
}, {timestamps: true})

var UserSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    email: {
        type:String,
    },
    password: {
        type: String
    },
    saved_products: [ProductSchema],
    posted_products: [ProductSchema]

}, {timestamps: true});

var RoomSchema = new mongoose.Schema({
     name: {
        type: String
    },
    products:[ProductSchema],
    created_by:[UserSchema],
    joined_by:[UserSchema]
}, {timestamps: true});

mongoose.model('Poll',PollSchema);
mongoose.model('Product',ProductSchema);
mongoose.model('User',UserSchema);
mongoose.model('Room',RoomSchema);