import React from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { upValue, downValue, clearValue } from './Redux/Action';


function App() {
  const { value } = useSelector((select) => select.myReducer)
  // console.log(value);

  const dispatch = useDispatch()

  const decrementValue = () => {

    dispatch(downValue(value))
  }
  const incrementValue = () => {
    dispatch(upValue(value))
  }
  const resetValue = () => {
    dispatch(clearValue(value))
  }

  return (
    <>
      <div className="App">
        <h1>Redux Counter</h1>
        <div className='Counter'>
        <h2>{value}</h2>
          <button onClick={decrementValue}>Decrement</button>  <button onClick={incrementValue}>Increment</button>
          <button onClick={resetValue} className='btn'>Reset</button>
        </div>
       
      </div>
    </>
  );
}

export default App;

