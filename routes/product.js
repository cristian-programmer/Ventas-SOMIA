express = require('express');
router = express.Router();
const { db } = require('./../db/db');
router.get('/', (req, res) =>{
    res.render('product', {title: 'Productos'});
});

router.post('/createProduct', (req, res) =>{
    products = req.body;
    console.log(typeof products.acquisitionPrice);

    db(`insert into ventas.products 
    (nameProduct, provider,acquisitionPrice, percentageProduct, unitPrice) values
    ("${products.nameProduct}", "${products.provider}", ${Number(products.acquisitionPrice)},
    ${Number(products.percentageProduct)}, ${Number(products.unitPrice)});`).then(result =>{
        console.log(result);
        res.json({status: 'save'});
    });
});

module.exports = router;