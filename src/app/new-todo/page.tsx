import { prisma } from '@/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

async function addTodo(data: FormData) {
    "use server"
    const title = data.get('title')?.valueOf()

    if (typeof title !== 'string' || title.length === 0) {
        throw new Error("invalid title")
    }

    await prisma.todo.create({ data: { title, complete: false } })
    redirect("/todo-list")
}

export default function Page() {
    return (
        <>
            <h1 className="mt-24 text-6xl">Add new todo</h1>
            <form action={addTodo} className='my-12 flex gap-2 flex-col'>
                <input
                    type="text"
                    name="title"
                    className="bg-white rounded px-2 py-1 outline-none"
                />
                <div className="flex gap-1 justify-start">
                    <Link
                        href="/todo-list"
                        className="border border-slate-300 text-slate-300 text-2xl px-2 py-1 rounded
                        hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        className="border border-slate-300 text-slate-300 text-2xl px-2 py-1 rounded
                        hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                    >
                        Add
                    </button>
                </div>
            </form>
        </>
    )
}
