
import './App.css';
import Navbar from './Admin/Navbar';
import Student from './Admin/Student';
import { Routes, Route, Link } from 'react-router-dom';
import AddStudent from './Admin/AddStudent';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Student/>}></Route>
        <Route path='AddStudent' element={<AddStudent/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
