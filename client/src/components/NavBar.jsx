import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ users, setCurrentUser }) => (
  <div className="navBar">
    <span className="title">RANDOM MEME GENERATOR</span>
    <span className="links">
      <Link to="/">
        Meme Generator
      </Link>
    </span>
    <span className="links">
      <Link to="mymemes">
        My Memes
      </Link>
    </span>
    <select onChange={setCurrentUser}>
      <option value={0}>all memes</option>
      {users.map(user => (
        <option
          key={user.id}
          value={user.id}
        >{`${user.firstName} ${user.lastName}`}</option>
      ))}
    </select>
  </div>
);

NavBar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

export default NavBar;
