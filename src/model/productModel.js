const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    ProductName:{type:String},
    ProductCode:{type:String},
    Img:{type:String},
    UntilPrice:{type:String},
    Qty:{type:String},
    TotalPrice:{type:String},
    CreatDate:{type:Date, default:Date.now()}
},
    {versionKey:false}
);


const productModel = mongoose.model('Products', dataSchema);
module.exports=productModel;