import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendList from './FriendList';
class App extends Component {
  constructor(props){
     super(props)
     this.state={
      friends:["Faiz","Shoaib","Farwa"],
      inputs:''
      
    }  
  }
  todo=[]; 

   onChangeHandler = (ev) => {
    this.setState({inputs: ev.target.value});
    // this.setState({[ev.target.name]: ev.target.value});
    
}
submitHandler = (ev) => {
  this.todo.push(this.state.inputs)
  console.log('todo length', this.todo)
  this.setState({inputs: ''});
  ev.preventDefault();

}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.submitHandler}>
        <div>
            <input type="text" name="task" value={this.state.inputs} onChange={this.onChangeHandler}/>
        </div>
       
        <div>
            <input type="submit" name="add" value="Add"/>
        </div>

    </form>
       {this.state.friends.map(value => {
        return <FriendList data={value}/>})}
      </div>
    );
  }
}

export default App;
