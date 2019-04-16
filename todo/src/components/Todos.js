import React, { Component } from 'react'

import { connect } from 'react-redux';

import { addTodos, toggleTodos } from '../action';

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
        this.props.addTodos(this.state.todo);

        this.setState({
            todos:''
        });
    }


  render() {
    
    return (
      <div>
        <h2>Todo List Redux</h2>

        <input 
            type='text'
            name='todo'
            value={this.state.todos}
            placeholder='new todos...'
            onChange={this.handleChange}
        />

        <button onClick={this.addTodos}>Add Todo</button>

        {this.props.todos.map((todo, id)=>
        
            
            (<div onClick={()=> this.props.toggleTodos(id)} key={id} className='todo'>
                <p>{todo.value}</p>
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