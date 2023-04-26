export default (sequelize, Sequelize) => {
  const ROOMS_PARAMS = sequelize.define(
    'ROOMS_PARAMS',
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
      tableName: 'ROOMS_PARAMS',
    },
  );

  return ROOMS_PARAMS;
};
