import React from 'react';
import { useSelector } from 'react-redux';

function JoinMission() {
  const missionsData = useSelector((state) => state.missions);
  const bookedMissions = missionsData.missions.filter((mission) => mission.reserved);

  if (bookedMissions.length === 0) {
    return (
      <div className="W-4/12 ml-12">
        <h2 className="text-xl font-medium text-left">My Missions</h2>
      </div>
    );
  }

  return (
    <div className="w-4/12 ml-12">
      <h2 className="text-xl font-medium text-left">My Missions</h2>
      <ul className="border border-gray-300">
        {bookedMissions.map((mission) => (
          <li className="border-b p-2" key={mission.mission_id}>
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JoinMission;
