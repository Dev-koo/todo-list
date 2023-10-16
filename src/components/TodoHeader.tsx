import { FilterTypes } from "../types";

type Props = {
  filters: Array<FilterTypes>;
  onFilterChange: (filter: FilterTypes) => void;
};

const TodoHeader = ({ filters, onFilterChange }: Props) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl">TodoHeader</h1>
      <div>
        <ul className="flex justify-end gap-2">
          {filters.map((value, index) => (
            <li key={index} onClick={() => onFilterChange(value)}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoHeader;
