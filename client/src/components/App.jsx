import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Routes from './Routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allUsers: [],
      currentUser: 0,
    };
    this.getAllUsers = this.getAllUsers.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    axios.get('/api/users')
      .then(({ data }) => {
        this.setState({ allUsers: data });
      })
      .catch(err => console.log(err));
  }

  setCurrentUser({ target }) {
    this.setState({
      currentUser: Number(target.value),
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar users={this.state.allUsers} setCurrentUser={this.setCurrentUser} />
          <Routes currentUser={this.state.currentUser} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
