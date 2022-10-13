//requiring express again for routes
const express = require('express');
//connecting express with router
const router = express.Router();
//connecting path to controller for routes
const productController = require('../controllers/product_controller');

//for home
router.get('/',productController.home);
//API to list products
router.get('/products',productController.list);
//API to add products to data base
router.post('/products/create',productController.create);
//API to delete products using unique id from database
router.delete('/products/:id',productController.delete);
//API to update quantity of a product using unique id of product
router.post('/products/:id/update_quantity/',productController.update);

//exporting router
module.exports=router;
