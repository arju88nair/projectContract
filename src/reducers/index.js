import { combineReducers } from 'redux';
import goals from './reducer_goals';
import completeGoals from './reducer_completed_goals';

export default combineReducers({
  goals,
  completeGoals
})
