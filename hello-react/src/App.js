
import './App.css';
import Navbar from './Admin/Navbar';
import Student from './Admin/Student';
import { Routes, Route, Link } from 'react-router-dom';
import AddStudent from './Admin/AddStudent';
import Title from './Admin/title';
import Addtitle from './Admin/Addtitle';
import EditTitle from './Admin/Edittitle';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Student />}></Route>
        <Route path='AddStudent' element={<AddStudent />}></Route>
        <Route path='title' element={<Title />}></Route>
        <Route path='Addtitle' element={<Addtitle />}></Route>
        <Route path='EditTitle' element={<EditTitle />}></Route>
      </Routes>

    </div>
  );
}

export default App;
