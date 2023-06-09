import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useFetchLink from "../../../utils/useFetchLink";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const url = useFetchLink();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignin = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      navigate(from, { replate: true });
      fetch(`${url}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  };
  return (
    <>
      <Button
        onClick={handleGoogleSignin}
        className="flex mt-2 justify-center items-center gap-3"
        variant="outlined"
        fullWidth
      >
        <FcGoogle className="text-xl"></FcGoogle>
        Continue with Google
      </Button>
    </>
  );
};

export default SocialLogin;
