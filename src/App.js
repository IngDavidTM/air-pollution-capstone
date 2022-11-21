import { Routes, Route } from 'react-router-dom';
import Country from './pages/Country';
import Home from './pages/Home';
import Region from './pages/Region';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region" element={<Region />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
