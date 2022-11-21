import { Link } from 'react-router-dom';

const Region = () => (
  <nav>
    <Link to="/">{'< Region'}</Link>
    <h2>Country</h2>
    <i className="fa-solid fa-microphone" />
    <i className="fa-solid fa-gear" />
  </nav>
);

export default Region;
