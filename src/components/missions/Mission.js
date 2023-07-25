import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../../redux/missions/missionsSlice';

function Mission() {
  const missionsData = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  console.log(missionsData);
  return (
    <div>
      <h1>hello Missions</h1>
    </div>
  );
}

export default Mission;
