const express = require('express');
const router = express.Router();
const productController = require('../controller/productController')

//api routing end point 

// ==================================================================

// C = Creat 
router.post("/insertProduct", productController.insertProduct)


// R = Read 
router.get("/readProduct", productController.readProduct)



// U = Update 
router.post("/updateProduct", productController.updateProduct)



// D = Delete 
router.get("/deleteProduct", productController.deleteProduct)


module.exports = router;