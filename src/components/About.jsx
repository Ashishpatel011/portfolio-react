const About = () => {
  return (
    <div name="about" className="w-full lg:h-screen bg-[#191919] text-gray-300 px-7 py-36 ">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          <div className="text-center sm:text-right">
            <p className="inline text-4xl font-bold border-b-4 border-pink-600">
              About
            </p>
          </div>
          <br />
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>
              Hi, I am Ashish, glad you came here. Please take a look around.
            </p>
          </div>
          <div className="mt-3">
            <p>
              A Motivated web Developer ( javascript, React, Node.js,
              MongoDB,Express.js ) with key intreast of frontend devlopment seeking opportunities to apply skills and collaborate on
              impactful projects. Eager learner thriving in dynamic environments
              and tackling challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
