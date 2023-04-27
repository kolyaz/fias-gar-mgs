import * as dotenv from 'dotenv';
import Downloader from 'nodejs-file-downloader';
import fs from 'fs/promises';
import { reverseDate } from '../lib/GetDate.js';

async function readVersion(f) {
  try {
    const data = reverseDate(await fs.readFile(f, 'utf8'));
    console.log('version', data);
    return data;
  } catch (err) {
    console.error(err);
    return '';
  }
}

const chekFileVerDate = async (f) => {
  if (readVersion(f)) {
    try {
      await fs.unlink(f);
      return true;
    } catch (error) {
      console.error('there was an error:', error.message);
    }
  }
  return true;
};

const getVerDateController = async () => {
  dotenv.config();
  await chekFileVerDate(process.env.GAR_VERSION_FILE);
  const downloader = new Downloader({
    directory: process.env.PATH_MAIN_FOLDER,
    url: process.env.GAR_LAST_DATE_BASE_LINK,
    onProgress(percentage) {
      console.log('% ', percentage);
    },
  });
  try {
    // eslint-disable-next-line no-unused-vars
    const { filePath, downloadStatus } = await downloader.download(); // Downloader.download() resolves with some useful properties.
    console.log('All done');
    return readVersion(process.env.GAR_VERSION_FILE);
  } catch (error) {
    console.log('Download failed', error);
    return '';
  }
};
export {
  getVerDateController,
  readVersion,
  chekFileVerDate,
};
