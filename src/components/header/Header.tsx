import React from 'react'
import './style.scss'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='absolute inset-x-0 top-0 h-12 w-full bg-transparent border-b-2 px-4'>
            <Link href='/' className="px-2 py-1 bg-white rounded-2xl hover:shadow-lg">Start</Link>
        </header>
    )
}
