import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useScroll, motion } from "framer-motion";

const Main = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 z-10 bg-blue-500"
        style={{ scaleX: scrollYProgress }}
      />
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
