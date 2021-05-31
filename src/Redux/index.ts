import { createStore } from 'redux';
import { combineReducers } from 'redux';

import InfoPropertyReducer from './InfoPropertyReducer';

const rootReducer = combineReducers({
  InfoPropertyReducer: InfoPropertyReducer,
});

export const store = createStore(rootReducer);