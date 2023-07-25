import React from 'react';

function Rocket({ rocket }) {
  return (
    <li>
      <h2>{rocket.id}</h2>
      <h2>{rocket.name}</h2>
      <h2>{rocket.type}</h2>
      <h2>{rocket.flickr_images[0]}</h2>
    </li>
  );
}

export default Rocket;
