import { Router } from 'express';

const routerBD = Router();

import getSyncBDcontroller from '../controllers/GetSyncBD-controller.js';
import getDropBDcontroller from '../controllers/GetDropBD-controller.js';

routerBD.post('/getSyncBD', getSyncBDcontroller);
routerBD.post('/getDropBD', getDropBDcontroller);
export default routerBD;
