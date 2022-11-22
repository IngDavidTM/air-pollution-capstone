import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRegions } from '../redux/home/home';
import regions from '../redux/home/data/regions';

const Home = () => {
  const regionsArr = useSelector((state) => state.regions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegions(regions));
  }, [dispatch]);
  return (
    <>
      <nav>
        <h2>Region</h2>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </nav>
      <div className="regions">
        {regionsArr.map((element) => (
          <Link key={element.name} to={`/region/${element.name}`}>
            <div>
              <img alt={element.name} src={element.img} />
              <p>{element.name}</p>
            </div>
          </Link>
        ))}
      </div>

    </>
  );
};

export default Home;
