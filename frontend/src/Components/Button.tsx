

const Button = () => {
  return (
    <>
      <button className="h-10 w-32 rounded-md bg-gradient-to-r from-sky-100 via-blue-400 to-blue-900 cursor-pointer hover:shadow-lg  text-white p-[1.5px] transition duration-200 ease-in-out">
        <div className="rounded-md bg-gray-900 h-full w-full flex justify-center items-center hover:bg-gray-600">
          Click Me
        </div>
      </button>
    </>
  );
}

export default Button