import { motion } from "framer-motion";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineClose,
} from "react-icons/ai";

function Featured() {
  return (
    <div
      id="featured"
      className="grid place-content-center h-[100vh] px-12 lg:px-24 bg-[#BB8A89]"
    >
      <div className="grid lg:grid-cols-2">
        <motion.a
          whileHover={{ scale: 1.02 }}
          className="flex justify-center"
          href="https://www.imdb.com/title/tt29898902/?ref_=nv_sr_srsg_0_tt_5_nm_3_q_no%2520mercy%2520in%2520the%2520kin"
          target="_blank"
        >
          <img
            className="w-44 md:w-96 rounded-xl"
            loading="lazy"
            src="./NMITKPoster.jpg"
          />
        </motion.a>
        <div className="grid place-items-center">
          <div className="space-y-3 p-6">
            <h1 className="flex justify-center text-center text-2xl md:text-3xl font-bold">
              No Mercy In The Kingdom
            </h1>
            <h2 className="flex justify-center text-center text-xl md:text-xl font-semibold">
              COMING SOON
            </h2>
            <div className="flex justify-center text-center space-x-3">
              <h3 className="text-md md:text-xl font-semibold">
                Written & Directed By Jada Ganim
              </h3>
            </div>
            <h3 className="flex items-center text-md md:text-lg text-center">
              Two weeks before opening, a film director is hired to direct a
              play about the 17th century New England witch trials. Her
              directing approach begins to cross the line of ethics when tension
              rises between her and the actors.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
