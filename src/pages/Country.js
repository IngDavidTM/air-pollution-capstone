import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getInfo } from '../redux/country/country';

const Country = () => {
  const {
    info, lat, lon, name,
  } = useParams();
  const infoArr = useSelector((state) => state.info);
  const dispatch = useDispatch();
  useEffect(() => {
    const coor = [lat, lon];
    dispatch(getInfo(coor));
  }, [dispatch, lat, lon]);
  return (
    <div className="country">
      <nav>
        <Link to="..">{'< Countries'}</Link>
        <h2>Country</h2>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </nav>
      <div>
        <img alt={info} src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${info}/vector.svg`} />
        <h3>{name}</h3>
        <h4>Air Pollution</h4>
        <p>{`CO: ${infoArr.co}`}</p>
        <p>{`NH3: ${infoArr.nh3}`}</p>
        <p>{`NO: ${infoArr.no}`}</p>
        <p>{`NO2: ${infoArr.no2}`}</p>
        <p>{`O3: ${infoArr.o3}`}</p>
        <p>{`PM2_5: ${infoArr.pm2_5}`}</p>
        <p>{`PM10: ${infoArr.pm10}`}</p>
        <p>{`SO2: ${infoArr.so2}`}</p>
      </div>
    </div>
  );
};

export default Country;
