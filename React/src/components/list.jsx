import React, { useState } from 'react'

const ListComponent = () => {
    const items = [
        'Banana',
        'Mango',
        'Apple'
    ]
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
        return items.length === 0 && <p>No items Found</p>
    }

    return (
        <>
            <h1>List</h1>
            {  getMessage() }
            <ul className='list-Name'>
                { items.map((item,index) => ( 
                    <li 
                    className={selectedIndex === index ? 'list-group-items active': 'list-group-items'} 
                    key={item} 
                    onClick={() => {
                        console.log(`Clicked ${item} with index ${index}`)
                        setSelectedIndex(index);
                    }}
                    >
                        {item}
                    </li> 
                )) }
            </ul>           
        </>
    )
}

export default ListComponent;
