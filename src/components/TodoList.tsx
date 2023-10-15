import React from "react";
import TodoItem from "./TodoItem";
import { Todos } from "../types";

type Props = {
  todos: Todos;
};
export default function TodoList({ todos }: Props) {
  return (
    <ul className="px-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} isDone={todo.isDone} />
      ))}
    </ul>
  );
}
