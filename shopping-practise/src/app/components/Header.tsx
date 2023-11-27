import React from 'react'
import Link from 'next/link';

function Header() {
    return (
        <div>
            <Link href='/home'>Home</Link>
            <Link href='/shop'>Shop</Link>
            <Link href='/basket'>Basket</Link>
        </div>
    )
}

export default Header;