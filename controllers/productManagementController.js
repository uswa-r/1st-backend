const productModel = require('../models/productManagementModel');
const productData = async(req, res) => {
	try {
		const { productName, productPrice } = req.body;
		const docToCreate = new productModel({
			productName,
			productPrice
		})
		const docToSave = await docToCreate.save();
		res.json({
			Message:'API has created successfully!',
			Body:docToSave
		})
		
	} catch (error) {
		res.json({
			Message:error.message,
			Result:null,
			Data:false
		})
	}
}
const getProductData = async(req, res) => {
	try {
		const docToGet = await productModel.find();
		res.json({
			Message:'Documents has found!',
            Data:true,
			Result: docToGet
		});		
	} catch (error) {
		res.json({
			Message:error.message,
			Data:false,
			Result:null
		});
		
	}
}
const updateProductData = async(req, res) => {
	try {
		const docToUpdate = await productData.updateMany(
			{productPrice:0}
		);
		res.json({
			Message:'Documents has been updated!',
			Data:true,
			Result:docToUpdate
		})
	} catch (error) {
		res.json({
			Message:error.message,
			Result:null,
			Data:false
		});
	}
}

module.exports = {
	productData,
	getProductData,
	updateProductData
}