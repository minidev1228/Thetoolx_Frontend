import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import MainToolPage from './pages/MainToolPage';
import PageLoader from "./components/PageLoader"


const Router = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main/">
          <Route path="tools" element={<MainToolPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router