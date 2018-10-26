import {  SET_GOALS, SET_COMPLETED } from '../constants';



export function setGoals(email,title) {
  const action = {
    type: SET_GOALS,
    email,
    title
  }
  console.log(action,"action")
  return action;
}

export function setCompleted(completeGoals) {
  const action = {
    type: SET_COMPLETED,
    completeGoals
  }
  return action;
}
