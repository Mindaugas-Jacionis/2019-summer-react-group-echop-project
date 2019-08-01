import { combineReducers } from 'redux';

import shop from '../../shop';

export default combineReducers({
  [shop.constants.MODULE_NAME]: shop.reducer,
});
