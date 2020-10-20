import React, { Fragment } from 'react'
import './App.css';

// Components
import InputTodos from './components/InputTodos';
import ListTodos from './components/ListTodos';

const App = () => {
  return (
    <Fragment>
      <div className='container'>
        <InputTodos />
        <ListTodos />
      </div>
  </Fragment>
    )
}
 
export default App;
