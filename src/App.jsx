import { useEffect } from 'react';
import { Routes, useLocation, Route } from 'react-router-dom';
import "preline/preline";

import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import { Coverpage } from './Pages/Coverpage';
import { Home } from './Pages/Home';
import { Results } from './Pages/Results';
import { Provider } from './Pages/Provider';
import { Providers } from './Pages/Providers';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/providers/:id" element={<Provider />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;