import React from 'react'
import { useState } from 'react'
//import { MouseEvent } from 'react'
const Counter = () => {
    const [count,setCount] = useState(0);
    
    return (
        <div>
            <button
            className='bg-black text-white'
            onClick={(event) => {
                setCount(count + 1 );
                console.log(event);
                }}>Click Me!</button>
            <div>{count}</div>
        </div>
    )
}

export default Counter;
