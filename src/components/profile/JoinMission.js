import React from 'react';
import { useSelector } from 'react-redux';

function JoinMission() {
  const missionsData = useSelector((state) => state.missions);
  const bookedMissions = missionsData.missions.filter((mission) => mission.reserved);

  return (
    <div className="">
      <h2 className="">My Missions</h2>
      <ul className="">
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
