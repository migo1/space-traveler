import React from 'react';
import { useSelector } from 'react-redux';

function ReservedRocket() {
  const rocketData = useSelector((state) => state.rockets);
  const bookedRockets = rocketData.rockets.filter((rocket) => rocket.reserved);

  return (
    <ul className="">
      {bookedRockets.map((rocket) => (
        <li className="border-b p-2" key={rocket.id}>
          {rocket.rocket_name}
        </li>
      ))}
    </ul>
  );
}

export default ReservedRocket;
