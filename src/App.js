import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Blog from './components/Blog';
import Layout from './theme/Layout';

//Pages
import Home from './pages/Home';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;