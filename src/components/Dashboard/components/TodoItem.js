import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    

    render() {
        const { id, title, date}= this.props.todo;
        return (
            <div style ={this.getStyle()} className={this.props.todo.id}>
                <h3>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
                    <button style={btnStyle} onClick={this.props.delete.bind(this, id)}>DELETE</button>{' '}

                    {title}     {date}</h3>
                    {/* <button style={btnStyle} onClick={this.props.edit.bind(this, id)}>EDIT</button> */}
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: 'white',
    borderRadius: '50%',
}

export default TodoItem
