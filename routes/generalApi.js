express = require('express');
router = express.Router();
let { db } = require('./../db/db');


order = {};


router.get('/', ()=>{

});

/** params @idplate , @quality  **/
router.post('/placeOrder',async (req, res)=>{
    console.log(req.body);
     id = req.body.idplate;
     data = await findByIdPlate(id);
    res.json({status:data});

});


router.post('/addStock', async (req, res)=>{
    try {
        stock = req.body;
        result = await addItem(stock);
        if(result['affectedRows'] == 1) res.json({status: 'save'});
        res.json({status: 'fail'});
    } catch (error) {
        console.warn(error);
    }
});

router.post('/deleteStock', async (req, res)=>{
    try {
        id = req.body.idplate;
        result = await deleteItem(id);
        console.log(result);
        if(result['affectedRows'] == 1) res.json({status: 'delete'});
        res.json({status: 'fail'});
    } catch (error) {
        console.warn(error);
    }
});


router.post('/addPlate',async (req, res)=>{
    console.log(req.body);
    data = req.body;
    try {
        resut = await addItemIngredients(data);
        console.log('create ingredient', result);
        if(result['affectedRows'] == 1) {
            resut = await addItemPlate(data);
            console.log('create plate', result);
             result = await addItem(data);
             console.log('create stock', result);
            if(result['affectedRows'] == 1) res.json({status:'save'});
            res.json({status:'fail'});


        }
      
    } catch (error) {
        console.warn(error);
    }

});

async function findByIdPlate(id) {
    return  result = await db(`select * from ventas.stock where idplate = ${id};`); 
}


async function addItem(stock){
    return result = await db(`insert into ventas.stock 
        (iding, idplate, quantity) values
        (${Number(stock.iding)}, ${Number(stock.idplate)}, ${Number(stock.quantity)});`);
}

async function deleteItem(id){
    return result = await db(`delete from ventas.stock where idplate = ${Number(id)};`);
}

async function addItemPlate(plate){
    return result = await db(`insert into ventas.plate 
        (precie ,name, idinv) values
        (${Number(plate.precie)}, "${plate.namepl}", ${Number(plate.idinv)});`);
}


async function addItemIngredients(ingredient){
    return result = await db(`insert into ventas.ingredients 
        (name, purcharse_price, type_weight, weight ) values
        ("${ingredient.name}", ${Number(ingredient.purcharse_price)},
         "${ingredient.type_weight}", "${ingredient.weight}");`);
}

module.exports = router;