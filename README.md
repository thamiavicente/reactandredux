# React & Redux & Nextjs

## React

## Redux
- Action: What needs to happen in the application.
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

## Nextjs