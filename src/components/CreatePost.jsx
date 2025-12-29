import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UseFormData } from "./FormDataContest";
import { useState } from "react";

const CreatePost = () => {
  const [form, setForm] = useState(true);
  const { setFormData } = UseFormData();
  const [afterPost, setafterPost] = useState(false);
  const { formData } = UseFormData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const types = [
    "Medical",
    "Education",
    "Food",
    "Job",
    "Clean water",
    "Non of above",
  ];

  const onSubmit = (data) => {
    setFormData(data);
    reset();
    console.log("Post Created");
    setForm(false);
    setafterPost(true);
  };

  return (
    <div className="main ">
      <div className="caretingPost  my-4">
        <div className="Header flex justify-center items-center text-center">
          <div className="logo ">
            <img src="/imgs/logo.png" alt="" className="w-20 md:w-50" />
          </div>
          <div className="heading text-center">
            <h4 className="text-[12px] md:text-2xl font-bold primeTxt">
              We are here for Your Help <br />
              Evertthing will be fine
            </h4>
            <h1 className="scondTxt   mt-6  text-4xl md:text-6xl font-bold">
              HelNurZur{" "}
              <span className="text-[8px] primeTxt -ml-2.5">
                Hope for everyone
              </span>
            </h1>
          </div>
        </div>
        <div className="postData flex flex-col items-center p-2  ">
          {form && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="  p-2 md:p-10 shadow-2xl "
            >
              <h1 className="primeTxt font-black text-2xl md:text-5xl ">
                Post
              </h1>
              <div className="info flex flex-col gap-4 py-4 ">
                <div className="conatcts space-x-5 space-y-5 md:space-y-0 flex ">
                  <div className="Email ">
                    <input
                      type="email"
                      {...register("Email", {
                        required: "'Email is Required'",
                      })}
                      defaultValue={formData.Email}
                      placeholder="Email"
                      className={`loginInput`}
                    />
                    {errors.Email && (
                      <p className="text-red-500 my-2 text-sm">
                        {errors.Email.message}
                      </p>
                    )}
                  </div>
                  <div className="contact">
                    <input
                      type="tel"
                      {...register("Contact", {
                        required: "'Contact is Required'",
                      })}
                      defaultValue={formData.Contact}
                      placeholder="Contact"
                      className={`loginInput`}
                    />
                    {errors.Contact && (
                      <p className="text-red-500 my-2 text-sm">
                        {errors.Contact.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="visiblecon">
                  <label className="flex gap-2 border border-gray-100 px-4 w-60 rounded-2xl">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4"
                      {...register("Confirmation", {})}
                    />
                    <span className="primeTxt font-bold">
                      Contact show on Post
                    </span>
                  </label>
                </div>
              </div>
              <div className="HelpType flex flex-col md:flex-row gap-4 ">
                <div className="">
                  <select
                    {...register("HelpType", {
                      required: "Select AnyOne help type",
                    })}
                    className=" border border-gray-200 rounded-2xl   text-gray-500 px-2 py-2 w-55"
                  >
                    <option value="" disabled selected>
                      Select Help Type
                    </option>
                    {types.map((type, i) => (
                      <option value={type} key={i}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.HelpType && (
                    <p className="text-red-500 my-2 text-sm">
                      {errors.HelpType.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <textarea
                    {...register("Description", {
                      required: "Write about your Need",
                      minLength: {
                        value: 10,
                        message: "'Write atleast 10 words  '",
                      },
                    })}
                    placeholder="Write about Problem"
                    className="border border-gray-200 rounded-2xl px-2 py-2 w-55 "
                  ></textarea>
                  {errors.Description && (
                    <p className="text-red-500 my-2 text-sm">
                      {errors.Description.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="uplaod flex items-center my-4 gap-2">
                <h6 className="text-sm text-gray-400">Upload Image or Video</h6>
                <input
                  type="file"
                  accept="image/*,video/*"
                  {...register("FileUpload", {
                    required: "Uplaod Atleast one Img or Video",
                  })}
                  className=" text-md borde text-gray-300 border w-50 p-2 md:p-3 rounded-2xl"
                />{" "}
                {errors.FileUpload && (
                  <p className="text-red-500 my-2 text-sm">
                    {errors.FileUpload.message}
                  </p>
                )}
              </div>
              <div className="Affrim text-gray-500 py-4 ">
                <label className="flex items-center gap-2 cursor-pointer text-sm ">
                  <input
                    type="checkbox"
                    {...register("Policy", {
                      required: "'Must agree wit Term and Policies'",
                    })}
                    className="mt-1 w-4 h-4"
                  />
                  <span className="mt-2">
                    I confirm that the information I've shared is honest and
                    true.
                  </span>
                </label>
                {errors.Policy && (
                  <p className="text-red-500 my-2 text-sm">
                    {errors.Policy.message}
                  </p>
                )}
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
          )}

          {afterPost && (
            <div className="  p-2 md:p-10 shadow-2xl ">
              <h1 className="primeTxt font-black text-2xl md:text-5xl ">
                Your request Has Been Posted
              </h1>
              <div className="submitBtn pt-4 flex justify-center">
                <NavLink to={"/"}>
                  <button className="w-50 primeBg cursor-pointer hover:scale-105 transition hover:translate-x-1 duration-300 text-white font-bold text-sm md:text-lg rounded-3xl p-3 md:p-4 ml-auto md:ml-0 ">
                    Back To Home
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
