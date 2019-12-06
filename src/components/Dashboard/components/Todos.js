import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  constructor(){
    super();
    this.state={
      tdos:[{
        id: 1,
        title: 'Take out the BINS',
        date: '11-02-2020'
      },
      {
        id: 2,
        title: 'Dinner with Wife',
        date: '25-12-2019'
      },
      {
        id: 3,
        title: 'Meeting with BOSS',
        date: '20-01-2020'
      }],
    }
    
  }
  compare = (a,b) => {
    if(a.date.substring(6)<b.date.substring(6)){
      return -1
    }
    else if(a.date.substring(6)>b.date.substring(6)){
      return 1
    }
    else{
      if(a.date.substring(3,5)<b.date.substring(3,5)){
        return -1
      }
      else if(a.date.substring(3,5)>b.date.substring(3,5)){
        return 1
      }
      else{
        if(a.date.substring(0,2)<b.date.substring(3,5)){
          return -1
        }
        else if(a.date.substring(0,2)>b.date.substring(3,5)){
          return 1
        }
        else{
          return 0
        }
      }
    }
    
  }
  // sortByDate = () => {
  //   this.setState(tdos:this.)
  // }
  componentWillMount(){
    this.setState({
      tdos: this.state.tdos.sort(this.compare)
    })
  }

  render() {
    const tdos = [];

    //Pulls items from Firestore database into this.state
      //UNCOMMENT!!!! only commented because firebase down
      // this.props.todos.get()
      // .then((querySnapshot) => {
      //   querySnapshot.forEach(function(doc){
      //     tdos.push(doc.data());
      //   });
      // this.setState({tdos: tdos});
      // });

      
    return (
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
