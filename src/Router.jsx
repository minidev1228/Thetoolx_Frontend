import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import MainToolPage from './pages/MainToolPage';
import PageLoader from "./components/PageLoader"
import MyProfilePage from "./pages/MyProfilePage";
import UsersPage from './pages/UsersPage';
import ForumPage from "./pages/ForumPage"
import SavedToolPage from "./pages/SavedToolPage"
import ActivityHistoryPage from "./pages/ActivityHistoryPage"

const Router = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main/">
          <Route path="tools" element={<MainToolPage />} />
          <Route path='my-profile' element={<MyProfilePage />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='forum' element={<ForumPage />} />
          <Route path='saved_tool_page' element={<SavedToolPage />} />
          <Route path='activity_history' element={<ActivityHistoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router