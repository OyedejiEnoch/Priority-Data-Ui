
import './App.css'
import Business from './components/Business'
import Footer from './components/Footer'
import Header from './components/Header'
import Platforms from './components/Platforms'
import Productivity from './components/Productivity'
import Reviews from './components/Reviews'
import Schedule from './components/Schedule'

function App() {

  return (
    <>
      <div className='w-full h-screen relative'>
        <Header />

        <Business />
        <Schedule />
        <Productivity />
        <Platforms />
        <Reviews />
        <Footer />
       </div>
    </>
  )
}

export default App
