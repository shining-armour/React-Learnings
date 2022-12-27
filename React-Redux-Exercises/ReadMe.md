# Key points

- The main goal of Redux is to make the state management of an application more predictable.
- State tree is an object that stores the entire state for an application at one location.
- 3-ways to interact with state tree -
  - Getting the state
  - Listening for changes to the state
  - Updating the state
- State tree + 3-ways to interact with State tree (GLU) = Store
- Pure functions characteristics -
  - Return the same result if the same arguments are passed in
  - Depend solely on the arguments passed into them
  - Do not produce side effects, such as API requests and I/O operations
- Reducer function characteristics -
  - Must be a pure function
  - Takes in current application state and action
  - Returns new state
- Dispatch function inside our store is responsible for updating the actual state of the store
- Dispatch works in the following way -

  - dispatch() is called with an Action
  - The reducer that was passed to createStore() is called with the current state tree and the action. This updates the state tree.
  - Because the state has (potentially) changed, all listener functions that have been registered with the subscribe() method are called.

- Middleware

  - When store.dispatch() is called, the reducer runs and produces the new state tree for the store.
  - Between the dispatching of an action and the reducer running, we can introduce code called middleware to intercept the action before the reducer is invoked.
  - Redux Middleware : A third-party extension point between dispatching an action, and the moment it reaches the reducer.
  - Middleware can perform a variety of operations with the action received:-
    - Producing a side effect (e.g., logging information about the store.
    - Processing the action itself (e.g., making an asynchronous HTTP request)
    - Redirecting the action (e.g., to another piece of middleware)
    - Dispatching supplementary actions

- Higher Order functions
  - Redux middleware leverages a concept called higher-order functions.
  - A higher-order function is a function that either:
    - Accepts a function as an argument
    - Returns a function
