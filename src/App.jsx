import { Contact, FilmSpotlight, Assisted, Profile } from './pages'
import { Header } from './components'
import './index.css'

function App() {
  return (
    <div className="grid place-items-center space-y-5">
      <div className='fixed top-5 right-5 md:top-10 md:right-10 z-10'>
        <Header />
      </div>
      <Profile />
      <FilmSpotlight />
      <Assisted />
      <Contact />
    </div>
  )
}

export default App
