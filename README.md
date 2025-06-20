# React & Redux & Nextjs

## React
### class Component x functional Component
#### class Component
It is a legacy way of creating components, using React's Components class. Since it is a class, it uses the constructor and render to create and render the component in the DOM.
It can use React's lifecycles, but does not have access to Hooks.

#### functional Component
It is the current and least verbose way of creating components in React. It is a JavaScript function (but can be written in TypeScript) and has access to Hooks.

### React x Angular X Vue
#### React
It is considered a library, since it leaves it up to the developer to choose how the project will be built, without natively imposing topics such as state management, routing, build configuration, and SEO. It uses a component-based architecture that is treated like the MVC View. These components are created using JSX, which is a combination of JavaScript and XML.

Since it has native global state management, it needs integration with other libraries such as Redux. To use local states (within the component), you can use the `useState` of the native hooks.

#### Vuejs
It also uses component architecture, like React, but is considered a progressive framework, since you can create a custom framework from this library.
It has state management via Vuex (Vue2) or Pinia (Vue3).

#### Angular
It differs from the previous ones because it is a framework, that is, it has state management (via RxJS), routing, request pattern, dependency injection pattern, among other configurations. Therefore, it is considered more verbose, robust and has a steeper learning curve.
As an architecture, it uses MVC (Model-View-Controller).

### React x Next
Next is a framework built on top of React, adding default settings that are not present in the library, such as:
- File-based routing
- SSR (Server-Side Rendering), SSG (Static Generation), and ISR (Incremental Static Regeneration)
- API routes (built-in backend)
- Performance and image optimizations
- Better SEO support (with server-side rendering)

### Routing in React
#### SPA
A Single Page Application is a dynamic HTML page that is capable of updating its content without the need to reload the page.

#### SSR

#### SSG

#### ISR

#### Routing with React Router
Pure React has no default routing system, so some library needs to be installed, such as `react-router`
``` javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
    //Provides routing context based on the actual browser URL, accessing browsing history and controlling content refresh without page reloading
      <Routes> //available routes
        <Route path="/" element={<Home />} /> //route and their component
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### Routing in Nextjs
Next has its own routing system built in. Routes can be defined by the folder structure, which can be within /app (App Router) or /pages (Pages Router).
``` bash
/app/page.tsx = /
/app/about/mission/page.tsx = /about/mission
```

#### App Route

#### Page Route

### React DOM
This is the package responsible for transforming React components into HTML elements. Although it is not explicit, NextJS also uses `react-dom` under the hood.
`react-dom` is related to the virtual DOM, which is a data structure created in memory by React to represent interface elements and thus speed up processing when parts of the page need to be updated. Through the virtual DOM, React can update only what is necessary, comparing the versions of the documents. From the changed virtual DOM, `react-dom` updates the real DOM.
  
### Lifecycle
The React Lifecyle is the stages the application pass before be rendered, after be rendered and before be destroyed.
There are 3 main phases on the cycle:
- **Mounting:** When the component is rendered in the DOM.
- **Updating:** The component is updated, like when the states are changed.
- **Unmounting:** The phase where the component is removed from the DOM.

### Hooks
Hooks are React functions that can be used without the need to create classes. The main hooks are:
#### useState
- Storage and update the local state
``` javascript
import { useState } from 'react'

function counter() {
  const [counter /*current value*/, setCounter /*value updater*/] = useState(0) //initial value

  return (
    <div>
      <p>{counter} clicks</p>
      <button onClick={() => setCounter(counter + 1)}>Click here!</button>
    </div>
  )
}
```
#### useEffect
- Performs side effects, allowing you to connect components with external elements
``` javascript
import { useEffect, useState } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(interval) // clear the effect
  }, []) //will run only once

  return <p>Time: {seconds}s</p>
}
```
#### useContext
- Share states between the components
``` javascript
const ContextColorTheme = React.createContext('light') //create context

function App() {
  return (
    <ContextColorTheme.Provider value="dark"> //add the context
      <Page />
    </ContextColorTheme.Provider>
  )
}

function Page() {
  const theme = React.useContext(ContextColorTheme) //use the context
  return <div className={theme}> ... </div>
}
```

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