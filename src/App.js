import { Routes, Route, BrowserRouter } from 'react-router-dom'

//Pages
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';

import Navbar from './components/Navbar';



const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:char_id" element={<Detail />} />
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/quote/:quote_id" element={<QuoteDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;