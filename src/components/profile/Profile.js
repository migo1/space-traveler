import React from 'react';
import JoinMission from './JoinMission';
import ReservedRocket from './ReservedRocket';

function Profile() {
  return (
    <>
      <div className="mx-12 px-12 flex justify-between">
        <JoinMission />
        <ReservedRocket />
      </div>
    </>
  );
}

export default Profile;
