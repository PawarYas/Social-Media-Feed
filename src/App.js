import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProfileSide from './Components/ProfileSide';
import Profile from './Pages/Profile';
import Discovery from './Pages/Discovery';
import CreatePost from './Pages/CreatePost';

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <div className='text-white grid grid-cols-3 gap-4'>
          <ProfileSide />
         
          <FollowerSide />
        </div> */}
        <div className="grid grid-cols-3 gap-2 text-white">
          <ProfileSide />
          <div className='col-span-2'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/user-profile' element={<Profile />} />
              <Route exact path='/discover' element={<Discovery />} />
              <Route exact path='/post' element={<CreatePost />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
