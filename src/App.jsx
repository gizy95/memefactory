import { Routes, Route } from 'react-router-dom';
import './App.css'
import MemeImage from './views/MemeImage'


function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<MemeImage />} />
      </Routes>
    </>
  )
}

export default App;
