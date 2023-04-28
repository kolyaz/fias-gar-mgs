import Downloader from 'nodejs-file-downloader';

import readVersion from './ReadVersion.js';
import chekFileVerDate from './ChekFileVerDate.js';

const getGarVerDate = async (garVerFile, directory, url) => {
  await chekFileVerDate(garVerFile);
  const downloader = new Downloader({
    directory,
    url,
    onProgress(percentage) {
      console.log('% ', percentage);
    },
  });
  try {
    // eslint-disable-next-line no-unused-vars
    const { filePath, downloadStatus } = await downloader.download(); // Downloader.download() resolves with some useful properties.
    console.log('All done');
    return readVersion(garVerFile);
  } catch (error) {
    console.log('Download failed', error);
    return '';
  }
};
export default getGarVerDate;
