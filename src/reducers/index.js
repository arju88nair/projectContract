import {ADD_CONTRACT} from '../constants'

const contract = (action) => {
    let { text } = action;
    return {
      id: Math.random(),
      text,
    }
  }

  const contracts = (state = [], action) => {
    let reminders = null;
    switch(action.type) {
      case ADD_CONTRACT:
        reminders = [...state, contract(action)];
        return reminders;
        default:
        return state;

    }
}

export default contracts;