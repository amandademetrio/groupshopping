const mongoose = require('mongoose'),
    Product = mongoose.model('Product')

module.exports = {
    all_products: function(req,res) {
      console.log("all products function")
    },
    add_product: function(req,res) {
        console.log("add product function")
    }
}