import * as dotenv from 'dotenv';
import express, { json } from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import routerGar from './routes/fias-gar-route.js';
import routerBD from './routes/bd-route.js';
import sequelize from './service/database.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT_EXPRESS || 3081;
const app = express();
app.use(json());
app.use(cors());

app.use(express.static(path.join(__dirname, './')));// For dev only!
app.use(routerGar);
app.use(routerBD);

// ---------GAR Script
async function start() {
  try {
    app.listen(PORT, () => console.log(`App started on port:${PORT}`));
    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    }).catch((error) => {
      console.error('Unable to connect to the database: ', error);
    });
  } catch (error) {
    console.log('Server error', error.message);
    process.exit(1);
  }
}
start();
