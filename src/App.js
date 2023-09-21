import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
