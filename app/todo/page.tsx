import { fetchAllTodos } from "@/lib/fetch";
import AddTodo from "./todo-add";
import TodoList from "./todo-list";
import type { Todo } from "@/lib/todo";

export default async function Todo() {
  const todos = await fetchAllTodos();
    
    var todoList: Todo[] = [];
    
    todos.map((todo: Todo) => {
      todoList.push(todo);
    });

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AddTodo />
  
       <TodoList todos={todoList} />

      </main>
  
    );
  }