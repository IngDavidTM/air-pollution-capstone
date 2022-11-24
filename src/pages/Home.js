import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRegions } from '../redux/home/home';
import regions from '../redux/home/data/regions';
import '../stylesheet/Home.css';

const Home = () => {
  const regionsArr = useSelector((state) => state.regions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegions(regions));
  }, [dispatch]);
  return (
    <>
      <nav className="navHome">
        <h2>Continent</h2>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </nav>
      <div className="regions">
        {regionsArr.map((element) => (
          <Link key={element.name} to={`/${element.name}`}>
            <div>
              <img alt={element.name} src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${element.img}/vector.svg`} />
              <p>{element.name.toUpperCase()}</p>
            </div>
          </Link>
        ))}
      </div>

    </>
  );
};

export default Home;
