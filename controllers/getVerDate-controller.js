import * as dotenv from 'dotenv';
import getGarVerDate from '../lib/GetGarVerDate.js';

const getVerDateController = async () => {
  dotenv.config();
  const version = await getGarVerDate(process.env.GAR_VERSION_FILE, process.env.PATH_MAIN_FOLDER, process.env.GAR_LAST_DATE_BASE_LINK);
  console.log('version full base from URL', version);
};
export {
  getVerDateController,
};
