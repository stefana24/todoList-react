import { useEffect, useState } from "react";
import AllTasks from "./components/All";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [status, setStatus] = useState("all");

  const [copyTodos, setCopyTodos] = useState(todos);

  const addTodo = (text) => {
    const newTodo = [...todos, { text: text, isDone: false }];
    setTodos(newTodo);
  };

  const removeTodo = (text) => {
    const newTodo = todos.filter((element) => element.text !== text);
    setTodos(newTodo);
  };
  const completeTask = (text) => {
    const newTodo = todos.filter((element) => element.text !== text);
    const element = todos.find((element) => element.text === text);
    element.isDone = true;
    setTodos([...newTodo, element]);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    if (!todoText) return;
    addTodo(todoText);
    setTodoText("");
  };

  // function filterTodosByStatus(todo) {
  //   switch (status) {
  //     case "active":
  //       return todo.isDone === false;
  //     case "completed":
  //       return todo.isDone === true;
  //     default:
  //       return true;
  //   }
  // }

  useEffect(() => {
    switch (status) {
      case "active":
        setCopyTodos(todos.filter((todo) => todo.isDone === false));
        break;
      case "completed":
        setCopyTodos(todos.filter((todo) => todo.isDone === true));
        break;
      default:
        setCopyTodos(todos);
    }
  }, [status, todos]);

  return (
    <div className="appContainer">
      <h1 className="title">What is your plan for today?</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter your task"
          value={todoText}
          onChange={(ev) => setTodoText(ev.target.value)}
        ></input>
        <button className="addTaskBtn">Add todo</button>
      </form>
      <div className="status">
        <button className="allBtn" onClick={() => setStatus("all")}>
          All tasks
        </button>
        <button className="activeBtn" onClick={() => setStatus("active")}>
          Active tasks
        </button>
        <button className="completedBtn" onClick={() => setStatus("completed")}>
          Completed tasks
        </button>
      </div>
      <AllTasks
        todos={copyTodos}
        // todos={todos.filter((todo) => filterTodosByStatus(todo))}
        removeTodo={removeTodo}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
