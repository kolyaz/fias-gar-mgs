import { Worker } from 'worker_threads';

import * as dotenv from 'dotenv';
import { getGarData } from '../lib/GetGarData.js';

dotenv.config();

const parseGarUpdateController = async () => {
  const poolWorkers = [];
  for (let index = 0; index < process.env.CPU_THREADS; index++) {
    poolWorkers.push({ worker: new Worker('./lib/GarSubWorkers.js') });
  }
  await getGarData(process.env.PATH_UPDATE_GAR, poolWorkers);
};
export default parseGarUpdateController;
