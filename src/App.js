import React, { Component } from 'react';
import './App.css';
import Headerr from './components/Headerr';
import List from './components/List';
import FormSubmit from './components/FormSubmit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        todos: [
            {id:1, name: "shopping", complete : false},
            {id:2, name: "running", complete : false},
            {id:3, name: "swimming", complete : false},
            {id:4, name: "drinking", complete : false},
        ],message: ""
     };

     this.onChangeMessage = this.onChangeMessage.bind(this);
     this.onSubmitMessage = this.onSubmitMessage.bind(this);
}
onChangeMessage(e) {
  this.setState({message: e.target.value });
}

onSubmitMessage(e) {
  // ป้องกันเปลี่ยนหน้า
  e.preventDefault();
  let oldTodos = this.state.todos;
  let todoLength = this.state.todos.length;
  let lastId = this.state.todos[todoLength - 1].id;
  let newMassage = {
    id: lastId + 1,
    name: this.state.message,
    complete: false
  };
  oldTodos.push(newMassage);
  this.setState({ todos: oldTodos });
}

  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        
          <Headerr />
        
        
          <List todos={this.state.todos}/>
          
      
          <FormSubmit onChangeMessage={this.onChangeMessage} onSubmitMessage={this.onSubmitMessage}/>
          </div>
        
    );
  }
}

export default App;
