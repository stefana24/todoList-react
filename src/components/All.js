import Todo from "./Todo";
const AllTasks = (props) => {
  console.log(props);
  return (
    <div className="container">
      {props.todos.length!==0 ? (
        props.todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              name={todo}
              removeTodo={props.removeTodo}
              completeTask={props.completeTask}
            />
          );
        })
      ) : (
        <p className="noItemsText">Nothing to show yet!</p>
      )}
    </div>
  );
};

export default AllTasks;
