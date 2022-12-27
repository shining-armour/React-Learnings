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

// next represents the next middleware in line to be run OR if not exist, store.dispatch() will be treated as next.
// next for numberCheckerMiddleware is loggerMiddleware
const numberCheckerMiddleware = (store) => (next) => (action) => {
  if (action.type === ADD_TODO && containsNumbers(action.todo.name)) {
    return alert("Numbers not allowed!");
  }
  if (action.type === ADD_GOAL && containsNumbers(action.goal.name)) {
    return alert("Numbers not allowed!");
  }
  return next(action);
};

// next for loggerMiddleware is store.dispatch()
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
  Redux.applyMiddleware(numberCheckerMiddleware, loggerMiddleware)
);

store.subscribe(() => {
  // Do something when state change is detected
  const { todos, goals } = store.getState();

  // subscribe is called everytime the state is changed
  // whether through adding goal or todo
  // we do not want the previously added item to either todo-list or goal-list added again
  // Hence, we must clear the both lists before calling the for loops to each state
  document.getElementById("todo-list").innerHTML = "";
  document.getElementById("goal-list").innerHTML = "";

  // for each item in todos state, add it to the todo-list
  todos.forEach((todo) => addTodoToDOMList(todo));
  // for each item in goals state, add it to the goal-list
  goals.forEach((goal) => addGoalToDOMList(goal));
});

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

/** DOM code **/

function addTodoToState() {
  console.log("Entered add todo");

  const input = document.getElementById("todo");
  const name = input.value;
  // clear input value
  input.value = "";
  store.dispatch(
    addTodo({
      id: generateId(),
      name: name,
      complete: false,
    })
  );
}

function addGoalToState() {
  const input = document.getElementById("goal");
  const name = input.value;
  // clear input value
  input.value = "";
  store.dispatch(
    addGoal({
      id: generateId(),
      name: name,
    })
  );
}

document.getElementById("addTodoBtn").addEventListener("click", addTodoToState);
document.getElementById("addGoalBtn").addEventListener("click", addGoalToState);

// Higher Order function
function createRemoveButton(onClickCallback) {
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "X";
  removeBtn.addEventListener("click", onClickCallback);
  return removeBtn;
}

function addTodoToDOMList(todo) {
  const listItemNode = document.createElement("li");
  const textNode = document.createTextNode(todo.name);
  const todoList = document.getElementById("todo-list");
  const removeBtn = createRemoveButton(() => {
    store.dispatch(removeTodo(todo.id));
  });

  listItemNode.appendChild(textNode);
  listItemNode.appendChild(removeBtn);
  todoList.appendChild(listItemNode);

  listItemNode.style.textDecoration = todo.complete ? "line-through" : "none";
  listItemNode.addEventListener("click", () => {
    store.dispatch(toggleTodo(todo.id));
  });
}

function addGoalToDOMList(goal) {
  const listItemNode = document.createElement("li");
  const textNode = document.createTextNode(goal.name);
  const goalList = document.getElementById("goal-list");
  const removeBtn = createRemoveButton(() => {
    store.dispatch(removeGoal(goal.id));
  });
  listItemNode.appendChild(textNode);
  listItemNode.appendChild(removeBtn);
  goalList.appendChild(listItemNode);
}
