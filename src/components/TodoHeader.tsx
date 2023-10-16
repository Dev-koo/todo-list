const TodoHeader = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl ">TodoHeader</h1>
      <div>
        <ul className="flex justify-end gap-2">
          <li>모두</li>
          <li>완료</li>
          <li>미완료</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoHeader;
