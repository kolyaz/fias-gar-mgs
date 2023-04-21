import * as dotenv from 'dotenv';
import GarXmlZip from '../lib/GarXmlZip.js';

dotenv.config();
async function getDateGar() {
  // Выяснение даты архива
  // 'YYYY-MM-DD'
  const garXmlZip = new GarXmlZip(process.env.PATH_FULL_GAR);
  const date = await garXmlZip.getDate();
  return date;
//   strictEqual(date, '2021-08-30');
}
const getDateGarController = async () => {
  const date = await getDateGar();
  console.log(date);
};
export default getDateGarController;
