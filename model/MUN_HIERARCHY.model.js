export default (sequelize, Sequelize) => {
  const MUN_HIERARCHY = sequelize.define(
    'MUN_HIERARCHY',
    {
      GARID: {
        type: Sequelize.STRING,
        // primaryKey: true,
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
      OKTMO: {
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
      tableName: 'MUN_HIERARCHY',
    },
  );

  return MUN_HIERARCHY;
};
