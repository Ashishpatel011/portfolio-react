const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#191919] flex justify-center items-center p-6 py-96"
    >
      <form
        method="POST"
        action="https://getform.io/f/pbygmkvb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-center">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Contact
          </p>
        </div>
        <input
          className=" p-2 bg-[#ccd6f6] rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="flex items-center px-4 py-3 mx-auto my-8 text-white border-2 rounded hover:bg-pink-600 hover:border-pink-600">
          Let s Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
