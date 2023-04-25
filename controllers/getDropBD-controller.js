import { db } from '../model/index.js';

const getDropBDcontroller = async () => {
  // for (const item in allGar) {
  //   allGar[item].sync({ alter: true });
  // }
  await db.sequelize.drop();
  console.log('All tables dropped!');
};
export default getDropBDcontroller;
