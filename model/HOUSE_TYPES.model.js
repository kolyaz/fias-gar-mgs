export default (sequelize, Sequelize) => {
  const HOUSE_TYPES = sequelize.define(
    'HOUSE_TYPES',
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
      tableName: 'HOUSE_TYPES',
    },
  );

  return HOUSE_TYPES;
};
