import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, unbookRocket } from '../../redux/rockets/rocketsSlice';
import './rockets.css';

function Rocket({ rocket }) {
  const dispatch = useDispatch();

  const handleBooking = ({ id, reserved }) => {
    if (reserved) {
      dispatch(unbookRocket(id));
    } else {
      dispatch(bookRocket(id));
    }
  };
  const getButtonContent = (reserved) => (reserved ? 'Cancel Reservation' : 'Reserve Rocket');
  const buttonContent = getButtonContent(rocket.reserved);
  const btnReserved = rocket.reserved ? 'reserve-btn' : 'card-btn';

  const getBadge = (reserved) => {
    if (reserved) {
      return (
        <button className="reserve-badge" type="button">Reserved</button>
      );
    }

    return '';
  };

  const dispayBadge = getBadge(rocket.reserved);

  return (
    <div className="card">
      <div className="img-container">
        <img alt="rocket.png" src={rocket.flickr_images[0]} className="card-img" />
      </div>
      <div className="card-details">
        <h2 className="card-name">{rocket.rocket_name}</h2>
        <div className="card-description">
          <span>{ dispayBadge}</span>
          {rocket.description}
        </div>
        <button
          type="button"
          className={btnReserved}
          onClick={() => handleBooking({
            id: rocket.id,
            reserved: rocket.reserved,
          })}
        >
          {buttonContent}
        </button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
