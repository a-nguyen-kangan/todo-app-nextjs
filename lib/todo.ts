export interface Todo {
    id?: string;
    title: string;
    completed: boolean;
}

export async function addToDo(newTodo: Todo) {
    const res = await fetch("https://665e45471e9017dc16ef83fe.mockapi.io/api/Todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    });

    return res;
}