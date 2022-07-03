const router = require('express').Router();
const { registerDefinition } = require('swaggiffy');
const controllers = require('../controllers/product.controller');


router.get('/',  controllers.getAll);

router.get('/:id',  controllers.getById);

router.post('/' , controllers.create);

router.put('/:id', controllers.update);

router.delete('/:id', controllers.deleter);

registerDefinition(router, {tags: 'Products', mappedSchema: 'Product', basePath: '/products'});

exports.ProductRoute = router;