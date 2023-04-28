import { Worker } from 'worker_threads';

import * as dotenv from 'dotenv';
import { getGarData } from '../lib/GetGarData.js';

dotenv.config();

const parseGarBaseController = async () => {
  const poolWorkers = [];
  for (let index = 0; index < process.env.CPU_THREADS; index++) {
    poolWorkers.push({ worker: new Worker('./lib/GarSubWorkers.js') });
  }
  await getGarData(process.env.PATH_FULL_GAR, poolWorkers);
};
export default parseGarBaseController;
