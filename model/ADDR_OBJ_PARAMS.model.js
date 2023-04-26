export default (sequelize, Sequelize) => {
  const ADDR_OBJ_PARAMS = sequelize.define(
    'ADDR_OBJ_PARAMS',
    {
      GARID: {
        type: Sequelize.STRING,
        // primaryKey: true,
      },
      OBJECTID: {
        type: Sequelize.STRING,
      },
      CHANGEID: {
        type: Sequelize.STRING,
      },
      CHANGEIDEND: {
        type: Sequelize.STRING,
      },
      TYPEID: {
        type: Sequelize.STRING,
      },
      VALUE: {
        type: Sequelize.STRING(512),
      },
      UPDATEDATE: {
        type: Sequelize.STRING,
      },
      STARTDATE: {
        type: Sequelize.STRING,
      },
      ENDDATE: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'ADDR_OBJ_PARAMS',
    },
  );

  return ADDR_OBJ_PARAMS;
};
