import React, { Fragment } from 'react'
import './App.css';

// Components
import InputTodos from './components/InputTodos';

const App = () => {
  return (
    <Fragment>
      <div className='container'>
        <InputTodos />
      </div>
  </Fragment>
    )
}
 
export default App;
