import { Trash2 } from "lucide-react";
import { Todo } from "../types";
type Props = {
  todo: Todo;
  onRemoveTodo: (id: number) => void;
  onChangeTodo: (id: number) => void;
};

const TodoItem = ({
  todo: { id, isDone, title },
  onRemoveTodo,
  onChangeTodo,
}: Props) => {
  return (
    <>
      <li
        className={`flex justify-between py-2 group ${
          isDone ? "text-gray-400 line-through" : ""
        }`}
      >
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => onChangeTodo(id)}
        />
        {title}{" "}
        <Trash2
          className="cursor-pointer invisible group-hover:visible hover:text-red-600"
          onClick={() => onRemoveTodo(id)}
        />
      </li>
    </>
  );
};

export default TodoItem;
