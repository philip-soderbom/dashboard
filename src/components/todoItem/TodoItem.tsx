import React from 'react'

type TodoItemProps = {
    id: string,
    title: string,
    complete: Boolean
}

export default function TodoItem({ id, title, complete }: TodoItemProps) {
    return (
        <li className='flex gap-2 items-center'>
            <input id={id} type="checkbox" className='cursor-pointer peer' />
            <label htmlFor={id} className='text-2xl cursor-pointer peer-checked:line-through peer-checked:text-slate-400'>{title}</label>
        </li>
    )
}
