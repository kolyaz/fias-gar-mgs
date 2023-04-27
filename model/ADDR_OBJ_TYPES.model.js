export default (sequelize, Sequelize) => {
  const ADDR_OBJ_TYPES = sequelize.define(
    'ADDR_OBJ_TYPES',
    {
      GARID: {
        type: Sequelize.STRING,
        // primaryKey: true,
      },
      LEVEL: {
        type: Sequelize.STRING,
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
    },
    {
      tableName: 'ADDR_OBJ_TYPES',
    },
  );

  return ADDR_OBJ_TYPES;
};
