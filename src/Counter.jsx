import React, { useReducer } from "react";
import "./Counter.css"
const initialState = { value: 0 };


const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { value: state.value + 1 };
        case "decrement":
            return { value: state.value - 1 };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
        dispatch({ type: "increment" });
    };

    const decrement = () => {
        dispatch({ type: "decrement" });
    };

    const reset = () => {
        dispatch({ type: "reset" });
    };

    return (
        <div className="counter-container">
            <button className="counter-button" onClick={decrement}>-</button>
            <span className="counter-value">{state.value}</span>
            <button className="counter-button" onClick={increment}>+</button>
            <button className="counter-button reset-button" onClick={reset}>RESET</button>
        </div>
    );
};

export default Counter;