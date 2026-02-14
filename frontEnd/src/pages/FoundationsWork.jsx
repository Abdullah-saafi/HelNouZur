import FoundationPosts from "../data/foundatonsPosts";

const FoundationsWork = () => {

  return (
    <div className="main flex justify-center  ">
      <div className="posts  w-[90%] md:w-[50%] p-4 md:p-10">
        {FoundationPosts.map((user, i) => (
          <div className="post  p-4 md:p-10 border border-gray-300 rounded my-4" key={i} >
            <div className="userInfo flex items-center ">
              <div className="userImg overflow-hidden border border-amber-50 h-10 w-10  md:h-15 md:w-15 rounded-full bg-white flex justify-center items-center text-xl md:text-3xl">
                <img src={user.userimg} alt="" />
              </div>
              <div className="name text-lg md:text-2xl px-3 font-bold primeTxt">
                {user.username}
              </div>

            </div>
            <div className="HelpInfo py-4 flex flex-col">
              <div className="Desc my-5 text-sm md:text-xl">
                {user.desc}
              </div>
              <div className="helpImg">
                <img src={user.postimg} alt="" className="w-full max-h-120" />
              </div>
            </div>
            <div className="react flex gap-4 ">
              <button className="primeBg text-white px-1 py-1 font-bold rounded-full boxShadow cursor-pointer text-[10px] md:text-lg md:px-3 md:py-2">{user.likeBtn}</button>
              <button className="primeBg text-white px-1 py-1  font-bold rounded-full boxShadow cursor-pointer text-[10px] md:text-lg md:px-3 md:py-2">{user.sharebtn} </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



export default FoundationsWork;