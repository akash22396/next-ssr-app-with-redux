import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
// import { postsReducer } from "./reducer/postsReducer";
// import { usersReducer } from "./reducer/usersReducers";

// import { countReducer } from "./reducer/countsReducer";
const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
const middleware = [thunk];

const allReducer = combineReducers({
  countReducer: countReducer,
  //   postsReducer: postsReducer,
  //   usersReducer: usersReducer,
});

const store = createStore(
  allReducer,
  applyMiddleware(...middleware)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
