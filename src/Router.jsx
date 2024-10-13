import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import PageLoader from "./components/PageLoader"


const Router = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router