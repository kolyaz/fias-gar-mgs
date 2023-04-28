import fs from 'fs/promises';
import readVersion from './readVersion.js';

const chekFileVerDate = async (f) => {
  if (readVersion(f)) {
    try {
      await fs.unlink(f);
      return true;
    } catch (error) {
      console.error('there was an error:', error.message);
    }
  }
  return true;
};

export default chekFileVerDate;
