export default (sequelize, Sequelize) => {
  const NORMATIVE_DOCS = sequelize.define(
    'NORMATIVE_DOCS',
    {
      ID: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      NAME: {
        type: Sequelize.STRING,
      },
      DATE: {
        type: Sequelize.STRING,
      },
      NUMBER: {
        type: Sequelize.STRING,
      },
      TYPE: {
        type: Sequelize.STRING,
      },
      KIND: {
        type: Sequelize.STRING,
      },
      UPDATEDATE: {
        type: Sequelize.STRING,
      },
      ORGNAME: {
        type: Sequelize.STRING,
      },
      ACCDATE: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'NORMATIVE_DOCS',
    },
  );

  return NORMATIVE_DOCS;
};
