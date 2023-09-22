import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import PasswordsRecovery from './pages/PasswordRecovery/PasswordRecovery';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/password-recovery" element={<PasswordsRecovery/>}/>
      </Routes>
    </div>
  );
}

export default App;
