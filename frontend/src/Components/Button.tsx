interface input {
  label: string;
  className?: string;
}

const Button = ({ label , onClick, className }: input) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`relative rounded-md bg-gradient-to-r from-sky-100 via-blue-400 to-blue-900 cursor-pointer hover:shadow-lg  p-[1px] transition duration-200 ease-in-out ${className}`}
      >
        <div className="relative px-2 py-2 rounded-md bg-gray-900 h-full w-full flex justify-center items-center hover:bg-gray-700">
          {label}
        </div>
      </button>
    </>
  );
};

export default Button