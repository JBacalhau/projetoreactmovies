import { Header } from "./components/Header"
import './global.css'
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { Footer } from "./components/Footer"

// foi instalado a exteção Tailwind CSS IntelliSense para auto completar a escrita
function App() {
  

  return (
    <BrowserRouter>
      
      <Header/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
