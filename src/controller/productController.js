const productModel = require("../model/productModel");

// CRUD OPERATION

// C = Creat
exports.insertProduct = async (req, res) => {
  let reqBody = req.body;
  try {
    let data = await productModel.create(reqBody);
    res.status(200).json({ status: "success", data });
  } catch (err) {
    res.status(400).json({ status: "failed", err });
  }
};

// R= Read

exports.readProduct = async (req, res) => {
  let query = {};
  let projection = {
    ProductName: 1,
    ProductCode: 1,
    Img: 1,
    UntilPrice: 1,
    Qty: 1,
    TotalPrice: 1,
  };
  try {
    let data = await productModel.find(query, projection);
    res.status(200).json({ status: "success", data });
  } catch (err) {
    res.status(400).json({ status: "faild", err });
  }
};

// U = Update
exports.updateProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const updateResult = await ProductModel.updateOne(
        { _id: productId },
        { $set: req.body }
      );
  
      if (updateResult.nModified === 1) {
        res.json({ status: "success", message: "Product updated" });
      } else {
        res.status(404).json({ status: "fail", message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update product", error });
    }
  };
  
  
// D = Delete
//delete
exports.deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await productModel.findByIdAndDelete({ _id: productId });
      res.status(200).json({ message: "Success delete product", product });
    } catch (err) {
      res.status(200).json({ message: "product not delete" });
    }
  };
