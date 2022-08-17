const express = require('express');
const Router = express.Router();

//calling controllers
const { productData,
        getProductData,
		updateProductData
	 } = require('../controllers/productManagementController')

Router.post('/productData', productData)
Router.get('/getProductData', getProductData)
Router.post('/updateProductData', updateProductData)

module.exports = Router;