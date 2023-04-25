import { db } from '../model/index.js';

const getSyncBDcontroller = () => {
  // for (const item in allGar) {
  //   allGar[item].sync({ alter: true });
  // }
  db.sequelize.sync({ alter: true })
    .then(() => {
      console.log('Synced db.');
    })
    .catch((err) => {
      console.log(`Failed to sync db: ${err.message}`);
    });
};
export default getSyncBDcontroller;
