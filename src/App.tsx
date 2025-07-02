
import { lazy } from 'react'
import './App.css'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./components/Home'))

function App() {


  return (
    <>
      <Navbar/>
    <div className='bg-white/20 h-screen'>
    <Home/>
    </div>
    </>
  )
}

export default App
