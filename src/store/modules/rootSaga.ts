import { all } from 'redux-saga/effects';

import cart from './Cart/sagas';

export default function* rootSaga(): Generator {
  return yield all([cart]);
}
