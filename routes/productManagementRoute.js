const express = require('express');
const Router = express.Router();

//calling controllers
const { productData,
        getProductData,
		updateProductData,
		deleteProductData
	 } = require('../controllers/productManagementController')

Router.post('/productData', productData)
Router.get('/getProductData', getProductData)
Router.post('/updateProductData', updateProductData)
Router.delete('/deleteProductData', deleteProductData)

module.exports = Router;