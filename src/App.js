import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Jumbotron from './components/Jumbotron/Jumbotron';
import User from './components/User';
import Navbar from './components/Navbar/Navbar';
import About from './components/About';

import Logout from './components/Logout';

function App() {
  return (
    <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
            <Route index element={<Home/>}/> 
            <Route path='user' element={<User/>}></Route>   
            <Route path='login' element={<Login/>}></Route> 
            <Route path='aboutus' element={<About/>}></Route>        
            <Route path='logout' element={<Logout/>}></Route>            
        </Routes>
      </BrowserRouter>
  );
}

export default App;
