# React & Redux & Nextjs

## React
### class Component x functional Component

### React x Angular

### React router

### React DOM
- Virtual DOM??
  
### Lifecycle
The React Lifecyle is the stages the application pass before be rendered, after be rendered and before be destroyed.
There are 3 main phases on the cycle:
- **Mounting:** When the component is rendered in the DOM.
- **Updating:** The component is updated, like when the states are changed.
- **Unmounting:** The phase where the component is removed from the DOM.

### Hooks


## Redux
### [Example of redux files](./Redux%20with%20TS)
- **Action:**
  - What needs to happen in the application
  - You can see it as an "event"
  ``` javascript
  //Structure:
    const action = {
        type: 'domain/eventName',
        payload: 'information needed by the action'
    }
    
  //Example:
    const addTodo = text => {
        return {
            type: 'todos/todoAdded',
            payload: text
        }
    }
  ```
- **Reducer**:
  - Can receive only the state and the action, other params must be received inside the action
  - Decides how and if something must be updated
  - The "event listener" to the action
  - Update the state in a immutably way
  - All unpredictable information must be calculated outside the reducer, like random or async information 
  ``` javascript
  //Structure:
  reducers: {
    reducer(state, action) {
      ... logic
    }
  }
  //Example:
  reducers: {
    addItem(state, action) {
      state.items = [...state.items, action.payload]
    },
    toggleItem(state) {
      state.check = !state.check
    }
  }
  ```
- **Store:**
  - The object where the states are storaged.
  ``` javascript
  //Example:
  import { configureStore } from '@reduxjs/toolkit'
  import addItemReducer from '../features/todo'

  export const store = configureStore({
    reducer: {
      addItem: addItem //just import and add the reducers here
    }
  })
  ```
- **Dispatcher:**
  - A method from the store used to update the states on the components
  - Think the dispatcher as the "event trigger"
  ``` javascript
    const action = (item) => {
      return {
        type: 'todos/todosAdded',
        payload: item
      }
    }
    store.dispatch(action)
    store.getState() //used to get states from the store
  ```
- **Selector:**
  - Is the way to extract data from the store
  ``` javascript
  const items = state => state.items
  const todoList = items(store.getState())
  
  ```

## Nextjs