import React, { useState } from 'react'

const ClickCounter = () => {

    const [count, setCount] = useState(0);

    function increment() {
        setCount( prev => prev+1);
    }
    function decrement() {
        setCount(count-1);
    }
  return (
    <div>
    <button onClick={increment}>Increase</button>
    <button onClick={decrement}>Decrease</button>

    <p>Counter : {count}</p>

    </div>
  )
}

export default ClickCounter;
