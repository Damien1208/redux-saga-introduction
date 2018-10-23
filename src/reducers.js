// ⚠️ You should store the action type in constants
// Just Keeping it Simple™️ for demo purposes 🐥
function planetReducer(state = [], action) {
  if (action.type === 'FETCH_PLANETS_SUCCESS') {
    return [...state, ...action.payload];
  }
  return state;
}

export default planetReducer;
