export default (sequelize, Sequelize) => {
  const ADM_HIERARCHY = sequelize.define(
    'ADM_HIERARCHY',
    {
      ID: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      OBJECTID: {
        type: Sequelize.STRING,
      },
      PARENTOBJID: {
        type: Sequelize.STRING,
      },
      CHANGEID: {
        type: Sequelize.STRING,
      },
      REGIONCODE: {
        type: Sequelize.STRING,
      },
      AREACODE: {
        type: Sequelize.STRING,
      },
      CITYCODE: {
        type: Sequelize.STRING,
      },
      PLACECODE: {
        type: Sequelize.STRING,
      },
      PLANCODE: {
        type: Sequelize.STRING,
      },
      STREETCODE: {
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
      ISACTIVE: {
        type: Sequelize.STRING,
      },
      PATH: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'ADM_HIERARCHY',
    },
  );

  return ADM_HIERARCHY;
};
