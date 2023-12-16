// import { useState } from 'react'
// import './App.css'
// import UseState from './component/UseState'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <UseState/>
//     </>
//   )
// }

// export default App

//Progression 6

// import { useState } from 'react';
// import './App.css';
// import UseContext from './component/UseContext';
// import React from 'react';

// export const ToggleTheme = React.createContext()

// function App() {

//   const [state,setState] = useState(true)

//   const handleToggle = ()=>{
//     setState(state=>!state)
//   }

//   return (
//     <ToggleTheme.Provider value={state}>
//       <button onClick={handleToggle}>Toggle</button>
//       <UseContext/>
//     </ToggleTheme.Provider>
//   );
// }

// export default App;

//Task

import React,{ useState } from 'react';
import './App.css';
import UseContext from './component/UseContext';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default App;

