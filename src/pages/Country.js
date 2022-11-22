import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Country = () => {
  const { info } = useParams();
  const countriesArr = useSelector((state) => state.countries);
  const result = countriesArr.filter((country) => country.cca2 === info.toUpperCase());
  return (
    <nav>
      <Link to="/">{'< Region'}</Link>
      <h2>{result[0].latlng[0]}</h2>
      <h2>{result[0].latlng[1]}</h2>
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </nav>
  );
};

export default Country;
