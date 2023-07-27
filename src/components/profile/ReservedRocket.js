import React from 'react';
import { useSelector } from 'react-redux';

function ReservedRocket() {
  const rocketData = useSelector((state) => state.rockets);
  const bookedRockets = rocketData.rockets.filter((rocket) => rocket.reserved);

  if (bookedRockets.length === 0) {
    return (
      <div className="W-4/12 mr-12">
        <h2 className="text-xl font-medium text-left">My Rockets</h2>
      </div>
    );
  }

  return (
    <div className="w-4/12 mr-12">
      <h2 className="text-xl font-medium text-left">My Rockets</h2>
      <ul className="border border-gray-300">
        {bookedRockets.map((rocket) => (
          <li className="border-b p-2" key={rocket.id}>
            {rocket.rocket_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservedRocket;
