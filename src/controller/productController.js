const productModel = require('../model/productModel');


// CRUD OPERATION

// C = Creat 
exports.insertProduct = async(req, res)=>{
    let reqBody = req.body;
    try{
        let data = await productModel.create(reqBody)
        res.status(200).json({status:'success', data})
    }
    catch(err){
    res.status(400).json({status:'failed', err})
    }
}

// R= Read 

exports.readProduct = async(req, res)=>{
    let query ={};
    let projection={ProductName, ProductCode, Img, UntilPrice,Qty,TotalPrice}
    try{
        let data = await productModel.find(query, projection)
        res.status(200).json({status:"success", data})
    }
    catch(err){
        res.status(400).json({status:"faild", err})
    }
}

// U = Update
exports.updateProduct = async(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    let reqBody = req.body;
    try{
        let data = await productModel.updateOne(query, reqBody)
        res.status(200).json({status:"success", data})
    }catch(err){
        res.status(400).json({status:"faild", err})
    }
}
// D = Delete
exports.deleteProduct = async(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    try{
        let data = await productModel.remove(query)
        res.status(200).json({status:"success", data})
    }catch(err){
        res.status(400).json({status:"faild", err})
    }
}
