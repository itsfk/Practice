import React, { Component } from 'react';


class FriendList extends Component {
    constructor(props){
      super(props)
    }

render() {
    return (
      <div>
      <li>{this.props.data}</li>
      <ul>{this.props.value}</ul> 
      </div>
    );
  }
}
export default FriendList;
