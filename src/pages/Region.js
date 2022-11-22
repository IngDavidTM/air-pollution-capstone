import { Link, useParams } from 'react-router-dom';

const Region = () => {
  const { country } = useParams();
  return (
    <nav>
      <Link to="/">{'< Region'}</Link>
      <h2>{country}</h2>
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </nav>
  );
};

export default Region;
