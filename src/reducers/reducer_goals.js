import {
  SET_GOALS
} from '../constants';

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
  switch (action.type) {
    case SET_GOALS:
      goals = [...state, goal(action)];
      console.log(goals,"goals")
      return goals;
    default:
      return state;
  }
}