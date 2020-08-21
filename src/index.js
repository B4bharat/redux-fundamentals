console.clear();

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
// const claimsHistory = (claims, action) => {
//   if (action.type === 'CREATE_CLAIM') {
//     return [...claims, action.payload];
//   }
// };
