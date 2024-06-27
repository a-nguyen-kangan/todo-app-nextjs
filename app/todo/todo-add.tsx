'use client'

import { addToDo } from "@/lib/todo";

export default function AddTodo() {

    return (
        <div className="w-full">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="todo-title">
                        Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todo-title" type="text" placeholder="Title" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={add}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

async function add() {
    const title = (document.getElementById('todo-title') as HTMLInputElement).value;
    const res = await addToDo({
        title: title,
        completed: false
    });

    if (res.status === 201) {
        alert('Todo added successfully');
    }
    console.log(res);
}