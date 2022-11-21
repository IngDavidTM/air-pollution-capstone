import { Link } from 'react-router-dom';

const Country = () => (
  <nav>
    <Link to="/region">{'< Country'}</Link>
    <h2>C</h2>
    <i className="fa-solid fa-microphone" />
    <i className="fa-solid fa-gear" />
  </nav>
);

export default Country;
