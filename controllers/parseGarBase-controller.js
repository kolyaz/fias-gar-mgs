import * as dotenv from 'dotenv';

import { Worker } from 'worker_threads';

dotenv.config();
const promWork = async (worker) => new Promise((resolve, reject) => {
  worker.on('message', resolve);
  worker.on('error', reject);
  worker.on('exit', (code) => {
    if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
  });
});
const addWork = (poolWorkers, currentRegion) => {
  const region = currentRegion;
  for (const worker in poolWorkers) {
    poolWorkers[worker].worker.postMessage({
      // name: itemTableRegion[item],
      region: +region + (+worker),
      pathFile: process.env.PATH_FULL_GAR,
    });
  }
  console.log('poolWorkers.length', poolWorkers.length);
  return poolWorkers.length;
};

const parseGarBaseController = async () => {
  const maxRegionNumber = 99;
  const poolWorkers = [];
  for (let index = 0; index < process.env.CPU_THREADS; index++) {
    poolWorkers.push({ worker: new Worker('./lib/GarGetRegionItem.js') });
  }
  for (let currentRegion = 1; currentRegion < maxRegionNumber;) {
    currentRegion += addWork(poolWorkers, currentRegion);
    console.log('currentRegion', currentRegion);
    for (const worker in poolWorkers) {
      // eslint-disable-next-line no-await-in-loop
      console.log(`work is ${worker}`, await promWork(poolWorkers[worker].worker));
    }
  }
};
export default parseGarBaseController;
