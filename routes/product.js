express = require('express');
router = express.Router();

router.get('/', (req, res) =>{
    res.render('product', {title: 'Productos'});
})

module.exports = router;