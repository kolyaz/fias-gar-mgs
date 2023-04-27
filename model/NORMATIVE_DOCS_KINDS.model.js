export default (sequelize, Sequelize) => {
  const NORMATIVE_DOCS_KINDS = sequelize.define(
    'NORMATIVE_DOCS_KINDS',
    {
      GARID: {
        type: Sequelize.STRING,
        // primaryKey: true,
      },
      NAME: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'NORMATIVE_DOCS_KINDS',
    },
  );

  return NORMATIVE_DOCS_KINDS;
};
