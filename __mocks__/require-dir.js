'use strict';

export default (dir) => {
  const fakeMongo = {
    find: () => Promise.resolve([]),
    findOne: () => Promise.resolve({}),
    save: data => Promise.resolve(data),
    findOneAndDeleteOne: () => Promise.resolve({}),
  };

  if (typeof dir !== 'string') {return {}; }
  return {
    'books': { default: fakeMongo},
  };
};