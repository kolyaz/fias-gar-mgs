export default (sequelize, Sequelize) => {
  const APARTMENTS = sequelize.define(
    'APARTMENTS',
    {
      GARID: {
        type: Sequelize.STRING,
        // primaryKey: true,
      },
      OBJECTID: {
        type: Sequelize.STRING,
      },
      OBJECTGUID: {
        type: Sequelize.STRING,
      },
      CHANGEID: {
        type: Sequelize.STRING,
      },
      NUMBER: {
        type: Sequelize.STRING,
      },
      APARTTYPE: {
        type: Sequelize.STRING,
      },
      OPERTYPEID: {
        type: Sequelize.STRING,
      },
      PREVID: {
        type: Sequelize.STRING,
      },
      NEXTID: {
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
      ISACTUAL: {
        type: Sequelize.STRING,
      },
      ISACTIVE: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'APARTMENTS',
    },
  );

  return APARTMENTS;
};
