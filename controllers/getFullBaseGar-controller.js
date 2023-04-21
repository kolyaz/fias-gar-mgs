// import fs from 'fs-extra';
import Downloader from 'nodejs-file-downloader';

const getFullBaseGarController = async () => {
//   await fs.copy('https://fias-file.nalog.ru/downloads/2023.04.18/gar_xml.zip', './test');
  const downloader = new Downloader({
    url: 'https://fias-file.nalog.ru/downloads/2023.04.18/gar_xml.zip', // If the file name already exists, a new file with the name 200MB1.zip is created.
    directory: './downloads', // This folder will be created, if it doesn't exist.
    // eslint-disable-next-line no-unused-vars
    onProgress(percentage, chunk, remainingSize) {
      // Gets called with each chunk.
      console.log('% ', percentage);
    //   console.log('Current chunk of data: ', chunk);
    //   console.log('Remaining bytes: ', remainingSize);
    },
  });
  try {
    // eslint-disable-next-line no-unused-vars
    const { filePath, downloadStatus } = await downloader.download(); // Downloader.download() resolves with some useful properties.

    console.log('All done');
  } catch (error) {
    // IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
    // Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
    console.log('Download failed', error);
  }
};
export default getFullBaseGarController;
