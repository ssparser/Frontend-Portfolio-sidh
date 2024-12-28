
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { LiaCopyrightSolid } from "react-icons/lia";



const Footer = () => {
  return (
    <footer className='max-container h-2'>
      <div className='flex flex-col justify-between gap-2 flex-wrap max-lg:flex-col bg-violet-300 items-center px-5 py-5'>
            <img src="images/logo.png " className="w-10"></img>
            <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <LiaCopyrightSolid/>
          <p>Copyright. All rights reserved.</p>
        </div>
            <span className="flex flex-row gap-2"><CiInstagram /><CiYoutube /> <FaXTwitter /> <FaTwitch />


            </span>
        </div>
    </footer>
  );
};

export default Footer;