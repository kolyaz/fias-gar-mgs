export default (sequelize, Sequelize) => {
  const ADDR_OBJ_DIVISION = sequelize.define(
    'ADDR_OBJ_DIVISION',
    {
      ID: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      PARENTID: {
        type: Sequelize.STRING,
      },
      CHILDID: {
        type: Sequelize.STRING,
      },
      CHANGEID: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'ADDR_OBJ_DIVISION',
    },
  );

  return ADDR_OBJ_DIVISION;
};
