import './App.css'
import Home from './pages/Home'
import Applications from './pages/Applications'
import JobApply from './pages/JobApply'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'

function App() {

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/job-apply" element={<JobApply />} />
      </Routes>
    </>
  )
}

export default App
