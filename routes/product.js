express = require('express');
router = express.Router();
const { db } = require('./../db/db');

function requireRole(role){
    return function(req, res, next){
        console.log(req.session.user);
        next();
    }
}

router.get('/', requireRole("user"), (req, res) =>{
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

router.get('/get-products', (req, res)=>{
    console.log("entre");
    db(`select * from products;`).then(result => {
        console.log(result);
        res.json({data: result});
    }).catch(error => {console.log(error)});
});
module.exports = router;