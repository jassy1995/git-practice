import { useReducer } from 'react';

const initialState = { count: 0, showText: true }

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1, showText: state.showText }
        case 'TOGGLE-SHOW-TEXT':
            return { count: state.count, showText: !state.showText }
        default:
            return state
    }

}




const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' })
        dispatch({ type: 'TOGGLE-SHOW-TEXT' })
    }
    return (
        <div className="flex flex-col">
            <h1>{state.count}</h1>
            <button className='border border-slate-200' onClick={handleIncrement}>Button</button>
            {state.showText && <span>text is showing</span>}
        </div>
    );
}

export default Counter;