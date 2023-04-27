export default (sequelize, Sequelize) => {
  const ADDHOUSE_TYPES = sequelize.define(
    'ADDHOUSE_TYPES',
    {
      GARID: {
        type: Sequelize.STRING,
        // primaryKey: true,
      },
      NAME: {
        type: Sequelize.STRING,
      },
      SHORTNAME: {
        type: Sequelize.STRING,
      },
      DESC: {
        type: Sequelize.STRING,
      },
      ISACTIVE: {
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
      tableName: 'ADDHOUSE_TYPES',
    },
  );

  return ADDHOUSE_TYPES;
};
