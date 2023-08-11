import { motion } from "framer-motion"
import { BsDot } from 'react-icons/bs'

function Profile() {
  return (
    <div id='about' className="grid place-content-center h-screen p-16 lg:p-24">
        <div className="grid lg:grid-cols-2">
            <div className="flex justify-center pt-5 md:pt-0">
                <img width={600} src="./jadaPic.jpg" />
            </div>
            <div className="grid place-items-center">
                <div className="space-y-3 p-6">
                    <h1 className="flex justify-center text-center text-3xl font-bold">Jada Ganim</h1>
                    <div className="flex justify-center text-center space-x-3">
                    <h2 className="text-xl font-semibold">Director</h2>
                    <h2 className="text-xl font-semibold">•</h2>
                    <h2 className="text-xl font-semibold">Writer</h2>
                    <h2 className="text-xl font-semibold">•</h2>
                    <h2 className="text-xl font-semibold">Producer</h2>
                    </div>
                    <h3 className="flex items-center text-sm md:text-lg">I am a second generation Middle Eastern-American woman and passionate storyteller. Having grown up using movies as a place to feel seen and less alone, I have developed a want to share diverse stories of people who come from all walks of life through their own experiences, dreams, culture and history. Fall 2023, I will be attending Emerson College in a low-residency Writing for Film and Television Graduate Program.</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
