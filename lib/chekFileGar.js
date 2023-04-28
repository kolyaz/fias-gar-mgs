import fs from 'fs/promises';

const chekFileGar = async (f, garVerDate) => {
  if (garVerDate) {
    try {
      await fs.unlink(f);
      console.log('successfully deleted gar file');
      return true;
    } catch (error) {
      console.error('there was an error:', error.message);
    }
  }
  return true;
};

export default chekFileGar;
