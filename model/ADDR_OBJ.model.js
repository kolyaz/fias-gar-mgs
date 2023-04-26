export default (sequelize, Sequelize) => {
  const ADDR_OBJ = sequelize.define(
    'ADDR_OBJ',
    {
      GARID: {
        type: Sequelize.STRING,
        // primaryKey: true,
      },
      OBJECTID: {
        type: Sequelize.STRING,
      },
      OBJECTGUID: {
        type: Sequelize.STRING,
      },
      CHANGEID: {
        type: Sequelize.STRING,
      },
      NAME: {
        type: Sequelize.STRING,
      },
      TYPENAME: {
        type: Sequelize.STRING,
      },
      LEVEL: {
        type: Sequelize.STRING,
      },
      OPERTYPEID: {
        type: Sequelize.STRING,
      },
      PREVID: {
        type: Sequelize.STRING,
      },
      NEXTID: {
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
      ISACTUAL: {
        type: Sequelize.STRING,
      },
      ISACTIVE: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'ADDR_OBJ',
    },
  );

  return ADDR_OBJ;
};
