import { HiArrowNarrowRight } from "react-icons/hi";
import { debounce } from "lodash";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin,FaCode } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Frontend Developer",
        "React Enthusiast",
        "Web Devloper",
        "Web Designer",
        "Problem Solver",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    // Cleanup on component unmount
    return () => typed.destroy();
  }, []);

  const scrollToWork = debounce(() => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 30);

  const handleScrollToWork = (e) => {
    e.preventDefault();
    scrollToWork();
  };

  return (
    <div name="home" className="w-full lg:h-screen bg-[#191919] py-36">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ashish Patel
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#a5b088]">
          I’m a 
          <span className="ml-2"  ref={typedRef}></span>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          4rd year IOT student with strong foundation in frontend, backend, and
          programming languages (C++, Python). Exploring Docker and passionate
          about innovation. Well-organized, positive problem-solver with a
          results-oriented mindset. I am currently looking for collaborating in
          web development projects.
        </p>
        <div className="left-0 py-5 lg:hidden">
        <ul className="flex flex-row gap-4">
          <li className="bg-blue-600 rounded ">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://www.linkedin.com/in/ashish-patel-a31395233/" target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="bg-[#333333] rounded">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/Ashishpatel011"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="bg-[#6fc2b0] rounded">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://www.naukri.com/code360/profile/anshuu"
              target="_blank"
            >
              <FaCode size={30} />
            </a>
          </li>
          <li className=" bg-[#565f69] rounded">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://drive.google.com/file/d/1319_bv787jOW2wC3nZRhgVBPAhF6UpVf/view?usp=drive_link"
              target="_blank"
            >
            <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          
        </ul>
      </div>
        <div className="flex items-center">
          <a
            href="#work"
            className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600"
            onClick={handleScrollToWork}
          >
            View Work
            <span className="group-hover:rotate-90 duration-3000">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
