import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';
import Add from './pages/Add';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
       <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/Create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/Add' element={<Add/>}></Route>
       </Routes>
    </div>    
    </BrowserRouter>

  );
}

export default App;
