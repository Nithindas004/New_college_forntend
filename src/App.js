import logo from './logo.svg';
import './App.css';
import AdminLogin from './components/AdminLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import AddStudent from './components/AddStudent';
import Viewall from './components/Viewall';
import ViewMark from './components/ViewMark';
import AddMark from './components/AddMark';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentLogin/>} />
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path='/addstudent' element={<AddStudent/>} />
        <Route path='/viewall' element={<Viewall/>} />
        <Route path='/viewmark' element={<ViewMark/>} />
        <Route path='/addmark' element={<AddMark/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
