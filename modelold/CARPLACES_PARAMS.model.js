export default (sequelize, Sequelize) => {
  const CARPLACES_PARAMS = sequelize.define(
    'CARPLACES_PARAMS',
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
      tableName: 'CARPLACES_PARAMS',
    },
  );

  return CARPLACES_PARAMS;
};
