import { strictEqual } from 'assert';
import xmlToolkit from 'xml-toolkit';
import { Transform } from 'stream';

const { SAXEvent } = xmlToolkit;
const GarXmlObjectTransformer = class extends Transform {
  constructor(options = {}) {
    const { filter, map } = options;

    if (filter) strictEqual(typeof filter, 'function', '`filter` must be defined as function');
    if (map) strictEqual(typeof map, 'function', '`map` must be defined as function');

    delete options.filter;
    delete options.map;

    options.objectMode = true;

    super(options);

    this.filter = filter || null;
    this.map = map || null;
  }

  publish(e) {
    if (!e.isSelfEnclosed) return;

    const { filter, map } = this; const
      m = e.attributes;

    if (filter !== null && !filter(m)) return;

    if (map === null) {
      this.push(m);
    } else {
      this.push(map(m));
    }
  }

  _transform(chunk, encoding, callback) {
    this.publish(new SAXEvent(chunk));

    callback();
  }
};

export default GarXmlObjectTransformer;
