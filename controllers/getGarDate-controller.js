import * as dotenv from 'dotenv';
import GarXmlZip from '../lib/GarXmlZip.js';
import { configDate } from '../lib/GetDate.js';

dotenv.config();

async function getDateGar() {
  // Выяснение даты архива
  // 'YYYY.MM.DD'
  try {
    const garXmlZip = new GarXmlZip(process.env.PATH_FULL_GAR);
    const date = configDate(await garXmlZip.getDate());
    return date;
  } catch (error) {
    return '';
  }
}
const getDateGarController = async () => {
  const date = await getDateGar();
  console.log(date);
  return date;
};
export default getDateGarController;
