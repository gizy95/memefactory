import { Routes, Route } from 'react-router-dom';
import './App.css'
import Meme from './Meme';

function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Meme />} />
      </Routes>
    </>
  )
}

export default App;
