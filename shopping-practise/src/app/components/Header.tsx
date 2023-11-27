'use client'
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Header() {
    const router = useRouter();

    const handleBasketClick = () => {
        router.push('/basket');
    }

    return (
        <div>
            <Link href='/home'>Home</Link>
            <Link href='/shop'>Shop</Link>
            <button onClick={handleBasketClick}>Basket</button>
        </div>
    )
}


export default Header;