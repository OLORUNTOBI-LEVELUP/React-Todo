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


 

  render() {
    return (
      <div >
        <div>
         
        </div>
      </div>
    );
  }
}

export default App;
