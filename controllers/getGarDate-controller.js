import * as dotenv from 'dotenv';
import getDateGar from '../lib/GetDateGar.js';

const getDateGarController = async () => {
  dotenv.config();
  const date = await getDateGar(process.env.PATH_FULL_GAR);
  console.log('Version file on resourse', date);
  return date;
};
export default getDateGarController;
