export default (sequelize, Sequelize) => {
  const APARTMENT_TYPES = sequelize.define(
    'APARTMENT_TYPES',
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
      tableName: 'APARTMENT_TYPES',
    },
  );

  return APARTMENT_TYPES;
};
