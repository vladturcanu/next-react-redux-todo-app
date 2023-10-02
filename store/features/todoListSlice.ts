import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoColumn {
  id: number;
  name: string;
  items: Todo[];
}

export interface TodoList {
  columns: TodoColumn[];
}

export const initialState: TodoList = {
  columns: [],
};

export const TodoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addColumn: (state, action: PayloadAction<TodoColumn>) => {
      state.columns.push(action.payload);
    },
    removeColumn: (state, action: PayloadAction<number>) => {
      state.columns = state.columns.filter(
        (column) => column.id !== action.payload
      );
    },
    renameColumn: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      const column = state.columns.find(
        (column) => column.id === action.payload.id
      );
      if (column) {
        column.name = action.payload.name;
      }
    },
    addTodoToColumn: (
      state,
      action: PayloadAction<{ columnId: number; todo: Todo }>
    ) => {
      const column = state.columns.find(
        (column) => column.id === action.payload.columnId
      );
      if (column) {
        column.items.push(action.payload.todo);
      }
    },
    removeTodoFromColumn: (
      state,
      action: PayloadAction<{ columnId: number; todoId: number }>
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
    toggleTodoInColumn: (
      state,
      action: PayloadAction<{ columnId: number; todoId: number }>
    ) => {
      const column = state.columns.find(
        (column) => column.id === action.payload.columnId
      );
      if (column) {
        const item = column.items.find(
          (item) => item.id === action.payload.todoId
        );
        if (item) {
          item.done = !item.done;
        }
      }
    },
    renameTodoInColumn: (
      state,
      action: PayloadAction<{ columnId: number; todoId: number; text: string }>
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
