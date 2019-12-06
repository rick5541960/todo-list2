import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  constructor(){
    super();
    this.state={
      tdos: [],
    }
    
  }











  render() {
    const tdos = [];
    
      this.props.todos.get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function(doc){
          tdos.push(doc.data());
        });
        this.setState({tdos: tdos});
      });
    // var docRef = this.props.todos.doc("EkDW75ufqAyq8ilXVbmA");

    // docRef.get().then(function(doc) {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // })
    
    // this.props.todos.where("completed", "==", false)
    // .get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         // console.log(doc.id, " => ", doc.data());
    //         this.setState({tdos:4})
            
    //     });
        
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });

    // console.log(this.props.todos)
    return (
      // <h1>y</h1>
    this.state.tdos.map( (todo)=> (
        <TodoItem edit ={this.props.edit} delete={this.props.delete} markComplete={this.props.markComplete}key={todo.id} todo={todo}/> ))
    );
  }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
