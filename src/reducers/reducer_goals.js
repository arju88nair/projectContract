import {
  SET_GOALS
} from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const goal = (action) => {
  let {
    title,
    email
  } = action;
  return {
    id: Math.random(),
    title,
    email
  }
}

export default (state = [], action) => {  
  let goals = null;
  state = read_cookie('goals');
  switch (action.type) {
    case SET_GOALS:
      goals = [...state, goal(action)];
      bake_cookie('goals', goals);
      console.log(goals,"goals")
      return goals;
    default:
      return state;
  }
}