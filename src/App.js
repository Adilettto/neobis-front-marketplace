import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import PasswordsRecovery from './pages/PasswordRecovery/PasswordRecovery';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import Liked from './pages/Liked/Liked';
import MyProducts from './pages/MyProducts/MyProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/password-recovery" element={<PasswordsRecovery/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/liked' element={<Liked/>} />
        <Route path='/my-products' element={<MyProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
