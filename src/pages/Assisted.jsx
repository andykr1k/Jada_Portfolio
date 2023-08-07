import { motion } from "framer-motion"
import movies from '../data/Ads.json'

function Assisted() {
  return (
    <div id="assisted" className="grid place-items-center space-y-5 p-24 pt-10">
      <h1 className='pb-5 font-bold text-3xl flex justify-center text-center'>Produced & Assistant Directed</h1>
      {movies.map((item)=>
          <motion.a href={item.movieYTURL} whileHover={{scale:1.02}} key={item.movieName} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} target="_blank"  className="">
              <motion.img className=' rounded-xl' src={`../${item.movieImageName}`} />
          </motion.a>
          )}
    </div>
  )
}

export default Assisted
