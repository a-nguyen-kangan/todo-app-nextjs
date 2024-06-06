import { Todo } from "@/lib/todo";

export default function TodoList({ todos }: { todos: Todo[] }) {

    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold">Todo List</h1>
            <div className="grid grid-cols-3">

                <div className="border border-slate-500"><p className="font-bold">id</p></div>
                <div className="border border-slate-500"><p className="font-bold">title</p></div>
                <div className="border border-slate-500"><p className="font-bold">Completed</p></div>


                {todos.map((todo: Todo) => {
                    return (
                        <>
                            <p className="border border-slate-500">{todo.id}</p>
                            <p className="border border-slate-500">{todo.title}</p>
                            <p className="border border-slate-500">{todo.completed ? 'Yes' : 'No'}</p>
                        </>
                        
                    );
                })}

            </div>
        </div>
    )
}