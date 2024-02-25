import { motion } from "framer-motion";
import movies from "../data/Movies.json";
import * as React from "react";

function FilmSpotlight() {
  return (
    <div
      id="films"
      className="grid place-content-center md:h-[100vh] w-full px-12 lg:px-24 bg-[#BB8A89] py-20 md:py-0"
    >
      <h1 className="pb-10 md:pb-20 font-bold text-3xl flex justify-center text-center">
        NARRATIVE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {movies.map((item) => (
          <div key={item.movieName} className="grid">
            <motion.a
              href={item.movieYTURL}
              whileHover={{ scale: 1.02 }}
              key={item.movieName}
              target="_blank"
              className="relative"
            >
              <motion.img
                className="w-54 h-30 md:w-96 md:h-56 rounded-xl"
                loading="lazy"
                src={`../${item.movieImageName}`}
              />

              <motion.div
                className="absolute inset-0 flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 bg-black bg-opacity-60 rounded-xl"
                whileHover={{ opacity: 1 }}
              >
                <h1 className="flex font-bold text-lg md:text-2xl text-white justify-center text-center">
                  {item.movieName}
                </h1>
              </motion.div>
            </motion.a>
            <div className="text-center pt-2 font-semibold">
              <h4>{item.position}</h4>
              <h5>{item.year}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmSpotlight;
