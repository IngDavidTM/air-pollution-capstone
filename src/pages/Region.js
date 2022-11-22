import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../redux/region/region';

const Region = () => {
  const { country } = useParams();
  const countriesArr = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries(country));
  }, [dispatch, country]);
  return (
    <nav>
      <Link to="/">{'< Region'}</Link>
      <h2>countries</h2>
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
      <div className="countries">
        <h3>{country}</h3>
        <img alt={country} src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${country.toLowerCase()}/vector.svg`} />
        {countriesArr.map((country) => (
          <div key={country.cca2}>
            <img alt={country.cca2} src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${country.cca2.toLowerCase()}/vector.svg`} />
            <h3>{country.name.common}</h3>
            <p>{country.population}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Region;
