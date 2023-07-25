import React from 'react';
import PropTypes from 'prop-types';

function MissionList({ mission, index }) {
  return (
    <tr className={index % 2 === 0 ? 'bg-gray-100' : ''}>
      <td className="border p-4">{mission.mission_name}</td>
      <td className="border p-4">{mission.description}</td>
      <td className="border p-4">
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          not a member
        </span>
      </td>
    </tr>
  );
}

MissionList.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default MissionList;
