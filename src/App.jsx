import { useEffect } from 'react';
import { Routes, useLocation, Route } from 'react-router-dom';
import 'preline/preline';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import { Coverpage } from './Pages/Coverpage';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Results } from './Pages/Results';
import { Provider } from './Pages/Provider';
import { Login } from './Pages/Login';
import { Settings } from './Pages/Settings';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/results' element={<Results />} />
        <Route path='/login' element={<Login />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/providers/:name' element={<Provider />} />
        <Route path='/projects/:name' element={<Provider isOSSProject />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
