//The mongoose module is being imported
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema  = new Schema({
    name: {
        type: String,
        required: [true, "Title is required."],
        //Informing the user that the title must be at least 5 characters long
        minlength: [5, "Title must be at least 5 characters long."],
      },
      price: { type: Number, required: [true, "Price is required."] },
      description: {
        type: String,
        required: [true, "Description is required."],
         //Informing the user that the description must be at least 2 characters long
        minlength: [2, "Description must be at least 2 characters long."],
      },
      quantity: {type: Number, default: 1},
    category:String,
    created_at: { type: Date, default: Date.now},
    bestseller:Boolean,
},{ timestamp: true});
// {
//     type: Schema.ObjectId,
//     ref: "Collection"
// },
// const CollectionSchema = new Schema({
//     name: String,
// })
const Product = mongoose.model('Products', ProductSchema) ; 
// const Collection = mongoose.model('Collection', CollectionSchema) ; 
module.exports = {
    Product,
}