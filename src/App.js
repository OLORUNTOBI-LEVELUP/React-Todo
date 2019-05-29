import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: '',
          id: null,
          completed: false,
        }
      ],
      todo: '',
    };
  }
 
  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  changeTodo = e => {
    this.setState({ [e.target.name]: e.target.value });
  }



 

  render() {
    return (
      <div className="container">
        <div>
          <TodoForm
            value={this.state.todo}
            handleTodoChange={this.changeTodo}
            handleAddTodo={this.addTodo}
            
          />
          <TodoList
            
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
