import { motion } from "framer-motion"
// import { process } from 'dotenv'


function Contact() {
  return (
    <div id="contact" className="grid place-items-center space-y-5 p-5 h-screen">
        <div className="mx-auto max-w-screen-xl">
        <h1 className='pb-10 font-bold text-3xl flex justify-center'>Contact Me!</h1>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 justify-center space-y-2">
              <div className="flex justify-center">
                    <a
                    type="submit"
                    href="https://ig.me/m/jadaganim"
                    className="w-full rounded-lg btn btn-primary font-medium text-white sm:w-auto"
                    >
                    Send me a DM
                    </a>
                </div>
                <div className="flex justify-center">
                    <a
                    type="submit"
                    href="mailto:jadaganim@gmail.com"
                    className="w-full rounded-lg btn btn-primary font-medium text-white sm:w-auto"
                    >
                    Send me an Email
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
