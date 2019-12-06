import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import AddTodo from './components/AddTodo';
// import ls from 'local-storage';
//import { db } from './base';
import firebase, { db } from '../../contexts/Firebase'


class App extends Component {
  constructor(){
    super();
    //this.addd=this.addd.bind(this);
    //this.delete=this.delete.bind(this);
    this.state = {
      // todos: [
      //   {
      //     id: 1,
      //     title: 'Take out the BINS',
      //     completed: false
      //   },
      //   {
      //     id: 2,
      //     title: 'Dinner with Wife',
      //     completed: true
      //   },
      //   {
      //     id: 3,
      //     title: 'Meeting with BOSS',
      //     completed: false
      //   }
      // ]
      todos: []
      
    }
  }
  markComplete = (e) => (this.setState({todos: this.state.todos.map(todo =>{
    if(todo.id === e){
      todo.completed = !todo.completed
    }
    return todo;
  })}));

  // fire base method
  
  addd = (titl,dat)=>{
    // Add a new document in collection "cities"
    db.collection("todoCollection").add({
      //id: "Los Angeles",
      id: this.badidgen(),
      title: titl,
      date: dat,
      completed: false
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }
  

  //addd = (titl) =>(this.setState({todos: this.state.todos.concat({id:[this.state.todos[this.state.todos.length-1].id+1],title:titl,completed:false})}))
  // delete = (id) =>(this.setState({todos: this.state.todos.filter(obj => obj.id !=id )}))

  // original fire base method
  
  delete = (id) => {
    let delete_query = db.collection("todoCollection").where("id", "==", id);
    delete_query.get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        doc.ref.delete();
      })
    })
  }
  
  badidgen = () => {
    return Math.round(Math.random()*1000000000)
  }

  // componentDidMount(){
  //   this.setState({todos:db.collection("todoCollection")})
  //   console.log(this.state.todos)
  //   //base.removeBinding(this.todosRef);
  // }
  // generateId = () =>

  render() {
    
    return (
      
      <div className="App">
        <AddTodo addd={this.addd}/>
        <Todos edit={this.edit} delete={this.delete} markComplete={this.markComplete}todos={db.collection('todoCollection')}/>
        <h1>Aaap</h1>
      </div>
    );
  }
}

export default App;
