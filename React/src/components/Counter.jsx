import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count,setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1 )}>Click Me!</button>
            <div>{count}</div>
        </div>
    )
}

export default Counter;
