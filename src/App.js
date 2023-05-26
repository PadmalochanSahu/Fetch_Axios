import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Table from './Components/Table';
import Users from './Components/Users';
import Albums from './Components/Albums';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Table />}/>
      <Route path='/albums' element={<Albums />}/>
      <Route path='/users' element={<Users />}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
