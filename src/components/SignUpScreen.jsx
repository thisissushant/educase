import {} from "react";
import { Link } from "react-router-dom";

export const SignUpScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center  ">
      <div className="w-96 h-screen  bg-gray-100 border-solid border-2 border-gray-200 flex pt-8 ">
        <div className=" flex flex-col items-start  mb-8 m-4 overflow-hidden relative">
          <h1 className="font-bold text-2xl">
            Sign In into your <br /> PopX Account
          </h1>
          <p className="font-light text-sm mb-6">
            Please enter your email and password
          </p>
          <div className="flex flex-col  ">
            <input
              type="text"
              defaultValue={" Marry Doe"}
              className="grow  md:w-80 my-1 border-solid border-2 border-gray-400 bg-gray-200 rounded-lg h-12"
              placeholder=" Enter email address"
            />
            <input
              type="text"
              defaultValue={" 9676543323"}
              className="grow  md:w-80 my-1 border-solid border-2 border-gray-400 bg-gray-200 rounded-lg h-12"
              placeholder=" Enter email password"
            />
            <input
              type="text"
              defaultValue={" abc@gmail.com"}
              className="grow  md:w-80 my-1 border-solid border-2 border-gray-400 bg-gray-200 rounded-lg h-12"
              placeholder=" Enter email password"
            />
            <input
              type="text"
              defaultValue={" *********"}
              className="grow  md:w-80 my-1 border-solid border-2 border-gray-400 bg-gray-200 rounded-lg h-12"
              placeholder=" Enter email password"
            />
            <input
              type="text"
              defaultValue={" Apple"}
              className="grow  md:w-80 my-1 border-solid border-2 border-gray-400 bg-gray-200 rounded-lg h-12"
              placeholder=" Enter email password"
            />
            <p className="font-light">Are you an Agency?</p>
            <div className="flex ">
              <p className="m-1 font-light">Yess</p>
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary m-1"
                checked
              />
              <p className="m-1 font-light">No</p>
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary m-1"
              />
            </div>
            <Link
              to="/"
              className="btn bg-purple-600 text-white h-5 md:w-80 my-1 flex hover:bg-purple-500 absolute bottom-0"
            >
              Home
            </Link>
            <Link
              to="/profile"
              className="btn bg-purple-600 text-white h-5 md:w-80 my-1 flex hover:bg-purple-500 absolute bottom-12"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
