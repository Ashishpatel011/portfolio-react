import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import Tailwind from "../assets/tailwind.png";
import Express from "../assets/express.png";
import Cpp from "../assets/c++.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full lg:min-h-screen bg-[#191919] text-gray-300 py-20 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="inline text-4xl font-bold border-b-4 border-pink-600">
            Skills
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML icon" />
            <p className="my-4">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/css3.png" alt="HTML icon" />
            <p className="my-4">CSS3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/git.png" alt="HTML icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Express} alt="HTML icon" />
            <p className="my-4">EXPRESS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Cpp} alt="HTML icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="https://img.icons8.com/color/48/000000/php" alt="HTML icon" />
            <p className="my-4">Php</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
