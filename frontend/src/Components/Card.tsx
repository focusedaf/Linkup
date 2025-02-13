interface input {
  label: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
// for now i'm targetting div later i'll add buttons in the card
const Card = ({label,className,onClick}:input) => {
  return (
    <div
      onClick={onClick}
      className={`mt-10 mx-auto max-w-md overflow-hidden rounded-xl shadow-md md:max-w-2xl cursor-pointer p-[1.5px] bg-gradient-to-r from-sky-300 via-blue-800 to-blue-900 ${className}`}
    >
      <div className=" w-full h-full rounded-xl px-100 py-60 pr-2 bg-[radial-gradient(350px_circle_at_top,_var(--tw-gradient-stops))] from-gradient via-mid to-background">
        {label}
      </div>
    </div>
  );
};

export default Card;
