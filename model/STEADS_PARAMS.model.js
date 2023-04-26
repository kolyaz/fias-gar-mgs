export default (sequelize, Sequelize) => {
  const STEADS_PARAMS = sequelize.define(
    'STEADS_PARAMS',
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
      tableName: 'STEADS_PARAMS',
    },
  );

  return STEADS_PARAMS;
};
