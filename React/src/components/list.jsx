import React from 'react'

const ListComponent = () => {
    const items = [
        'Banana',
        'Mango',
        'Apple'
    ]

    return (
        <>
            <h1>List</h1>
            { items.length === 0 ? <p>No items Found</p> 
            :   <ul>
                    { items.map((item) => <li>{item}</li>)}
                </ul>
            }
            
        </>
    )
}

export default ListComponent;
