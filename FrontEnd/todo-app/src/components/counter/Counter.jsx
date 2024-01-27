import { useState } from 'react'
import { PropTypes } from 'prop-types'
import './Counter.css'

export default function Counter() {
    
    // returns array [count, setCount] count-> countValue and setCount -> function
    const [count, setCount] = useState(0);

    function incrementCounterFunction(value) {
        setCount(count + value)
    }

    function decrementCounterFunction(value) {
        setCount(count - value)
    }
    
    function clear() {
        setCount(0)
    }

    return(
        <div className="Counter">
            <div>
                <button className='counterButton' 
                onClick={() => incrementCounterFunction(1)}>
                    +1
                </button>
                <button className='counterButton' 
                onClick={() => decrementCounterFunction(1)}>
                    -1
                </button>
            </div>
            <div>
                <button className='counterButton' 
                onClick={() => incrementCounterFunction(2)}>
                    +2
                </button>
                <button className='counterButton' 
                onClick={() => decrementCounterFunction(2)}>
                    -2
                </button>
            </div>
            <div>
                <button className='counterButton' 
                onClick={() => incrementCounterFunction(5)}>
                    +5
                </button>
                <button className='counterButton' 
                onClick={() => decrementCounterFunction(5)}>
                    -5
                </button>
            </div>
            <span className='count'>{count}</span>
            {count === 143 && <h1> Congrats!!!!</h1>}
            <div>
                <button className='clearButton' 
                onClick={clear}>
                    clear
                </button>
            </div>
        </div>
    )
}

Counter.propTypes = {
    count: PropTypes.number,
    value: PropTypes.number,
};