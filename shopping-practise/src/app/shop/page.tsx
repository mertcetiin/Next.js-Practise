"use client";
import React from 'react';
import { Products } from '../data/data';
import { useRouter } from 'next/navigation';
import { useProductStore } from '../state/store';


function page() {

    const productState = useProductStore((state) => state.productState)
    const deleteBtn = useProductStore((state) => state.deleteBtn)

    const router = useRouter();

    const handleHomePage = () => {
        router.push('/')
    }

    return (
        <div>
            <h2>Shop</h2>

            <button onClick={handleHomePage}>Home</button>

            {productState.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => deleteBtn(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default page