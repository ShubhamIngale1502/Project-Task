import logo from './logo.svg';
import './App.css';
import Navabar from './components/layout/Navabar';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Show from './components/Show';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App">
      <Navabar/>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/show' element={<Show/>}/>
      <Route path='/person/update/:persId' element={<Update/>}/>
      <Route path='/person/delete/:persId' element={<Delete/>}/>
    </Routes>
    </div>
  );
}

export default App;
