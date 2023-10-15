import { Trash2 } from "lucide-react";
type Props = {
  title: string;
  isDone: boolean;
};

const TodoItem = ({ title, isDone }: Props) => {
  return (
    <>
      <li className="flex justify-between py-2">
        <input type="checkbox" name="" id="" />
        {title} <Trash2 />
      </li>
    </>
  );
};

export default TodoItem;
