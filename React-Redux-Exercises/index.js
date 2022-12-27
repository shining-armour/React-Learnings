// all event names for todos reducer
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
// all event names for goals reducer
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

// Reducer functions
// Initially, the state will be empty hence, provide an empty array as default value
// Based on specific action that occured,
// this function needs to return us a new copy of the state using concat function on state array
// because, in pure functions, we should not update the input values (here, state) directly.
// This newly returned state copy will be used to modify the original state inside the store using dispatch.
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
}

/** helper function for generating id **/
function generateId() {
  return (
    Math.random().toString(36).substring(2) + new Date().getTime().toString(36)
  );
}

/** Middleware */

function containsNumbers(str) {
  return /[0-9]/.test(str);
}

// first Middleware
const emptyInputCheckerMiddleware = (store) => (next) => (action) => {
  if (action.type === ADD_TODO && action.todo.name.trim() === "") {
    return alert("Empty todo not allowed!");
  }
  if (action.type === ADD_GOAL && action.goal.name.trim() === "") {
    return alert("Empty goal not allowed!");
  }
  next(action);
};

// next represents the next middleware in line to be run OR if not exist, store.dispatch() will be treated as next.
// next for numberCheckerMiddleware is validActionsMiddleware
// second Middleware
const numberCheckerMiddleware = (store) => (next) => (action) => {
  if (action.type === ADD_TODO && containsNumbers(action.todo.name)) {
    return alert("Numbers not allowed!");
  }
  if (action.type === ADD_GOAL && containsNumbers(action.goal.name)) {
    return alert("Numbers not allowed!");
  }
  return next(action);
};

// next for validActionsMiddleware is loggerMiddleware
// third middleware
const validActionsMiddleware = (store) => (next) => (action) => {
  if (action.type === ADD_TODO) {
    alert("Don't forget to " + action.todo.name.toString());
  }
  if (action.type === ADD_GOAL) {
    alert("That's a great goal!");
  }
  return next(action);
};

// next for loggerMiddleware is store.dispatch()
// fourth Middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Action - ", action);
  next(action);
  console.log("State change to - ", store.getState());
  console.groupEnd();
};

/** creating and calling store functions **/

// Redux's combineReducer works the same way as our custom root reducer
const store = Redux.createStore(
  Redux.combineReducers({ todos, goals }),
  Redux.applyMiddleware(
    emptyInputCheckerMiddleware,
    numberCheckerMiddleware,
    validActionsMiddleware,
    loggerMiddleware
  )
);

const unsubscribe = store.subscribe(() => {
  // Do something when state change is detected
  console.log("Func 2 with state changed to - ", store.getState());
});

// When func 2 isn't needed to be listened anymore,
// subscribe has a return value as a function which when invoked remove currently subscribed func from the listeners array.
//   unsubscribe();

/** Action Creators **/

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}
