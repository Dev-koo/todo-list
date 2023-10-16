export type Todo = {
  id: number;
  title: string;
  status: FilterTypes;
};

export type Todos = Todo[];

export type FilterTypes = "All" | "Active" | "Completed";
