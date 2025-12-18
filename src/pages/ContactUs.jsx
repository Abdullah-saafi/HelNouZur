import Quote from "../components/Quote";
import { motion } from "framer-motion";
import { BsAndroid2 } from "react-icons/bs";
const ContactUs = () => {
  return (
    <div className="main overflow-hidden ">
      <div className="header bg-[url('/imgs/headerBg.jpg')] bg-center h-40 md:h-80  flex flex-col justify-center items-center">
        <h1 className="scondTxt text-4xl md:text-8xl font-bold">For Contact</h1>
      </div>

      <div className="form md:flex justify-center gap-10 md:mx-30 py-10">
        <div className="  text-4xl font-bold text-center my-10 flex flex-col items-center">
          <h1>If you have any Querry <br />or Suggestion <br /> Feel free to Contact.</h1>
          <p className="hidden md:block scondTxt text-9xl py-5"><BsAndroid2 /></p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 2000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="form md:w-[30rem] bg-white rounded-lg shadow-2xl p-8 space-y-1" >
          <div>
            <label className="block text-lg font-bold">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-lg font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full "
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-lg font-bold">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full"
              placeholder="Message subject"
            />
          </div>

          <div>
            <label className="block text-lg font-bold">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full resize-none"
              placeholder="Your message..."
            />
          </div>
          <div className="btn ">
            <button>Submit</button>
          </div>
        </motion.div>
      </div>
      <Quote scollTxt={false} />

    </div >
  )
}

export default ContactUs;