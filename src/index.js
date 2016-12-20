import { v4 as uuid } from 'uuid';
import { every } from 'lodash';
import hideOverflow from './hide';
import restoreOverflow from './restore';

const hideMap = {};

const updateOverflow = () => {
  // Should restore overflow if every hide variable is set to false.
  const shouldRestore = every(hideMap, hide => hide === false);
  if (shouldRestore) {
    restoreOverflow();
  } else {
    hideOverflow();
  }
};

export const generate = () => {
  const id = uuid();
  return (hide) => {
    hideMap[id] = hide;

    updateOverflow();
  };
};

export default generate();
