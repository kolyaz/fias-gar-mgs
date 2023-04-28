const configDate = (ruDate) => {
  // Input  'YYYY-MM-DD'
  // Output 'YYYY.MM.DD'
  const year = ruDate.split('-')[0];
  const month = ruDate.split('-')[1];
  const day = ruDate.split('-')[2];
  return `${year}.${month}.${day}`;
};

const reverseDate = (ruDate) => {
  // Input  'DD.MM.YYYY'
  // Output 'YYYY.MM.DD'
  const year = ruDate.split('.')[2];
  const month = ruDate.split('.')[1];
  const day = ruDate.split('.')[0];
  return `${year}.${month}.${day}`;
};

export {
  configDate,
  reverseDate,
};
