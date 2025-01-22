import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import { Route, Routes, Navigate } from 'react-router-dom'; 
import SignUp from "./components/SignUp";

function App() {
  

  return (
   <main>
    <Navbar/>
    <Routes>
    <Route path="/" element={<HeroSection/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    <Footer/>
   </main>
  )
}

export default App
