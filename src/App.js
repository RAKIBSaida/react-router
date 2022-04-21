import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Navigate}from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
        <Routes>
        {/* une redirection  et par defaut la propriéte exact est appliquée*/}
        <Route path='/' element={<Navigate to="/home"/>}/> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* utilisation des paramettres dynamiques dans le path*/}
          <Route path='/blog/:id/:slug' element={<Blog/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
