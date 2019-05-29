// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";

const initialTodoData = [
    {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
    },
    {
      task: "Bake Cookies",
      id: 1528817084358,
      completed: false
    },
    {
      task: "Wash dishes",
      id: 1528817084376,
      completed: false
    }
  ];

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todolist: initialTodoData
    }
  }

  render() {
   
    return (
      <div>
        <h3>My friends:</h3>
        {this.state.todolist.map(todo => (
          <div key={todo.id}>
            {todo.task}
            
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
