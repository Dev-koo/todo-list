import { v4 as uuid } from "uuid";
import { Todo } from "../types";
import { toast } from "react-hot-toast";
type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: (todo: Todo) => void;
  inputRef: React.RefObject<HTMLInputElement>;
};

function extractNumbers(inputStr: string): number {
  const regex = /\d+/g;
  const matches = [...inputStr.matchAll(regex)];
  return parseInt(matches.map((match) => match[0]).join(""));
}

const TodoAdd = ({ value, onChange, onAddTodo, inputRef }: Props) => {
  const handleClick = () => {
    if (value.trim().length === 0) {
      toast.error("Please write todo..");
      return;
    }
    const todo: Todo = {
      id: extractNumbers(uuid()),
      title: value,
      status: "Active",
    };
    onAddTodo(todo);
  };

  return (
    <div className="flex">
      <input
        className="p-2"
        type="text"
        placeholder="Todo..."
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      <button onClick={handleClick} className="bg-orange-400 py-2 px-4">
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
