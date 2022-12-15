import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Common from './component/Common';
import Details from './component/Details';
import Portfolio from './component/Portfolio';
import ProductDetails from './component/ProductDetails';
import Gallary from './component/Gallary.jsx'
import Chatbox from './component/Chatbox';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Dropdown from './component/Dropdown';
import NavDropdown from './component/NavDropdown';
import Play from './component/Play';





function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route exact path="/" element={<Common />} />
          <Route exact path="1" element={<Details />} />
          <Route exact path="2" element={<Portfolio />} />
          <Route exact path="3" element={<ProductDetails />} />
          <Route exact path="4" element={<Gallary />} />
          <Route exact path="5" element={<Chatbox />} />
          <Route exact path="6" element={<Footer />} />
          <Route exact path="7" element={<Navbar />} />
          <Route exact path="8" element={<Dropdown />} />
          <Route exact path="9" element={<NavDropdown />} />
          <Route exact path="10" element={<Play />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
