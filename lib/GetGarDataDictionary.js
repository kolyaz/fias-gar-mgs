import GarXmlZip from './GarXmlZip.js';
import { db } from '../model/index.js';

const itemDictionary = {
  ADDHOUSE_TYPES: 'ADDHOUSE_TYPES',
  ADDR_OBJ_TYPES: 'ADDR_OBJ_TYPES',
  APARTMENT_TYPES: 'APARTMENT_TYPES',
  HOUSE_TYPES: 'HOUSE_TYPES',
  NORMATIVE_DOCS_KINDS: 'NORMATIVE_DOCS_KINDS',
  NORMATIVE_DOCS_TYPES: 'NORMATIVE_DOCS_TYPES',
  OBJECT_LEVELS: 'OBJECT_LEVELS',
  OPERATION_TYPES: 'OPERATION_TYPES',
  PARAM_TYPES: 'PARAM_TYPES',
  ROOM_TYPES: 'ROOM_TYPES',
};

const getGarDataDictionary = async (path, name) => {
  const garXmlZip = new GarXmlZip(path);
  const thing = await garXmlZip.getDataDictionary({
    name,
    //   filter: r => r.get ('ISACTIVE') === 'true',
    //      map: r => r.get ('SHORTNAME'),
  });
  if (thing) {
    for await (const item of thing) {
      const itemGar = Object.fromEntries(item[1].entries());
      try {
        if (itemGar) {
          delete Object.assign(itemGar, { GARID: itemGar.ID }).ID;
          await db[name].create(itemGar);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return true;
};
export {
  getGarDataDictionary,
  itemDictionary,
};
