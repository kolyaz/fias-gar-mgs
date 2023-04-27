import * as dotenv from 'dotenv';
// import { Worker } from 'worker_threads';
import { getGarDataDictionary, itemDictionary } from './GetGarDataDictionary.js';

dotenv.config();
const maxRegionNumber = process.env.MAX_REGION_NUMBER;

const addWork = (poolWorkers, currentRegion, pathFile) => {
  for (const worker in poolWorkers) {
    const region = +currentRegion + (+worker);
    if (region <= maxRegionNumber) {
      poolWorkers[worker].worker.postMessage({
        region,
        pathFile,
      });
    }
  }
  return poolWorkers.length;
};
const getGarData = async (path, poolWorkers) => {
  for (const item in itemDictionary) {
    const name = itemDictionary[item];
    // eslint-disable-next-line no-await-in-loop
    await getGarDataDictionary(path, name);
  }
  // const poolWorkers = [];
  // for (let index = 0; index < process.env.CPU_THREADS; index++) {
  //   poolWorkers.push({ worker: new Worker('./GarGetRegionItem.js') });
  // }
  for (let currentRegion = 1; currentRegion < maxRegionNumber;) {
    currentRegion += addWork(poolWorkers, currentRegion, path);
  }
};

export {
  getGarData,
};
