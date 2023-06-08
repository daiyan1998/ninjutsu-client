import { useContext } from "react";
import logo from "../../assets/shuriken.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import {} from "react-icons/fc";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
const SignIn = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  // NAME: React Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img className="h-28" src={logo} alt="" />
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-5">
          <Card
            color=""
            className="flex items-center justify-center"
            shadow={false}
          >
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb- bg-gray-100 p-5 rounded w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  label="Email"
                  {...register("email", { required: true })}
                />
                <Input
                  type="password"
                  size="lg"
                  label="Password"
                  {...register("password", { required: true })}
                />
              </div>
              <Button className="mt-6" fullWidth>
                Login
              </Button>
              <Button
                onClick={googleSignIn}
                className="flex mt-2 justify-center items-center gap-3"
                variant="outlined"
                fullWidth
              >
                <FcGoogle className="text-xl"></FcGoogle>
                Continue with Google
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Don&apos;t have an account?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign Up
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
