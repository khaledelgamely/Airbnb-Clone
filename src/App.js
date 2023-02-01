
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TabsComp from './components/TabsComp';
import HouseDetails from './components/PlaceDetails';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import SearchDetails from './components/SearchDetails';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<>  <Navbar /> <TabsComp /> </>} />
          <Route path="/:id" element={<> <Navbar /> <HouseDetails /> <Footer /> </>} />
          <Route path="/checkout/:id/:days" exact element={<> <Navbar />  <Checkout /> <Footer /></>} />
          <Route path="/location/:loc" exact element={<>  <Navbar /> <SearchDetails /> <Footer /></>} />
          <Route path="/location/:loc/:id" exact element={<>  <Navbar /> <HouseDetails /> <Footer /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
