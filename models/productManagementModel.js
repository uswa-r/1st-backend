//Dependencies
const mongoose = require('mongoose');

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();


//Start Block Schema Creating
const productSchema = mongoose.Schema({
    productName: { type: String, required: true, unique: true},
    productPrice: { type: Number, type:String, required: true},
    status: { type:Number, default:1 },
    // ImageUrl: { type: String },
    // ImageName: { type: String },
    // ImageMimeType: { type: String },
    createdDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
},{timeStamp:true})


//Exporting The Schema
module.exports = mongoose.model('Product-Collection', productSchema);