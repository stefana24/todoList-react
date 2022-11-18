const Todo = (props) => {
  console.log(props);
  return (
    props.name.text && (
      <div className="todo">
        <h2
          className="todoName"
          style={{ textDecoration: props.name.isDone ? "line-through" : "" }}
        >
          {props.name.text}{" "}
        </h2>
        <div className="buttons">
          <button
            className="doneBtn"
            onClick={() => props.completeTask(props.name.text)}
          >
            Done
          </button>
          <button
            className="deleteBtn"
            onClick={() => props.removeTodo(props.name.text)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  );
};

export default Todo;
