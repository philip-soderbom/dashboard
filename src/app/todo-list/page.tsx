import TodoItem from "@/components/todoItem/TodoItem";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";


async function getTodos() {
    return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
    "use server"
    console.log('update status to: ', complete);
    await prisma.todo.update({
        where: { id },
        data: { complete }
    })
}

async function deleteTodo(deleteId: string) {
    "use server"
    const deletedTodo = await prisma.todo.delete({
        where: {
            id: deleteId
        }
    })
}

async function deleteAllTodos() {
    "use server"
    await prisma.todo.deleteMany({})
    redirect("/todo-list")
}

export default async function Page() {
    const todos = await getTodos()

    return (
        <>
            <h1 className="mt-24 text-6xl">Todo List</h1>

            <ul className="pl-4 my-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}></TodoItem>
                ))}
            </ul>

            <Link
                className="border border-slate-300 text-slate-300 text-2xl font-bold px-2 py-1 rounded
                  hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                href="/new-todo"
            >+
            </Link>

            {todos.length > 0 && (
                <form action={deleteAllTodos} className="mt-4 text-xl">
                    <button type="submit" className="bg-red-500 px-2 py-1 rounded">Delete all entries</button>
                </form>
            )}

        </>

    )
}