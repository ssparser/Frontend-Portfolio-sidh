const Button = ({ prop, label = "Click me" }) => {
  return (
    <button
      className=" flex flex-row justify-center items-center gap-2 px-7 py-4 border
       leading-none bg-coral-red rounded-full
    border-coral-red text-white"
    >
      {prop && <img src={prop} className="rounded-full w-5 h-5 " />}
      {label}
    </button>
  );
};

export default Button;
