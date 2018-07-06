import React from 'react'

const inc = prevState => {
  return {
    count: prevState.count + 1
  }
}

const dec = prevState => {
  return {
    count: prevState.count - 1
  }
}

const App = ({ state, setState }) => {
  return (
    <div>
      <h1>Click the buttons to count</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={() => setState(inc)}>Increment</button>
      <button onClick={() => setState(dec)}>Decrement</button>
    </div>
  )
}

export default App
