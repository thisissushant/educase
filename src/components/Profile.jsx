import {} from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="w-screen h-screen flex justify-center  ">
      <div className="w-96 h-screen  bg-gray-100 border-solid border-2 border-gray-200 flex flex-col">
        <div className="bg-white w-full h-14 flex">
          <h1 className="mt-5 m-2">Account Settings</h1>
        </div>
        <div className=" w-full h-60 border-dotted border-b-2 border-gray-400">
          <div className="avatar mt-6 ml-2">
            <div className="w-16 h-16 rounded-full ">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <div className="ml-4">
              <h1>Marry Doe</h1>
              <p className="font-light text-sm">Maary@gmail.com</p>
            </div>
          </div>
          <h1 className="font-light m-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            voluptates fuga natus, odio deserunt adipisci in et vel fugiat.
          </h1>
        </div>
        <Link
          to="/"
          className="btn bg-purple-600 text-white h-5 md:w-80 my-1 flex hover:bg-purple-500 ml-4"
        >
          Home
        </Link>
      </div>
    </div>
  );
};
