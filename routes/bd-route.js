import { Router } from 'express';

const routerBD = Router();

import getSyncBDcontroller from '../controllers/getSyncBD-controller.js';
import getDropBDcontroller from '../controllers/getDropBD-controller.js';

routerBD.post('/getSyncBD', getSyncBDcontroller);
routerBD.post('/getDropBD', getDropBDcontroller);
export default routerBD;
