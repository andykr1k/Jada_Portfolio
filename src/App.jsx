import { Contact, FilmSpotlight, Assisted, Profile, Featured } from './pages'
import { Header } from './components'
import './index.css'

function App() {
  return (
    <div className="grid place-items-center">
      <div className='fixed top-5 right-5 md:top-10 md:right-10 z-30'>
        <Header />
      </div>
      <Profile />
      <Featured />
      <FilmSpotlight />
      <Assisted />
      <Contact />
    </div>
  )
}

export default App
