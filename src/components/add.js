import React, { Component } from 'react'

export class AddTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: ""
        }
    }

    handleChange = (e) => {
        this.setState({ content: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.adder({ id: "", content: this.state.content });
        this.setState({ content: "" });
    }

    render() {
        return (
            <div className="todo-add center">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    <input type="submit" value="Add" className="blue waves-effect waves-light btn add-button"/>
                </form>
                {/* <div className="center">
                    <div onClick={this.handleSubmit()} class="waves-effect waves-light btn" >Add Item</div>
                </div> */}
            </div>
            
        )
    }
}

export default AddTodo;
