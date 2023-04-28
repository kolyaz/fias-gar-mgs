import GarXmlZip from './GarXmlZip.js';
import { configDate } from './GetDate.js';

async function getDateGar(path) {
  // Выяснение даты архива
  // 'YYYY.MM.DD'
  try {
    const garXmlZip = new GarXmlZip(path);
    const date = configDate(await garXmlZip.getDate());
    return date;
  } catch (error) {
    return '';
  }
}
export default getDateGar;
