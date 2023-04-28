import { Router } from 'express';

const routerGar = Router();

import getDateGarController from '../controllers/GetGarDate-controller.js';
import getDownloadFullBaseGarController from '../controllers/GetDownloadFullBaseGar-controller.js';
import getDownloadUpdateGarController from '../controllers/GetDownloadUpdateGar-controller.js';
import { getVerDateController } from '../controllers/GetVerDate-controller.js';
import parseGarBaseController from '../controllers/ParseGarBase-controller.js';
import parseGarUpdateController from '../controllers/ParseGarUpdate-controller.js';

routerGar.post('/getFullBaseGar', getDownloadFullBaseGarController);
routerGar.post('/getUpdateGar', getDownloadUpdateGarController);
routerGar.post('/getDateGar', getDateGarController);
routerGar.post('/getVersionDate', getVerDateController);
routerGar.post('/parseGarBase', parseGarBaseController);
routerGar.post('/parseUpdate', parseGarUpdateController);

export default routerGar;
