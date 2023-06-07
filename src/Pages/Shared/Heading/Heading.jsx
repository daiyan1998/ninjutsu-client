import React from "react";

const Heading = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-8">
      <p className="text-red-400 font-semibold text-xl mb-4">{subHeading}</p>
      <p className="text-blue-800 text-5xl font-bold">{heading}</p>
    </div>
  );
};

export default Heading;
