import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css'
import MemeImage from './views/MemeImage'
import BrowseNew from './views/BrowseNew'


function App() {



  return (
    <>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/browse">Make your own meme</NavLink>
        </nav>


      <Routes>
        <Route path="/" element={<MemeImage />} />
        <Route path="/browse" element={<BrowseNew />} />

      </Routes>
    </>
  )
}

export default App;
