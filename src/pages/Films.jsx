import { motion } from "framer-motion"
import movies from '../data/Movies.json'

function FilmSpotlight() {
  return (
    <div id="films" className="grid place-items-center space-y-5 p-24 pt-10">
      <h1 className='pb-5 font-bold text-3xl flex justify-center text-center'>Written & Directed</h1>
      {movies.map((item)=>
          <motion.a href={item.movieYTURL} whileHover={{scale:1.02}} key={item.movieName} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} target="_blank"  className="">
              <motion.img className='w-screen rounded-xl' src={`../${item.movieImageName}`} />
              {/* <div className=" inset-0 flex justify-center items-center z-10">
                <h1 className='font-bold text-xl'>{item.movieName}</h1>
              </div> */}
          </motion.a>
          )}
    </div>
  )
}

export default FilmSpotlight
