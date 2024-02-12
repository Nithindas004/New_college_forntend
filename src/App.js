import logo from './logo.svg';
import './App.css';
import AdminLogin from './components/AdminLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentLogin/>} />
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path='/addstudent' element={<AddStudent/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
