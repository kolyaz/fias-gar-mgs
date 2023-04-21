import * as dotenv from 'dotenv';
import express, { json } from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import { createWriteStream, existsSync } from 'fs';
import assert, { strictEqual } from 'assert';
import GarXmlZip from './lib/GarXmlZip.js';

import routerGar from './routes/fias-gar-route.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT_EXPRESS || 3081;
const app = express();
app.use(json());
app.use(cors());

app.use(express.static(path.join(__dirname, './')));// For dev only!
app.use(routerGar);
// app.post('/get-date-gar', (req, res) => {
//   console.log('receiving data ...');
//   console.log('body is ', req.body);
//   res.send(req.body);
// });

// ---------GAR Script

const pathGar = process.env.PATH_FULL_GAR;
async function test_001_date() {
  // Выяснение даты архива
  // 'YYYY-MM-DD'
  const garXmlZip = new GarXmlZip(pathGar);
  const date = await garXmlZip.getDate();
  return date;
//   strictEqual(date, '2021-08-30');
}

async function test_002_dic() {
  const garXmlZip = new GarXmlZip(pathGar);
  const d = await garXmlZip.getDataDictionary({
    name: 'HOUSE_TYPES',
    filter: (r) => r.get('ISACTIVE') === 'true',
    map: (r) => r.get('SHORTNAME'),
  });

  assert(!d.has('1'));
  strictEqual(d.get('2'), 'д.');
}

async function test_003_str() {
  const garXmlZip = new GarXmlZip(pathGar);

  let cnt = 0;

  const houses = await garXmlZip.createReadStream({
    name: 'HOUSES',
	  region: 78,
    	 filter: (r) => r.get('HOUSENUM') === '1',
		 map: (r) => { r.set('foo', ++cnt); return r; },
    join: ['foo', 'OBJECTGUID', 'HOUSENUM'],
    progress: [
      (p) => console.log(`${p.percentage}%`),
      { time: 2000 },
    ],
  });

  houses.pipe(createWriteStream('h.txt'));

//   for await (const house of houses) {
//     console.log({ house });
//     // return;
//   }
}

async function main() {
  if (!existsSync(pathGar)) return console.log('No file, no problem');
  console.log('Дата архива', await test_001_date());
  await test_002_dic();
  await test_003_str();
  return true;
}

//main();
// END GAR Script
async function start() {
  try {
    app.listen(PORT, () => console.log(`App started on port:${PORT}`));
  } catch (error) {
    console.log('Server error', error.message);
    process.exit(1);
  }
}
start();
