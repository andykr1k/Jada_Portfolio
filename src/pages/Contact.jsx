import { motion } from "framer-motion"
// import { process } from 'dotenv'


function Contact() {
  return (
    <div
      id="contact"
      className="grid place-items-center space-y-5 px-5 h-screen"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex justify-center">
          <img
            className="w-64 md:w-96 rounded-xl"
            loading="lazy"
            src="./jadalastpage.jpg"
          />
        </div>

        <div>
          <div className="flex justify-center space-x-2 pt-4">
            <a
              type="submit"
              href="https://ig.me/m/jadaganim"
              className="rounded-lg btn btn-primary font-medium text-stone-600 hover:text-white bg-white w-auto"
            >
              Send me a DM
            </a>
            <a
              type="submit"
              href="mailto:jadaganim@gmail.com"
              className="rounded-lg btn btn-primary font-medium text-stone-600 hover:text-white bg-white w-auto"
            >
              Send me an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
