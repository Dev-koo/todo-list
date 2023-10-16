import React from "react";
import TodoItem from "./TodoItem";
import { Todo, Todos } from "../types";

type Props = {
  todos: Todos;
  onRemoveTodo: (id: number) => void;
  onChangeTodo: (todo: Todo) => void;
};
export default function TodoList({ todos, onRemoveTodo, onChangeTodo }: Props) {
  return (
    <ul className="px-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onChangeTodo={onChangeTodo}
        />
      ))}
    </ul>
  );
}
