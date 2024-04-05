import {} from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center  ">
      <div className="w-96 h-screen  bg-gray-100 border-solid border-2 border-gray-200 flex pt-8 ">
        <div className=" flex flex-col items-start  mb-8 m-4 overflow-hidden ">
          <h1 className="font-bold text-2xl">
            Sign In into your <br /> PopX Account
          </h1>
          <p className="font-light text-sm mb-6">
            Please enter your email and password
          </p>
          <div className="flex flex-col  ">
            <input
              type="text"
              defaultValue={" sushant@gmail.com"}
              className="grow  md:w-80 my-1 border-solid border-2 border-gray-400 bg-gray-200 rounded-lg h-12"
              placeholder=" Enter email address"
            />
            <input
              type="text"
              defaultValue={" password123"}
              className="grow  md:w-80 my-1 border-solid border-2 border-gray-400 bg-gray-200 rounded-lg h-12"
              placeholder=" Enter email password"
            />
            <Link
              to="/profile"
              className="btn bg-gray-400 text-white h-5 md:w-80 my-1 flex hover:bg-gray-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
