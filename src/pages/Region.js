import {
  Link, NavLink, Route, Routes, useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Country from './Country';
import '../stylesheet/Region.css';

const Region = () => {
  const { country } = useParams();
  const countries = useSelector((state) => state.countries);
  const countriesArr = countries.filter((element) => element.region === (country === 'America' ? 'Americas' : country));
  window.scrollTo(0, 0);
  return (
    <>
      <div className="region">
        <nav className="navRegion">
          <Link to="/">
            <i className="fa-solid fa-chevron-left" />
            REGION
          </Link>
          <h2>Countries</h2>
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </nav>
        <div className="countries">
          <header>
            <img alt={country} src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${country.toLowerCase()}/vector.svg`} />
            <h3 className="countryName">{country}</h3>
          </header>
          <h4>POPULATION</h4>
          <div className="countriesContainer">
            {countriesArr.map((country) => (
              <NavLink key={country.cca2} to={`${country.cca2.toLowerCase()}/${country.latlng[0]}/${country.latlng[0]}/${country.name.common}`}>
                <div className="itemCountry">
                  <img alt={country.cca2} src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${country.cca2.toLowerCase()}/vector.svg`} />
                  <h3>{country.name.common.toUpperCase()}</h3>
                  <p>{country.population}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Routes>
        <Route path=":info/:lat/:lon/:name" element={<Country />} />
      </Routes>
    </>
  );
};

export default Region;
