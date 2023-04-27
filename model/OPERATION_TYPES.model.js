export default (sequelize, Sequelize) => {
  const OPERATION_TYPES = sequelize.define(
    'OPERATION_TYPES',
    {
      GARID: {
        type: Sequelize.STRING,
        // primaryKey: true,
      },
      NAME: {
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
      tableName: 'OPERATION_TYPES',
    },
  );

  return OPERATION_TYPES;
};
