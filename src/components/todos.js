

import React, { Component } from 'react'

export class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todoList :""
        }
    }
    


    static getDerivedStateFromProps(props, state){
        if(props.todos.length){
            return {
                todoList : props.todos.map(todo =>{
                    return(
                        <div  onClick={()=>{props.deleteTodo(todo.id)}} className="collection-item" key={todo.id}>
                            <span>{todo.content}</span>
                        </div>
                    )
                })
            };
        }
    }
    
    render() {
        if(this.props.todos.length === 0){
            return <h5 className = "center">No items left!</h5> ;
        }

        return (
            <div className = "todos collection">
                {this.state.todoList}
            </div>
        )
    }
}

export default TodoList;
