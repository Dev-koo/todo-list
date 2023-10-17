import { useRef, useState } from "react";
import DarkModeButton from "./components/DarkModeButton";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { FilterTypes, Todo, Todos } from "./types";
import TodoAdd from "./components/TodoAdd";
import { useDarkMode } from "./provider/DarkeModeProvider";
type Props = {
  children: React.ReactNode;
};

const filters: Array<FilterTypes> = ["All", "Active", "Completed"];

function getFilteredTodo(filter: FilterTypes, todos: Todos) {
  if (filter === "All") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

function App() {
  const [todos, setTodos] = useState<Todos>([
    {
      id: 1,
      title: "책 읽기",
      status: "Active",
    },
    {
      id: 2,
      title: "코딩 하기",
      status: "Active",
    },
    {
      id: 3,
      title: "노래 듣기",
      status: "Active",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<FilterTypes>("All");
  const inputRef = useRef<HTMLInputElement>(null);
  const onAddTodo = (todo: Todo) => {
    setTodos((prev) => prev.concat(todo));
    setInput("");
    inputRef.current?.focus();
  };

  const onRemoveTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onChangeTodo = (updated: Todo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updated.id ? updated : todo))
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const filterd = getFilteredTodo(filter, todos);

  return (
    <Background>
      <Container>
        <TodoHeader filters={filters} onFilterChange={setFilter} />
        <TodoList
          todos={filterd}
          onRemoveTodo={onRemoveTodo}
          onChangeTodo={onChangeTodo}
        />
        <TodoAdd
          value={input}
          onChange={handleChange}
          onAddTodo={onAddTodo}
          inputRef={inputRef}
        />
      </Container>
      <DarkModeButton />
    </Background>
  );
}

export default App;

const Background = ({ children }: Props) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "bg-slate-900" : "bg-slate-400"
      } w-screen h-screen flex items-center justify-center  `}
    >
      {children}
    </div>
  );
};

const Container = ({ children }: Props) => {
  return (
    <div className="bg-slate-300   shadow-md rounded-md overflow-hidden">
      {children}
    </div>
  );
};
