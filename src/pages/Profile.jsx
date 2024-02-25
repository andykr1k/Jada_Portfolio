import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";

function Profile() {
  return (
    <div
      id="about"
      className="grid place-content-center h-[100vh] px-12 lg:px-24"
    >
      <div className="grid lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            className="w-44 md:w-96 rounded-xl"
            loading="lazy"
            src="./jadaPic.jpg"
          />
        </div>
        <div className="grid place-items-center">
          <div className="space-y-3 p-6">
            <h1 className="flex justify-center text-center text-2xl md:text-3xl font-bold">
              Jada Ganim
            </h1>
            <div className="flex justify-center text-center space-x-3">
              <h2 className="text-lg md:text-xl font-semibold">
                Co-Founder and Head of Production at FutureMade Films{" "}
              </h2>
            </div>
            <h3 className="flex items-center text-sm md:text-lg text-center">
              Having grown up using movies as a place to feel seen and less
              alone, I have developed a want to share diverse stories of people
              who come from all walks of life through their own experiences,
              dreams, culture and history. I am a passionate individual seeking
              opportunities that will advance my knowledge for film and my
              network of other talented people. I am currently studying in an
              online MFA screenwriting program at Emerson College.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
