export default (sequelize, Sequelize) => {
  const OBJECT_LEVELS = sequelize.define(
    'OBJECT_LEVELS',
    {
      LEVEL: {
        type: Sequelize.STRING,
      },
      NAME: {
        type: Sequelize.STRING,
      },
      STARTDATE: {
        type: Sequelize.STRING,
      },
      ENDDATE: {
        type: Sequelize.STRING,
      },
      UPDATEDATE: {
        type: Sequelize.STRING,
      },
      ISACTIVE: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'OBJECT_LEVELS',
    },
  );

  return OBJECT_LEVELS;
};
