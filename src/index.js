// console.clear();
import { createStore, combineReducers } from 'redux';

// Customer dropping off a form (Action Creator)
const createPolicy = (name, amount) => {
  return {
    // Action
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amountToCollect
    }
  };
};

// Reducers (Departments)
const claimsHistory = (claims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...claims, action.payload];
  }

  return claims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};

const policies = (existingPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...existingPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return existingPolicies.filter((policy) => {
      return policy !== action.payload.name;
    });
  }

  return existingPolicies;
};

const departments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(departments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

console.log(store.getState());
