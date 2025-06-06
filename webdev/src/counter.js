import React, { useState } from 'react';

function Counter()  {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count+1);

    }
    const decrease = () => {
        setCount(count -1);
    }

    return(
    <div>
    <p>Counter : {count} </p>

    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    </div>

    )
}

export default Counter;