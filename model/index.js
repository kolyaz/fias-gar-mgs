import { Sequelize } from 'sequelize';

import ADDR_OBJ_DIVISION from './ADDR_OBJ_DIVISION.model.js';
import ADDR_OBJ_PARAMS from './ADDR_OBJ_PARAMS.model.js';
import ADDR_OBJ from './ADDR_OBJ.model.js';
import ADM_HIERARCHY from './ADM_HIERARCHY.model.js';
import APARTMENTS_PARAMS from './APARTMENTS_PARAMS.model.js';
import APARTMENTS from './APARTMENTS.model.js';
import CARPLACES_PARAMS from './CARPLACES_PARAMS.model.js';
import CARPLACES from './CARPLACES.model.js';
import CHANGE_HISTORY from './CHANGE_HISTORY.model.js';
import HOUSES_PARAMS from './HOUSES_PARAMS.model.js';
import HOUSES from './HOUSES.model.js';
import MUN_HIERARCHY from './MUN_HIERARCHY.model.js';
import NORMATIVE_DOCS from './NORMATIVE_DOCS.model.js';
import REESTR_OBJECTS from './REESTR_OBJECTS.model.js';
import ROOMS_PARAMS from './ROOMS_PARAMS.model.js';
import ROOMS from './ROOMS.model.js';
import STEADS_PARAMS from './STEADS_PARAMS.model.js';
import STEADS from './STEADS.model.js';

import ADDHOUSE_TYPES from './ADDHOUSE_TYPES.model.js';
import ADDR_OBJ_TYPES from './ADDR_OBJ_TYPES.model.js';
import APARTMENT_TYPES from './APARTMENT_TYPES.model.js';
import HOUSE_TYPES from './HOUSE_TYPES.model.js';
import NORMATIVE_DOCS_KINDS from './NORMATIVE_DOCS_KINDS.model.js';
import NORMATIVE_DOCS_TYPES from './NORMATIVE_DOCS_TYPES.model.js';
import OBJECT_LEVELS from './OBJECT_LEVELS.model.js';
import OPERATION_TYPES from './OPERATION_TYPES.model.js';
import PARAM_TYPES from './PARAM_TYPES.model.js';
import ROOM_TYPES from './ROOM_TYPES.model.js';

import sequelize from '../service/database.js';

const db = {
  Sequelize,
  sequelize,
  ADDR_OBJ_DIVISION: ADDR_OBJ_DIVISION(sequelize, Sequelize),
  ADDR_OBJ_PARAMS: ADDR_OBJ_PARAMS(sequelize, Sequelize),
  ADDR_OBJ: ADDR_OBJ(sequelize, Sequelize),
  ADM_HIERARCHY: ADM_HIERARCHY(sequelize, Sequelize),
  APARTMENTS_PARAMS: APARTMENTS_PARAMS(sequelize, Sequelize),
  APARTMENTS: APARTMENTS(sequelize, Sequelize),
  CARPLACES_PARAMS: CARPLACES_PARAMS(sequelize, Sequelize),
  CARPLACES: CARPLACES(sequelize, Sequelize),
  CHANGE_HISTORY: CHANGE_HISTORY(sequelize, Sequelize),
  HOUSES_PARAMS: HOUSES_PARAMS(sequelize, Sequelize),
  HOUSES: HOUSES(sequelize, Sequelize),
  MUN_HIERARCHY: MUN_HIERARCHY(sequelize, Sequelize),
  NORMATIVE_DOCS: NORMATIVE_DOCS(sequelize, Sequelize),
  REESTR_OBJECTS: REESTR_OBJECTS(sequelize, Sequelize),
  ROOMS_PARAMS: ROOMS_PARAMS(sequelize, Sequelize),
  ROOMS: ROOMS(sequelize, Sequelize),
  STEADS_PARAMS: STEADS_PARAMS(sequelize, Sequelize),
  STEADS: STEADS(sequelize, Sequelize),
  ADDHOUSE_TYPES: ADDHOUSE_TYPES(sequelize, Sequelize),
  ADDR_OBJ_TYPES: ADDR_OBJ_TYPES(sequelize, Sequelize),
  APARTMENT_TYPES: APARTMENT_TYPES(sequelize, Sequelize),
  HOUSE_TYPES: HOUSE_TYPES(sequelize, Sequelize),
  NORMATIVE_DOCS_KINDS: NORMATIVE_DOCS_KINDS(sequelize, Sequelize),
  NORMATIVE_DOCS_TYPES: NORMATIVE_DOCS_TYPES(sequelize, Sequelize),
  OBJECT_LEVELS: OBJECT_LEVELS(sequelize, Sequelize),
  OPERATION_TYPES: OPERATION_TYPES(sequelize, Sequelize),
  PARAM_TYPES: PARAM_TYPES(sequelize, Sequelize),
  ROOM_TYPES: ROOM_TYPES(sequelize, Sequelize),
};

export {
  db,
};
