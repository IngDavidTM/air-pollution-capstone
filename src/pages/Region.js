import {
  Link, NavLink, Route, Routes, useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Country from './Country';

const Region = () => {
  const { country } = useParams();
  const countries = useSelector((state) => state.countries);
  const countriesArr = countries.filter((element) => element.region === (country === 'America' ? 'Americas' : country));
  return (
    <>
      <nav>
        <Link to="/">{'< Region'}</Link>
        <h2>countries</h2>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
        <div className="countries">
          <h3>{country}</h3>
          <img alt={country} src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${country.toLowerCase()}/vector.svg`} />
          {countriesArr.map((country) => (
            <NavLink key={country.cca2} to={`${country.cca2.toLowerCase()}/${country.latlng[0]}/${country.latlng[0]}`}>
              <div>
                <img alt={country.cca2} src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${country.cca2.toLowerCase()}/vector.svg`} />
                <h3>{country.name.common}</h3>
                <p>{country.population}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </nav>
      <Routes>
        <Route path=":info/:lat/:lon" element={<Country />} />
      </Routes>
    </>
  );
};

export default Region;
