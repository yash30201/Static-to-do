import React, { Component } from 'react'
import TodoList from './components/todos'
import AddTodo from './components/add'

export class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       cnt : 1, 
       todos: [
         
       ]
    }
  }
  
  deleteTodo = (id) => {
    const x = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos : x
    });
    
  }

  addtodo = (todo) =>{
    todo.id = this.state.cnt;
    let x = [...this.state.todos, todo];
    this.setState({todos : x ,cnt: this.state.cnt+1});
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos's</h1>
        <TodoList todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo adder = {this.addtodo}/>
      </div>
    )
  }
}

export default App;
