import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  text: string;
}

export interface TodoColumn {
  id: string;
  name: string;
  items: Todo[];
}

export interface TodoList {
  columns: TodoColumn[];
}

export const initialState: TodoList = {
  columns: [
    {
      id: uuidv4(),
      name: "Backlog",
      items: [
        {
          id: uuidv4(),
          text: "Do the laundry",
        },
        {
          id: uuidv4(),
          text: "Buy milk",
        },
        {
          id: uuidv4(),
          text: "Clean the house",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "In Progress",
      items: [
        {
          id: uuidv4(),
          text: "Learn Redux",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Done",
      items: [
        {
          id: uuidv4(),
          text: "Learn React",
        },
        {
          id: uuidv4(),
          text: "Learn Next.js",
        },
      ],
    },
  ],
};

export const TodoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addColumn: (state) => {
      const newColumn: TodoColumn = {
        id: uuidv4(),
        name: "New Column",
        items: [],
      };
      state.columns.push(newColumn);
    },
    removeColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter(
        (column) => column.id !== action.payload
      );
    },
    renameColumn: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const column = state.columns.find(
        (column) => column.id === action.payload.id
      );
      if (column) {
        column.name = action.payload.name;
      }
    },
    addNewTodoToColumn: (
      state,
      action: PayloadAction<{ columnId: string }>
    ) => {
      const column = state.columns.find(
        (column) => column.id === action.payload.columnId
      );
      if (column) {
        const newTodo = {
          id: uuidv4(),
          text: "New Todo",
        };
        column.items.push(newTodo);
      }
    },
    removeTodoFromColumn: (
      state,
      action: PayloadAction<{ columnId: string; todoId: string }>
    ) => {
      const column = state.columns.find(
        (column) => column.id === action.payload.columnId
      );
      if (column) {
        column.items = column.items.filter(
          (item) => item.id !== action.payload.todoId
        );
      }
    },
    renameTodoInColumn: (
      state,
      action: PayloadAction<{ columnId: string; todoId: string; text: string }>
    ) => {
      const column = state.columns.find(
        (column) => column.id === action.payload.columnId
      );
      if (column) {
        const item = column.items.find(
          (item) => item.id === action.payload.todoId
        );
        if (item) {
          item.text = action.payload.text;
        }
      }
    },
  },
});
