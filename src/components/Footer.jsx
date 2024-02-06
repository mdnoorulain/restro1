import React from "react";
import{ FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {

  const SOCIAL =[
    {
        id :1,
        link: "https://www.facebook.com",
        icon : <FaFacebook />,
    },
    {
        id :2,
        link: "https://www.instagram.com",
        icon : <FaInstagram />,
    },
    {
        id :3,
        link: "https://linkedin.com",
        icon : <FaLinkedin />,
    },
    
];

  return (
    <div className=" bg-white  text-gray-800 rounded-t-3xl  mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-center gap-12 p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">FoodieWeb</h1>
          <p className=" text-sm">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        
       
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 ">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              FoodieWeb@email.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +64 958 248 966
            </a>
            <div className='flex justify-between py-2 lg:py-2 text-3xl '>
            {SOCIAL.map(({ id,link, icon}) => (
                <a href={link} key={id}
                target='_blank'
                rel='noopener noreferrer'
                className=' cursor-pointer duration-300 md:px-2 hover:text-rose-600 '
                >
                    {icon}
                </a>
            ))}
            </div>
            
          </nav>
          
        </div>
        
      </div>
      
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor">
              {" "}
              <a
                href="https://github.com/mdnoorulain"
                className="  text-gray-800 pl-1 cursor-pointer hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Noorul Ain
              </a>
            </span>{" "}
            | All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
