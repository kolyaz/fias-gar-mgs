export default (sequelize, Sequelize) => {
  const HOUSES_PARAMS = sequelize.define(
    'HOUSES_PARAMS',
    {
      ID: {
        type: Sequelize.STRING,
        primaryKey: true,
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
        type: Sequelize.STRING,
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
      tableName: 'HOUSES_PARAMS',
    },
  );

  return HOUSES_PARAMS;
};
