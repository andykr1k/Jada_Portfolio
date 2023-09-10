import { motion } from "framer-motion"
import movies from '../data/Ads.json'

function Assisted() {
  return (
    <div id="assisted" className="grid place-items-center space-y-5 p-24 pt-10">
      <h1 className='pb-5 font-bold text-3xl flex justify-center text-center'>Produced & Assistant Directed</h1>
      {movies.map((item)=>
        <motion.a
          href={item.movieYTURL}
          whileHover={{ scale: 1.02 }}
          key={item.movieName}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          target="_blank"
          className="relative"
        >
          <motion.img className="rounded-xl" src={`../${item.movieImageName}`} />

          <motion.div
            className="absolute inset-0 flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 bg-black bg-opacity-60 rounded-xl"
            whileHover={{ opacity: 1 }}
          >
            <h1 className="flex justify-center text-center font-bold text-lg md:text-5xl text-white">{item.movieName}</h1>
          </motion.div>
        </motion.a>
          )}
    </div>
  )
}

export default Assisted
