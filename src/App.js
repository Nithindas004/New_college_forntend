import logo from './logo.svg';
import './App.css';
import AdminLogin from './components/AdminLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminLogin/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
