import * as dotenv from 'dotenv';
import Downloader from 'nodejs-file-downloader';
import fs from 'fs-extra';
import fsp from 'fs';
import http from 'http';

// const request = require('request');

async function readVersion(f) {
  try {
    const data = await fs.readFile(f, 'utf8');
    console.log('version', data);
  } catch (err) {
    console.error(err);
  }
}

const getVerDateController = async () => {
  dotenv.config();
  const req = http.get(process.env.GAR_LAST_DATE_BASE_LINK, (res) => {
    console.log('done');
    const stream = res.pipe(fsp.createWriteStream('VerDate.txt', 'utf8'));
    stream.on('data', (chunk) => {
      console.log('chunk', chunk.toString());
    });
    stream.on('finish', (resp) => {
      console.log('finish', resp);
    });
    // console.log('start', some);
    // const data = [];
    // res.on('data', (chunk) => {
    //   data.push(chunk);
    // });

    // res.on('end', () => {
    // //   fs.writeFile(fileName, Buffer.concat(data), () => {
    // //     console.log('write end');
    // //   });
    // //   Buffer.concat(data);
    //   console.log('data', data);
    // });
  });
//   console.log('req', req);
// const file = response.pipe(fs.createWriteStream('VerDate.txt'));
//   const file = fsp.createWriteStream('VerDate.txt');
//  const req = http.get(process.env.GAR_LAST_DATE_BASE_LINK, (response) => {
//     const stream = response.pipe(file);
//     stream.on('finish', (responses) => {
//       console.log('done', responses);
//     });
//   });
//   console.log('req', req);
//   request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'));
//   const downloader = new Downloader({
//     url: process.env.GAR_LAST_DATE_BASE_LINK,
//     directory: process.env.PATH_MAIN_FOLDER, // This folder will be created, if it doesn't exist.
//     // eslint-disable-next-line no-unused-vars
//     onProgress(percentage, chunk, remainingSize) {
//       // Gets called with each chunk.
//       console.log('% ', percentage);
//       //   console.log('Current chunk of data: ', chunk);
//       //   console.log('Remaining bytes: ', remainingSize);
//     },
//   });
//   try {
//     const { filePath, downloadStatus } = await downloader.download(); // Downloader.download() resolves with some useful properties.
//     console.log(`File version status: ${downloadStatus} witn path ${filePath}`);
//     await fs.remove(filePath);
//     readVersion(filePath);
//     console.log('All done');
//   } catch (error) {
//     // IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
//     // Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
//     console.log('Download failed', error);
//   }
};
export default getVerDateController;
