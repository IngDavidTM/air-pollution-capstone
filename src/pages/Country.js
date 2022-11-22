import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getInfo } from '../redux/country/country';

const Country = () => {
  const { info } = useParams();
  const infoArr = useSelector((state) => state.info);
  const countriesArr = useSelector((state) => state.countries);
  const result = countriesArr.filter((country) => country.cca2 === info.toUpperCase());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfo(result[0].latlng));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="country">
      <nav>
        <Link to=".." relative="path">{'< Region'}</Link>
        <h2>Country</h2>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
        <p>{infoArr.co}</p>
      </nav>
    </div>
  );
};

export default Country;
