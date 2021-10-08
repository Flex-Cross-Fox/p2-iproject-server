const router = require('express').Router();
const stockController = require('../controller/stockProduct');

router.get('/', stockController.allStock);
router.get('/:id', stockController.DetailStock);
router.patch('/:id', stockController.delete);
router.put('/:id', stockController.edit);
router.post('/addStock/:id', stockController.addStock);
router.post('/addNewStock', stockController.addNewStock);

module.exports = router;