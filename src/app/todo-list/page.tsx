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
            <h1 className="mt-24 text-6xl">Todo List</h1>

            <ul className="pl-4 my-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo}></TodoItem>
                ))}
            </ul>

            <Link
                className="border border-slate-300 text-slate-300 text-2xl font-bold px-2 py-1 rounded
                  hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                href="/new-todo"
            >+
            </Link>
        </>

    )
}