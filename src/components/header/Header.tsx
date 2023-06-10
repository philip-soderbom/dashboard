import React from 'react'
import Button from '../button/Button'
import './style.scss'

export default function Header() {
    return (
        <header className='absolute inset-x-0 top-0 h-12 w-full bg-transparent border-b-2 px-4'>
            <Button size={24} text="Start" link="/"></Button>
        </header>
    )
}
