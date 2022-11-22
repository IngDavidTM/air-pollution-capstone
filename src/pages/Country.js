import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { getInfo } from '../redux/country/country';
import '../stylesheet/Country.css';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

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
  const data = {
    labels: ['CO', 'NH3', 'NO', 'NO2', 'O3', 'PM2_5', 'PM10', 'SO2'],
    datasets: [
      {
        label: 'COMPONENTS',
        data: [
          infoArr.co,
          infoArr.nh3,
          infoArr.no,
          infoArr.no2,
          infoArr.o3,
          infoArr.pm2_5,
          infoArr.pm10,
          infoArr.so2,
        ],
        backgroundColor: '#ffffffd2',
        borderColor: '#ffffffd2',
        borderWidth: 1,
      },
    ],
  };

  function ChartRadar() {
    return <Radar data={data} />;
  }

  return (
    <div className="country">
      <nav className="navCountry">
        <Link to="..">
          <i className="fa-solid fa-chevron-left" />
          COUNTRIES
        </Link>
        <h2>Country</h2>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </nav>
      <div className="infoCountry">
        <img alt={info} src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${info}/vector.svg`} />
        <h3>{name}</h3>
        <div className="infoPollution">
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
        <div className="chart">
          <ChartRadar />
        </div>
      </div>
    </div>
  );
};

export default Country;
