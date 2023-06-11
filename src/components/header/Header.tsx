import React from 'react'
import './style.scss'
import Link from 'next/link'

import { AiFillHome } from 'react-icons/ai'

export default function Header() {
    return (
        <header className='absolute inset-x-0 top-0 h-16 w-full px-4'>
            <Link href='/' className="link text-2xl px-4 py-2 bg-white rounded-2xl hover:shadow-lg"><AiFillHome /></Link>
        </header>
    )
}
