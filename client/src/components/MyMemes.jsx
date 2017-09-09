import React from 'react';
import PropTypes from 'prop-types';

const MyMemes = props => (
  <div className="myMemes">
    {props.myMemes.map((meme, i) =>
      (<div key={i} className="myMeme">
        <img src={meme.url} alt="" />
        <span className="memeText">{meme.text}</span>
      </div>),
    )}
  </div>
);

MyMemes.propTypes = {
  myMemes: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default MyMemes;
