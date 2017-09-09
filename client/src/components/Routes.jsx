import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Generator from './Generator';
import MyMemes from './MyMemes';

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      myMemes: [],
    };
    this.getMyMemes = this.getMyMemes.bind(this);
    this.setMyMeme = this.setMyMeme.bind(this);
  }

  componentDidMount() {
    this.getMyMemes(this.props.currentUser);
  }

  componentWillReceiveProps({ currentUser }) {
    if (this.props.currentUser !== currentUser) {
      this.getMyMemes(currentUser);
    }
  }

  getMyMemes(userId) {
    if (userId > 0) {
      axios.get(`/api/memes/${userId}`)
        .then(({ data }) => {
          this.setState({ myMemes: data });
        })
        .catch(err => console.log(err));
    } else {
      axios.get('/api/memes')
      .then(({ data }) => {
        this.setState({ myMemes: data });
      })
      .catch(err => console.log(err));
    }
  }

  setMyMeme(newMeme) {
    this.state.myMemes.push(newMeme);
    this.setState({
      myMemes: this.state.myMemes,
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Generator setMyMeme={this.setMyMeme} userId={this.props.currentUser} />
            )}
          />
          <Route
            path="/mymemes"
            render={() => (
              <MyMemes myMemes={this.state.myMemes} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

Routes.propTypes = {
  currentUser: PropTypes.number.isRequired,
};

export default Routes;
