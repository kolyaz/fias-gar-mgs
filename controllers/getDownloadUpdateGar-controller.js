import fs from 'fs';
import * as dotenv from 'dotenv';

import request from 'request';
import progress from 'request-progress';
import getGarVerDate from '../lib/GetGarVerDate.js';
import getDateGar from '../lib/GetDateGar.js';
import chekFileGar from '../lib/chekFileGar.js';

const getDownloadUpdateGarController = async () => {
  dotenv.config();
  const lastVerDate = await getGarVerDate(process.env.GAR_VERSION_FILE, process.env.PATH_MAIN_FOLDER, process.env.GAR_LAST_DATE_BASE_LINK);
  const garVerDate = await getDateGar(process.env.PATH_FULL_GAR); /// ????
  console.log('lastVerDate', lastVerDate);
  console.log('garVerDate', garVerDate);
  if (lastVerDate === garVerDate) {
    return;
  }
  await chekFileGar(process.env.PATH_UPDATE_GAR, garVerDate);
  const url = process.env.GAR_FULL_BASE_LINK + lastVerDate + process.env.GAR_UPDATE_BASE_FILENAME;
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
      .pipe(fs.createWriteStream(process.env.PATH_UPDATE_GAR));
  }
};
export default getDownloadUpdateGarController;
