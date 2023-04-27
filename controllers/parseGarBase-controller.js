import { Worker } from 'worker_threads';

import * as dotenv from 'dotenv';
import { getGarData } from '../lib/GetGarData.js';

// import { getGarDataDictionary, itemDictionary } from '../lib/GetGarDataDictionary.js';

dotenv.config();
// const maxRegionNumber = process.env.MAX_REGION_NUMBER;

// const addWork = (poolWorkers, currentRegion) => {
//   for (const worker in poolWorkers) {
//     const region = +currentRegion + (+worker);
//     if (region <= maxRegionNumber) {
//       poolWorkers[worker].worker.postMessage({
//         // name: itemTableRegion[item],
//         region,
//         pathFile: process.env.PATH_FULL_GAR,
//       });
//     }
//   }
//   // console.log('poolWorkers.length', poolWorkers.length);
//   return poolWorkers.length;
// };

const parseGarBaseController = async () => {
  const poolWorkers = [];
  for (let index = 0; index < process.env.CPU_THREADS; index++) {
    poolWorkers.push({ worker: new Worker('./lib/GarGetRegionItem.js') });
  }
  // for (let currentRegion = 1; currentRegion < maxRegionNumber;) {
  //   currentRegion += addWork(poolWorkers, currentRegion);
  // }
  // for (const item in itemDictionary) {
  //   const name = itemDictionary[item];
  //   // eslint-disable-next-line no-await-in-loop
  //   await getGarDataDictionary(process.env.PATH_FULL_GAR);
  // }
  // process.env.PATH_FULL_GAR
  // process.env.PATH_FULL_GAR
  await getGarData(process.env.PATH_FULL_GAR, poolWorkers);
};
export default parseGarBaseController;
