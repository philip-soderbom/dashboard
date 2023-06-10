import TodoItem from "@/components/todoItem/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";
import React from "react";


function getTodos() {
    return prisma.todo.findMany()
}

export default async function Page() {

    const todos = await getTodos()

    return (
        <>
            <div className="mt-24 flex justify-between item-center mb-4">
                <h1 className="text-3xl">Todos</h1>
                <Link
                    className="border border-slate-300 text-slate-300 px-2 py-1 rounded
                  hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                    href="/new"
                >New</Link>
            </div>

            <ul className="pl-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo}></TodoItem>
                ))}
            </ul>
        </>

    )
}