import { Trash2 } from "lucide-react";
import { Todo } from "../types";
type Props = {
  todo: Todo;
  onRemoveTodo: (id: number) => void;
  onChangeTodo: (todo: Todo) => void;
};

const TodoItem = ({
  todo: { id, status, title },
  onRemoveTodo,
  onChangeTodo,
}: Props) => {
  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? "Completed" : "Active";
    const newTodo: Todo = {
      id,
      title,
      status,
    };
    onChangeTodo(newTodo);
  };

  return (
    <>
      <li
        className={`flex justify-between py-2 group ${
          status === "Active" ? "" : "text-gray-400 line-through"
        }`}
      >
        <input
          type="checkbox"
          checked={status === "Completed"}
          onChange={handleCheckChange}
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
