import { Router } from 'express';

const routerGar = Router();

import getDateGarController from '../controllers/getGarDate-controller.js';
import getDownloadFullBaseGarController from '../controllers/getDownloadFullBaseGar-controller.js';
import getDownloadUpdateGarController from '../controllers/getDownloadUpdateGar-controller.js';
import { getVerDateController } from '../controllers/getVerDate-controller.js';
import parseGarBaseController from '../controllers/parseGarBase-controller.js';
import parseGarUpdateController from '../controllers/parseGarUpdate-controller.js';

routerGar.post('/getFullBaseGar', getDownloadFullBaseGarController);
routerGar.post('/getUpdateGar', getDownloadUpdateGarController);
routerGar.post('/getDateGar', getDateGarController);
routerGar.post('/getVersionDate', getVerDateController);
routerGar.post('/parseGarBase', parseGarBaseController);
routerGar.post('/parseUpdate', parseGarUpdateController);

export default routerGar;
