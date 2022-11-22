import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getInfo } from '../redux/country/country';

const Country = () => {
  const { info } = useParams();
  const countriesArr = useSelector((state) => state.countries);
  const result = countriesArr.filter((country) => country.cca2 === info.toUpperCase());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfo(result[0].latlng));
  }, [dispatch, result]);
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
