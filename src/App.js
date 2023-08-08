import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Menu from './components/pages/menu';
import Contact from './components/pages/contact';
import "./components/styles/navbar.css"
import Footer from './components/pages/footer';

  

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='menu' element={<Menu/>}/>
     <Route path='contact' element={<Contact/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
