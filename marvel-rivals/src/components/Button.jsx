import { IoIosSend } from "react-icons/io";

const Button = () => {
  const openYouTube = () => {
    const youtubeLink = "https://youtu.be/FFWzIbkXxBU?si=1KMzD0UlhcV5AGVT";

    window.open(youtubeLink, "_blank");
  };

  return (
    <button
      className="flex flex-row justify-center items-center z-40 rounded-full bg-red-coral-red  font-circular-web gap-2 px-7 py-3 w-fit mt-3 cursor-pointer overflow-hidden uppercase text-xs"
      onClick={openYouTube}
    >
      <IoIosSend className="inline-block" /> watch trailer
    </button>
  );
};

export default Button;
