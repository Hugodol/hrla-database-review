import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../../../node_modules/sweetalert/dist/sweetalert.css';

class Generator extends Component {
  constructor() {
    super();
    this.state = {
      allMemes: [],
      randomMeme: '',
      text: '',
      alert: false,
    };
    this.getAllMemes = this.getAllMemes.bind(this);
    this.getRandomMeme = this.getRandomMeme.bind(this);
    this.setText = this.setText.bind(this);
    this.saveMeme = this.saveMeme.bind(this);
    this.toggleAlert = this.toggleAlert.bind(this);
  }

  componentDidMount() {
    this.getAllMemes();
  }

  getAllMemes() {
    axios.get('https://api.imgflip.com/get_memes')
      .then(({ data }) => {
        const allMemes = data.data.memes.map(meme => meme.url);
        this.setState({ allMemes });
      })
      .catch(err => console.log(err));
  }

  getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * this.state.allMemes.length);
    this.setState({ randomMeme: this.state.allMemes[randomIndex] });
  }

  setText({ target }) {
    this.setState({ text: target.value });
  }

  saveMeme() {
    if (this.props.userId > 0) {
      axios.post(`/api/meme/${this.props.userId}`, {
        url: this.state.randomMeme,
        text: this.state.text,
      })
      .then(({ data }) => {
        this.props.setMyMeme(data);
      })
      .catch(err => console.log(err));
      this.setState({
        randomMeme: '',
        text: '',
      });
    } else {
      this.toggleAlert();
    }
  }

  toggleAlert() {
    this.setState({
      alert: !this.state.alert,
    });
  }

  render() {
    return (
      <div className="generator">
        <SweetAlert
          show={this.state.alert}
          title="Wrong User"
          text="Please pick a valid user!"
          type="warning"
          onConfirm={this.toggleAlert}
        />
        <button onClick={this.getRandomMeme}>
          Get Random Meme
        </button>
        <img className="memeImg" src={this.state.randomMeme} alt="" />
        <input type="text" onChange={this.setText} value={this.state.text} />
        <button onClick={this.saveMeme}>
          Save Meme
        </button>
      </div>
    );
  }
}

Generator.propTypes = {
  setMyMeme: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default Generator;
