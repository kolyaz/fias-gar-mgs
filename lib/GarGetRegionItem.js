/* eslint-disable no-await-in-loop */
import { parentPort } from 'worker_threads';
import GarXmlZip from './GarXmlZip.js';

const itemTableRegion = {
  ADDR_OBJ: 'ADDR_OBJ',
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

const garGetRegionItem = async (name, region, pathFile) => {
  const garXmlZip = new GarXmlZip(pathFile);
  const thing = await garXmlZip.createReadStream({
    name,
    region,
    // filter: (r) => r.get('ISACTUAL') === '1',
    // map: (r) => { r.set('ADDRESS'); return r; },
    // join: ['ADDRESS'],
    progress: [
      (p) => console.log(`Region: ${region} Name: ${name} pcnt:${p.percentage}%`),
      { time: 10000 },
    ],
  });

  //   houses.pipe(createWriteStream('h.txt'));
  if (thing) {
    for await (const item of thing) {
      // eslint-disable-next-line no-unused-vars
      const newHouse = Object.fromEntries(item.entries());
      console.log(newHouse);
    }
  }
  return true;
};
const garGetAllRegion = (name, pathFile, valRegion) => {
  for (let index = 1; index < valRegion; index++) {
    garGetRegionItem(name, +index, pathFile);
  }
};

parentPort.on('message', async (msg) => {
  const { region, pathFile } = msg;
  for (const item in itemTableRegion) {
    await garGetRegionItem(itemTableRegion[item], region, pathFile);
  }
  console.log('done');
  parentPort.postMessage('true');
});

export {
  garGetRegionItem,
  itemTableRegion,
  garGetAllRegion,
};
