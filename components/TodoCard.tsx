import React from "react";
import { Todo } from "../store/features/todoListSlice";

function TodoCard({ todoItem }: { todoItem: Todo }) {
  return (
    <div className="bg-white py-6 px-8 rounded-md shadow mb-2">
      <p className="text-gray-800 text-xl font-medium">{todoItem.text}</p>
    </div>
  );
}

export default TodoCard;
