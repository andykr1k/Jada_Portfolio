import { motion } from "framer-motion"
import { Client } from "@notionhq/client"
// import { process } from 'dotenv'

async function addContact(name, email, phone, message) {
    try {
      const response = await notion.pages.create({
        parent: { database_id: 'fc9b490c0a2246848cd7a68d92007ddb?v=4d616f19510047299e13a0fd25e73e1d&pvs=4' },
        properties: {
          title: {
            title:[
              {
                "name": {
                  "content": name
                },
                "email": {
                    "content": email
                },
                "phone": {
                "content": phone
                },
                "message": {
                "content": message
                },
              }
            ]
          }
        },
      })
      console.log(response)
      console.log("Success! Entry added.")
    } catch (error) {
      console.error(error.body)
    }
  }
  

function Contact() {

    // const notion = new Client({ auth: process.env.NOTION_KEY })
    // const databaseId = process.env.NOTION_DATABASE_ID
    const notion = new Client({ auth: 'secret_nLXLVBBYUcyOepiWpB3XofFoU6r2ucuqfHpwnkHXy0j' })
    const databaseId = 'fc9b490c0a2246848cd7a68d92007ddb?v=4d616f19510047299e13a0fd25e73e1d&pvs=4'
  return (
    <div id="contact" className="grid place-items-center space-y-5 p-5 h-screen">
        <div className="mx-auto max-w-screen-xl">
        <h1 className='pb-10 font-bold text-3xl flex justify-center'>Contact Me!</h1>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form onSubmit={addContact(document.getElementById('name'),document.getElementById('phone'),document.getElementById('phone'),document.getElementById('message'))} className="space-y-4">
                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-transparent outline text-black"
                    placeholder="Name"
                    type="text"
                    id="name"
                    required
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm bg-transparent outline text-black"
                        placeholder="Email address"
                        type="email"
                        id="email"
                        required
                    />
                    </div>

                    <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm bg-transparent outline text-black"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                    />
                    </div>
                </div>

                <div>
                    <label className="sr-only" htmlFor="message">Message</label>

                    <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-transparent outline text-black"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    required
                    ></textarea>
                </div>

                <div className="mt-4">
                    <button
                    type="submit"
                    className="inline-block w-full rounded-lg btn btn-primary px-5 py-3 font-medium text-white sm:w-auto"
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
