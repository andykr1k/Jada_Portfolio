import { motion } from "framer-motion"
import movies from '../data/Movies.json'
import * as React from 'react'
import { Client } from "@notionhq/client";

function FilmSpotlight() {
  const notion = new Client({ auth: 'secret_nLXLVBBYUcyOepiWpB3XofFoU6r2ucuqfHpwnkHXy0j' });
  const databaseId = 'ffe6884e2c9f40cf94ebabe1f68713a9?v=554c90cc130f4c88ae92e16e2a1a540f'

  // React.useEffect(() => {
  //   (async () => {
  //     let headers = new Headers();

  //     headers.append('Content-Type', 'application/json');
  //     headers.append('Accept', 'application/json');
  //     headers.append('Origin','http://localhost:5173');
  //     headers.append('Access-Control-Allow-Origin', 'http://localhost:5173');
  //     headers.append('Access-Control-Allow-Credentials', 'true');

  //     const response = await notion.databases.retrieve(headers=headers,{ database_id: databaseId });
  //     console.log(response);
  //   })();
  // }, [])
  return (
    <div id="films" className="grid place-items-center space-y-5 p-12 md:p-24 pt-10">
      <h1 className='pb-5 font-bold text-3xl flex justify-center text-center'>Written & Directed</h1>
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
          <motion.img className="w-screen rounded-xl" src={`../${item.movieImageName}`} />

          <motion.div
            className="absolute inset-0 flex justify-center items-center z-10 opacity-0 transition-opacity duration-300 bg-black bg-opacity-60 rounded-xl"
            whileHover={{ opacity: 1 }}
          >
            <h1 className="flex font-bold text-lg md:text-5xl text-white justify-center text-center">{item.movieName}</h1>
          </motion.div>
        </motion.a>
          )}
    </div>
  )
}

export default FilmSpotlight
