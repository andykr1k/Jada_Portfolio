import { motion } from "framer-motion";
import movies from "../data/Ads.json";

function Assisted() {
  return (
    <div
      id="assisted"
      className="grid place-content-center h-screen px-12 lg:px-24"
    >
      <h1 className="pb-5 font-bold text-3xl flex justify-center text-center">
        COMMERCIAL
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {movies.map((item) => (
          <motion.a
            href={item.movieYTURL}
            whileHover={{ scale: 1.02 }}
            key={item.movieName}
            target="_blank"
            className="relative"
          >
            <motion.img
              className="w-54 h-30 md:w-96 md:h-54 rounded-xl"
              src={`../${item.movieImageName}`}
            />

            <motion.div
              className="absolute inset-0 flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 bg-black bg-opacity-60 rounded-xl"
              whileHover={{ opacity: 1 }}
            >
              <h1 className="flex justify-center text-center font-bold text-lg md:text-2xl text-white">
                {item.movieName}
              </h1>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Assisted;
