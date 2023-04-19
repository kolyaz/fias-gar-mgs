import { createWriteStream, existsSync } from 'fs';
import assert, { strictEqual } from 'assert';
import GarXmlZip from './lib/GarXmlZip.js';

// const path = './data/gar_xml.zip';
// async function test_001_date() {
//   // Выяснение даты архива
//   // 'YYYY-MM-DD'
//   const garXmlZip = new GarXmlZip(path);
//   const date = await garXmlZip.getDate();
//   return date;
// //   strictEqual(date, '2021-08-30');
// }

// async function test_002_dic() {
//   const garXmlZip = new GarXmlZip(path);
//   const d = await garXmlZip.getDataDictionary({
//     name: 'HOUSE_TYPES',
//     filter: (r) => r.get('ISACTIVE') === 'true',
//     map: (r) => r.get('SHORTNAME'),
//   });

//   assert(!d.has('1'));
//   strictEqual(d.get('2'), 'д.');
// }

// async function test_003_str() {
//   const garXmlZip = new GarXmlZip(path);

//   let cnt = 0;

//   const houses = await garXmlZip.createReadStream({
//     name: 'HOUSES',
// 	  region: 78,
//     	 filter: (r) => r.get('HOUSENUM') === '1',
// 		 map: (r) => { r.set('foo', ++cnt); return r; },
//     join: ['foo', 'OBJECTGUID', 'HOUSENUM'],
//     progress: [
//       (p) => console.log(`${p.percentage}%`),
//       { time: 2000 },
//     ],
//   });

//   houses.pipe(createWriteStream('h.txt'));

// //   for await (const house of houses) {
// //     console.log({ house });
// //     // return;
// //   }
// }

// async function main() {
//   console.log('Дата архива', date);
//   if (!existsSync(path)) return console.log('No file, no problem');

//   await test_001_date();
//   await test_002_dic();
//   await test_003_str();
//   return true;
// }

// main();
// Выяснение даты архива
const path = './data/gar_xml.zip';
const garXmlZip = new GarXmlZip(path);
const date = await garXmlZip.getDate(); // 'YYYY-MM-DD'
console.log(date);
// Извлечение общей таблицы-справочника
const houseTypes = await garXmlZip.getDataDictionary({
  name: 'HOUSE_TYPES',
  filter: (r) => r.get('ISACTIVE') === 'true',
  map: (r) => r.get('SHORTNAME'),
}); // Map {"2" => "д.", ...}

// Извлечение таблицы данных региона
const houses = await garXmlZip.createReadStream({
  name: 'HOUSES',
  region: 77,
  filter: (r) => r.get('ISACTUAL') === '1',
  map: (r) => { r.set('ADDRESS', ++cnt); return r; },
  join: ['OBJECTGUID', 'ADDRESS'],
  progress: [
    (p) => console.log(`${p.percentage}%`),
    { time: 2000 },
  ],
});

// ...и дальше

for await (const house of houses) {
  console.log(house);
}

// ...либо

// houses.pipe (new Transformer (...)).pipe (destination)
