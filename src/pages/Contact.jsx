import { motion } from "framer-motion"

function Contact() {
  return (
    <div id="contact" className="grid place-items-center space-y-5 p-5 pb-32 h-screen">
      <h1 className='pb-5 font-bold text-3xl flex justify-center'>Contact</h1>
        <div class="mx-auto max-w-screen-xl">

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" class="space-y-4">
                <div>
                    <label class="sr-only" for="name">Name</label>
                    <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label class="sr-only" for="email">Email</label>
                    <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                    />
                    </div>

                    <div>
                    <label class="sr-only" for="phone">Phone</label>
                    <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                    />
                    </div>
                </div>

                <div>
                    <label class="sr-only" for="message">Message</label>

                    <textarea
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    ></textarea>
                </div>

                <div class="mt-4">
                    <button
                    type="submit"
                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                    Send Enquiry
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
