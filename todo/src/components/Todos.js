import React, { Component } from 'react'

import { connect } from 'react-redux';

import { addTodos, toggleTodos, deleteTodos } from '../action';

class Todos extends Component {

    state = {
        todos: []
    }

    handleChange = e => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addTodos = () => {

        console.log('fired')
        this.props.addTodos(this.state.todos);

        this.setState({
            todos:''
        });
    }


  render() {
    console.log('todos',this.props);
    return (
      <div>
        <h2>Todo List Redux</h2>

        <input 
            type='text'
            name='todos'
            value={this.state.todos}
            placeholder='new todos...'
            onChange={this.handleChange}
        />

        <button onClick={this.addTodos}>Add Todo</button>

        {this.props.todos.map((todo, id)=>

            (<div onClick={()=> this.props.toggleTodos(id)} key={id} className='todo'>
                <p>{todo.value}</p>
                {/* <button onClick={()=>{this.props.deleteTodos(index)}}> X </button> */}
            </div>)
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodos, toggleTodos})(Todos);