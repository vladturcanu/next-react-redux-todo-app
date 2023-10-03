import React from "react";
import { TodoColumn, Todo } from "@/store/features/todoListSlice";
import TodoCard from "./TodoCard";
import { useAppDispatch } from "@/hooks/reduxHooks";

function TodoColumn({ column }: { column: TodoColumn }) {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-slate-200 py-3 px-2 rounded-md shadow mr-4 w-72">
      <div className="flex justify-between items-center">
        <p className="text-gray-800 text-lg font-medium">{column.name}</p>
        <button className="text-gray-800 text-lg font-medium">...</button>
      </div>

      <div className="flex flex-col">
        {column.items.map((todo: Todo) => (
          <TodoCard
            key={todo.id}
            todoItem={todo}
          />
        ))}
      </div>

      <button
        className="text-slate-700 text-lg font-medium py-2 px-4 rounded-md shadow mt-4 hover:bg-slate-100 hover:cursor-pointer"
        onClick={() =>
          dispatch({
            type: "todoList/addNewTodoToColumn",
            payload: { columnId: column.id },
          })
        }>
        + Add a card
      </button>
    </div>
  );
}

export default TodoColumn;
