import React from 'react';
import './Todo.css'
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Type todo here"
      />
      <button onClick={props.handleAddTodo} className="addtodo">Add Todo</button>
      <button onClick={props.handleClearTodos} className="cleartodo">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
