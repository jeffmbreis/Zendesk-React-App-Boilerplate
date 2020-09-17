import { combineReducers } from 'redux';
import ticketRequester from './ticketRequesterReducer';

const rootReducer = combineReducers({
  ticketRequester,
});

export default rootReducer;
