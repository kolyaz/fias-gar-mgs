export default (sequelize, Sequelize) => {
  const PARAM_TYPES = sequelize.define(
    'PARAM_TYPES',
    {
      GARID: {
        type: Sequelize.STRING,
        // primaryKey: true,
      },
      NAME: {
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
      tableName: 'PARAM_TYPES',
    },
  );

  return PARAM_TYPES;
};
