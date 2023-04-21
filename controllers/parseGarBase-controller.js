// import { createWriteStream, existsSync } from 'fs';
import * as dotenv from 'dotenv';
// import GarXmlZip from '../lib/GarXmlZip.js';
// import { garGetAllRegion, itemTableRegion, garGetRegionItem } from '../lib/GarGetRegionItem.js';

import { Worker } from 'worker_threads';

dotenv.config();
const itemTableRegion = {
  AADDR_OBJ: 'ADDR_OBJ',
  ADDR_OBJ_DIVISION: 'ADDR_OBJ_DIVISION',
  ADDR_OBJ_PARAMS: 'ADDR_OBJ_PARAMS',
  ADM_HIERARCHY: 'ADM_HIERARCHY',
  APARTMENTS: 'APARTMENTS',
  APARTMENTS_PARAMS: 'APARTMENTS_PARAMS',
  CARPLACES: 'CARPLACES',
  CARPLACES_PARAMS: 'CARPLACES_PARAMS',
  CHANGE_HISTORY: 'CHANGE_HISTORY',
  HOUSES: 'HOUSES',
  HOUSES_PARAMS: 'HOUSES_PARAMS',
  MUN_HIERARCHY: 'MUN_HIERARCHY',
  NORMATIVE_DOCS: 'NORMATIVE_DOCS',
  REESTR_OBJECTS: 'REESTR_OBJECTS',
  ROOMS: 'ROOMS',
  ROOMS_PARAMS: 'ROOMS_PARAMS',
  STEADS: 'STEADS',
  STEADS_PARAMS: 'STEADS_PARAMS',
};

const promWork = async (worker) => new Promise((resolve, reject) => {
  worker.on('message', resolve);
  worker.on('error', reject);
  worker.on('exit', (code) => {
    if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
  });
});
const addWork = async (poolWorkers, currentRegion) => {
  const region = currentRegion;
  for (const item in itemTableRegion) {
    for (const worker in poolWorkers) {
      poolWorkers[worker].worker.postMessage({
        name: itemTableRegion[item],
        region: +region + (+worker),
        pathFile: process.env.PATH_FULL_GAR,
      });
      // eslint-disable-next-line no-await-in-loop
      // await promWork(poolWorkers[worker].worker);
    }
  }
  return new Promise((resolve, reject) => {
    resolve(poolWorkers.lehgth);
  });
};

const parseGarBaseController = async () => {
  let currentRegion = 1;
  const maxRegionNumber = 99;
  const poolWorkers = [];
  for (let index = 0; index < process.env.CPU_THREADS; index++) {
    poolWorkers.push({ worker: new Worker('./lib/GarGetRegionItem.js') });
  }

  // while (currentRegion <= maxRegionNumber) {
  //   // eslint-disable-next-line no-await-in-loop
  //   currentRegion = await addWork(poolWorkers, currentRegion);
  //   console.log('currentRegion', currentRegion);
  // }
  for (;currentRegion < maxRegionNumber;) {
    currentRegion = await addWork(poolWorkers, currentRegion);
    console.log('currentRegion', currentRegion);
  }
  // const worker = new Worker('./lib/GarGetRegionItem.js');
};

export default parseGarBaseController;
