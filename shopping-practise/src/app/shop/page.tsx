import React from 'react'
import { Products } from '../data/data'


function page() {
    return (
        <div>
            <h2>Shop</h2>

            {Products.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default page