
const CreatePost = () => {

  const types = [
    "Select Help Type",
    "Medical",
    "Education",
    "Food",
    "Job",
    "Clean water",
    "Non of above"
  ]

  return (
    <div className="main ">
      <div className="caretingPost  my-4">
        <div className="Header flex justify-center items-center text-center">
          <div className="logo ">
            <img src="/imgs/logo.png" alt="" className="w-20 md:w-50" />
          </div>
          <div className="heading text-center">
            <h4 className="text-[12px] md:text-2xl font-bold primeTxt">We are here for Your Help <br />Evertthing will be fine
            </h4>
            <h1 className="scondTxt   mt-6  text-4xl md:text-6xl font-bold">HelNurZur <span className="text-[8px] primeTxt -ml-2.5">Hope for everyone</span></h1>
          </div>
        </div>
        <div className="postData flex flex-col items-center p-2  ">
          <form action="#" className="  p-2 md:p-10 shadow-2xl ">
            <h1 className="primeTxt font-black text-2xl md:text-5xl ">Post</h1>
            <div className="info flex flex-col gap-4 py-4 ">
              <div className="conatcts space-x-5 space-y-5 md:space-y-0">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-2xl px-2 py-2"
                />
                <input
                  type="tel"
                  name="tel"
                  id="email"
                  placeholder="Enter your Contact Number"
                  className="border border-gray-300 rounded-2xl px-2 py-2"
                />
              </div>
              <div className="visiblecon">
                <label className='flex gap-2 border border-gray-100 px-4 w-60 rounded-2xl'>
                  <input
                    type="checkbox"
                    name="confirmation"
                    id="confirmation"
                    className="mt-1 w-4 h-4"
                  />
                  <span className="primeTxt font-bold">Contact show on Post</span>
                </label>
              </div>

            </div>
            <div className="HelpType flex flex-col md:flex-row gap-4 ">
              <div className="">

                <select name="helptype" id="helptype" className=" border border-gray-200 rounded-2xl   text-gray-500 px-2 py-2 w-55">
                  {types.map((type, i) => (
                    <option value={type} key={i}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="">
                <textarea name="helpdec" id="helpdec" placeholder="Write about Problem" className="border border-gray-200 rounded-2xl px-2 py-2 w-55 "></textarea>
              </div>
            </div>
            <div className="uplaod flex items-center my-4 gap-2">
              <h6 className="text-sm text-gray-400">Upload Image or Video</h6>
              <input
                type="file"
                accept="image/*,video/*"
                className=" text-md borde text-gray-300 border w-50 p-2 md:p-3 rounded-2xl"
                placeholder="Hello"
              />

            </div>
            <div className="Affrim text-gray-500 py-4 ">
              <label className="flex items-center gap-2 cursor-pointer text-sm ">
                <input
                  type="checkbox"
                  name="confirmation"
                  id="confirmation"
                  className="mt-1 w-4 h-4"
                />
                <span className="mt-2">I confirm that the information I've shared is honest and true.</span>
              </label>
            </div>
            <div className="submitBtn pt-4 flex">
              <button
                type="submit"
                className="w-50 primeBg cursor-pointer hover:scale-105 transition hover:translate-x-1 duration-300 text-white font-bold text-sm md:text-lg rounded-3xl p-3 md:p-4 ml-auto md:ml-0 "
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

}


export default CreatePost;