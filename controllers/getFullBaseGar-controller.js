import fs from 'fs';
// import Downloader from 'nodejs-file-downloader';
import fsp from 'fs/promises';
import request from 'request';
import progress from 'request-progress';
import { getVerDateController } from './getVerDate-controller.js';
import getDateGarController from './getGarDate-controller.js';

const chekFileGar = async (f, garVerDate) => {
  console.log(garVerDate);
  if (garVerDate) {
    try {
      await fsp.unlink(f);
      console.log('successfully deleted gar file');
      return true;
    } catch (error) {
      console.error('there was an error:', error.message);
    }
  }
  return true;
};

const getFullBaseGarController = async () => {
  const lastVerDate = await getVerDateController();
  const garVerDate = await getDateGarController();
  if (lastVerDate === garVerDate) {
    return;
  }
  await chekFileGar(process.env.PATH_FULL_GAR, garVerDate);
  const url = process.env.GAR_FULL_BASE_LINK + lastVerDate + process.env.GAR_FULL_BASE_FILENAME;
  if (lastVerDate) {
    progress(request(url), {
    })
      .on('progress', (state) => {
        console.log('progress', state);
      })
      .on('error', () => {
        // Do something with err
      })
      .on('end', () => {
        // Do something after request finishes
      })
      .pipe(fs.createWriteStream(process.env.PATH_FULL_GAR));
  }
};
export default getFullBaseGarController;
