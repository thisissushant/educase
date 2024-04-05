import {} from "react";
import { Link } from "react-router-dom";

export const LandingScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center  ">
      <div className="w-96 h-screen relative bg-gray-100 border-solid border-2 border-gray-200 flex ">
        <div className=" flex flex-col items-start absolute bottom-0 mb-8 m-4 overflow-hidden ">
          <h1 className="font-bold text-2xl">Welcome to PopX</h1>
          <p className="font-light text-sm mb-6">
            Please follow the instruction below
          </p>
          <div className="flex flex-col  ">
            <Link
              to="/signup"
              className="btn bg-purple-600 text-white h-5 md:w-80 my-1 flex hover:bg-purple-500"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="btn  bg-purple-200 text-black h-5 md:w-80 my-1 flex hover:bg-purple-100"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
