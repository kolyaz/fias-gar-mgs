import fs from 'fs/promises';
import { reverseDate } from './getDate.js';

async function readVersion(f) {
  try {
    const data = reverseDate(await fs.readFile(f, 'utf8'));
    return data;
  } catch (err) {
    console.error(err);
    return '';
  }
}
export default readVersion;
