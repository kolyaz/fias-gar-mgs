export default (sequelize, Sequelize) => {
  const REESTR_OBJECTS = sequelize.define(
    'REESTR_OBJECTS',
    {
      OBJECTID: {
        type: Sequelize.STRING,
      },
      OBJECTGUID: {
        type: Sequelize.STRING,
      },
      CHANGEID: {
        type: Sequelize.STRING,
      },
      ISACTIVE: {
        type: Sequelize.STRING,
      },
      LEVELID: {
        type: Sequelize.STRING,
      },
      CREATEDATE: {
        type: Sequelize.STRING,
      },
      UPDATEDATE: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'REESTR_OBJECTS',
    },
  );

  return REESTR_OBJECTS;
};
