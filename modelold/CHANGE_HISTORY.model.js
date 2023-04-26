export default (sequelize, Sequelize) => {
  const CHANGE_HISTORY = sequelize.define(
    'CHANGE_HISTORY',
    {
      CHANGEID: {
        type: Sequelize.STRING,
      },
      OBJECTID: {
        type: Sequelize.STRING,
      },
      ADROBJECTID: {
        type: Sequelize.STRING,
      },
      OPERTYPEID: {
        type: Sequelize.STRING,
      },
      NDOCID: {
        type: Sequelize.STRING,
      },
      CHANGEDATE: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'CHANGE_HISTORY',
    },
  );

  return CHANGE_HISTORY;
};
