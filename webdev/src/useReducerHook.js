import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count +1};
        case 'decrement':
            return { count: state.count -1};
        default: 
            return state;
    }
}

function CounterUsingReducer() {
    
    const [state, dispatch] = useReducer(reducer, {count : 0});

    return (
        <div>
            Count : {state.count}
            <button onClick={ () => dispatch({type : 'increment'})}>+</button>
            <button onClick={ () => dispatch({type : 'decrement'})}>-</button>

        </div>
    );
}

export default CounterUsingReducer;
