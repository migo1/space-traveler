import React from 'react';
import PropTypes from 'prop-types';

function Rocket({ rocket }) {
  return (
    <li>
      <h2>{rocket.id}</h2>
      <h2>{rocket.rocket_name}</h2>
      <h2>{rocket.description}</h2>
      <h2>{rocket.flickr_images[0]}</h2>
    </li>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Rocket;
