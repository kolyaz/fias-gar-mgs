import { Router } from 'express';

const routerGar = Router();

import getDateGarController from '../controllers/getGarDate-controller.js';
import getFullBaseGarController from '../controllers/getFullBaseGar-controller.js';
import getVerDateController from '../controllers/getVerDate-controller.js';
import parseGarBaseController from '../controllers/parseGarBase-controller.js';

routerGar.post('/getFullBaseGar', getFullBaseGarController);
routerGar.post('/getDateGar', getDateGarController);
routerGar.post('/getVersionDate', getVerDateController);
routerGar.post('/parseGarBase', parseGarBaseController);

export default routerGar;
