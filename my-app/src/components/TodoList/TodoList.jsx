import { todos } from "../../utils/todos";
import Todo from "../Todo/Todo";

function TodoList() {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
