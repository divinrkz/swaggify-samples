import * as express from 'express'
import { registerDefinition } from 'swaggiffy';

const router = express.Router();

router.get('/all', (req: any, res: any) => {
    res.send([{firstName: 'Divin', lastName: 'Divin'}])
});

router.get('/:id', (req: any, res: any) => {
    res.send({firstName: 'Divin', lastName: 'Divin'});
});

router.post('/', (req: any, res: any) => {
    res.send({firstName: 'Divin', lastName: 'Divin'});
});

router.put('/:id', (req: any, res: any) => {
    res.send({firstName: 'Divin', lastName: 'Divin'});
});

router.delete('/:id', (req: any, res: any) => {
    res.send(null);
});

registerDefinitions([{ router, tags: 'Users' }]);



module.exports = router;
