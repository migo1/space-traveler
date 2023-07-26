import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../../redux/rockets/rocketsSlice';
import Rocket from './Rocket';
import './rockets.css';

function Rockets() {
  const dispatch = useDispatch();

  const rocketsdata = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  if (rocketsdata.loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {rocketsdata.loading ? (
        <div>Loading ...</div>
      ) : (
        <ul className="card-container">
          {rocketsdata.rockets.map((rocket) => (
            <Rocket key={rocket.id} rocket={rocket} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Rockets;
