import { data } from "../data/data.js";

import PropTypes from "prop-types";

const ProjectItem = ({ item }) => {
  const { image, name, github, live } = item;

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay color
    opacity: 1, // Initially visible
    transition: "opacity 0.3s ease", // Transition effect
  };

  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "300px",
    height: "200px",
    position: "relative", // Set container to relative for overlay positioning
  };

  return (
    <div className="relative">
      <div
        style={containerStyle}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
      >
        {/* Overlay for tint effect */}
        <div style={overlayStyle}></div>

        <div className="relative z-10 opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold tracking-wider text-white">
            {name}
          </span>
          <div className="pt-8 text-center">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                  Code
                </button>
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                  Live
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Work = () => {
  const projects = data;

  return (
    <div
      id="work"
      name="work"
      className="flex flex-col w-full lg:h-screen text-gray-300 bg-[#191919] pt-20" // Added pt-20
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Work
          </p>
        </div>

        <div className="grid gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:md:grid-cols-3">
          {projects.map((item, index) => (
            <ProjectItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

