import { useForm } from "react-hook-form";
import logo from "../../assets/shuriken.png";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../Providers/AuthProvider";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useFetchLink from "../../utils/useFetchLink";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateInformation } = useContext(AuthContext);
  const url = useFetchLink();
  const navigate = useNavigate();
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
      .then(() => {
        updateInformation(name, photoURL).then(() => {
          const savedUser = { email: email, name: name };
          fetch(`${url}/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img className="h-28" src={logo} alt="" />
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-5">
          {/* NAME: Form */}

          <Card
            className="flex justify-center items-center"
            color="transparent"
            shadow={false}
          >
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to register.
            </Typography>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-4 flex flex-col gap-3">
                <Input size="lg" label="Name" {...register("name")} />
                <Input
                  size="lg"
                  label="Email"
                  {...register("email", { required: true })}
                />
                <p className="text-xs text-red-400">
                  {errors.email && "Please enter your email address"}
                </p>
                <Input size="lg" label="Photo URL" {...register("photoURL")} />
                <Input
                  type="password"
                  size="lg"
                  label="Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Please enter your password",
                    },
                    minLength: {
                      value: 6,
                      message: "Password should be at least 6 characters long.",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                      message:
                        "Password should contain at least one capital letter and one special character.",
                    },
                  })}
                />
                <p className="text-xs text-red-400">
                  {errors.password?.message}
                </p>
                <Input
                  type="password"
                  size="lg"
                  label="Confirm Password"
                  {...register("confirmPass")}
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-blue-500"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button type="submit" className="mt-6" fullWidth>
                Register
              </Button>
              <SocialLogin></SocialLogin>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign In
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
