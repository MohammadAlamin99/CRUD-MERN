const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

//api routing end point 

// ==================================================================

// C = Creat 
router.post("/insertProduct", productController.insertProduct)


// R = Read 
router.post("/readProduct", productController.readProduct)



// U = Update 
router.post("/updateProduct/:id", productController.updateProduct)



// D = Delete 
router.delete("/deleteProduct/:id", productController.deleteProduct)


module.exports = router;