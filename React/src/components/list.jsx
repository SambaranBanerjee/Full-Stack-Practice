import React from 'react'

const ListComponent = () => {
    const items = [
        'Banana',
        'Mango',
        'Apple'
    ]

    const getMessage = () => {
        return items.length === 0 ? <p>No items Found</p> : <ul> { items.map((item) => <li>{item}</li>)} </ul>
    }

    return (
        <>
            <h1>List</h1>
            {  getMessage() }           
        </>
    )
}

export default ListComponent;
