import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getInfo } from '../redux/country/country';
import '../stylesheet/Country.css';

ChartJS.register(ArcElement, Tooltip, Legend);

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
        label: 'Quantity',
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
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(94, 94, 94, 0.2)',
          'rgba(0, 0, 0, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(94, 94, 94, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  function ChartRadar() {
    return <Doughnut data={data} />;
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
          <h2>Doughnut Chart</h2>
          <ChartRadar />
        </div>
      </div>
    </div>
  );
};

export default Country;
