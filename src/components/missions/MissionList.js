import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

function MissionList({ mission, index }) {
  const dispatch = useDispatch();

  const handleAttendance = ({ id, reserved }) => {
    if (reserved) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  const getBadgeText = (reserved) => (reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER');

  const getButtonContent = (reserved) => (reserved ? 'Leave Mission' : 'Join Mission');

  const badgeText = getBadgeText(mission.reserved);
  const buttonContent = getButtonContent(mission.reserved);

  return (
    <tr className={index % 2 === 0 ? 'bg-gray-100' : ''}>
      <td className="border p-4">{mission.mission_name}</td>
      <td className="border p-4">{mission.description}</td>
      <td className="border p-4">
        <span
          className={`inline-flex items-center rounded-md ${
            mission.reserved ? 'bg-blue-500' : 'bg-gray-500'
          } px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ${
            mission.reserved ? 'ring-blue-500/10' : 'ring-gray-500/10'
          } whitespace-nowrap`}
        >
          {badgeText}
        </span>
      </td>
      <td>
        <button
          type="button"
          className={`border p-1 ${
            mission.reserved
              ? 'border-red-500 text-red-600 bg-transparent'
              : 'border-gray-500 text-gray-600 bg-transparent'
          } mx-2 rounded whitespace-nowrap`}
          onClick={() => handleAttendance({
            id: mission.mission_id,
            reserved: mission.reserved,
          })}
        >
          {buttonContent}
        </button>
      </td>
    </tr>
  );
}

MissionList.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mission_id: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default MissionList;
