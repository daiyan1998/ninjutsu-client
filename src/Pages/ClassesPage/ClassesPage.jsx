import ClassCard from "../../Components/ClassCard";
import useGetData from "../../Hooks/useGetData";

const ClassesPage = () => {
  const [data] = useGetData("instructorClass", "instructorClass");
  const classes = data;
  console.log({ classes });
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING STRENGTH
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Our Classes
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          {/* <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"> */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {classes.map((class_) => (
              <ClassCard key={class_._id} class_={class_}></ClassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
