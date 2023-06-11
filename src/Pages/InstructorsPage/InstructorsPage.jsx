import useData from "../../Hooks/useData";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const InstructorsPage = () => {
  const [instructors] = useData();
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented Instructors
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {instructors.map(
              ({ _id, image, instructorName, instructorEmail, position }) => (
                <div
                  key={_id}
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src={image}
                          alt
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        {instructorName}
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        {position || "Instructor"}
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        {instructorEmail}
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <AiFillGithub className="text-2xl"></AiFillGithub>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <AiOutlineTwitter className="text-2xl"></AiOutlineTwitter>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <AiFillInstagram className="text-2xl"></AiFillInstagram>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;
