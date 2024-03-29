import assert from 'assert';
import { Transform } from 'stream';

const GarXmlTabTextTransformer = class extends Transform {
  constructor(options = {}) {
    const { join } = options;

    assert(join != null, '`join` must be defined');
    assert(Array.isArray(join), '`join` must be an Array');
    assert(join.length > 0, '`join` must be not empty');

    delete options.join;

    options.writableObjectMode = true;

    super(options);

    this.join = join;
  }

  _transform(chunk, encoding, callback) {
    const { join } = this; const
      last = join.length - 1;

    let i = 0; let
      s = ''; while (true) {
      const v = chunk.get(join[i]);

      if (v != null) s += v;

      if (i === last) {
        s += '\n';
        break;
      } else {
        s += '\t';
      }

      i++;
    }

    this.push(s);

    callback();
  }
};

export default GarXmlTabTextTransformer;
