export default (sequelize, Sequelize) => {
  const NORMATIVE_DOCS_TYPES = sequelize.define(
    'NORMATIVE_DOCS_TYPES',
    {
      GARID: {
        type: Sequelize.STRING,
        // primaryKey: true,
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
    },
    {
      tableName: 'NORMATIVE_DOCS_TYPES',
    },
  );

  return NORMATIVE_DOCS_TYPES;
};
