import { useForm } from "react-hook-form";
import logo from "../../assets/shuriken.png";
import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateInformation } = useContext(AuthContext);
  // NAME: React Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data:", data);
    const { email, name, photoURL, password } = data;
    createUser(email, password)
      .then((resutl) => {
        updateInformation(name, photoURL);
      })
      .catch((error) => console.log("Login Falied"));
  };
  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img className="h-28" src={logo} alt="" />
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-5">
          {/* NAME: Form */}

          <form onSubmit={handleSubmit(onSubmit)} action="">
            <h3 className="font-semibold text-4xl mb-7">Registration</h3>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Name
              </lable>
              <input
                {...register("name")}
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 mb-4"
              />
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Email
              </lable>
              <input
                {...register("email")}
                role="input"
                type="email"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 mb-4"
              />
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Photo URL
              </lable>
              <input
                {...register("photoURL")}
                role="input"
                type="url"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 mb-4"
              />
            </div>
            <div className=" w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">
                Password
              </lable>
              <div className="relative flex items-center justify-center">
                <input
                  {...register("password", { min: 6 })}
                  role="input"
                  type="password"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 mb-4"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
              </div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Confirm Password
              </lable>
              <div className="relative flex items-center justify-center">
                <input
                  {...register("ConfirmPassword")}
                  role="input"
                  type="password"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
              </div>
            </div>
            <div className="mt-8">
              <Button
                role="button"
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-tebg-teal-600 text-sm font-semibold leading-none text-white focus:outline-none border rounded hover py-4 w-full"
              >
                SignUp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
