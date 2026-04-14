import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaYoutube } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
    return (
<>
    <footer className="footer footer-horizontal footer-center bg-green-950 text-primary-content p-10 ">
  <div>
    <div>
        <h1 className='text-5xl font-bold'>KeenKeeper</h1>
    </div>
    <p className="text-gray-400">
     Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
   
  </div>
  <div>
     <p className='text-xl font-semibold'>Social Links</p>
    <div className="grid grid-flow-col gap-4">
    
    <IoLogoTwitter className="h-8 w-8" />
    <FaYoutube className="h-8 w-8" />
    <CiInstagram className="h-8 w-8" />

</div>
  </div>
</footer>
<div className='flex justify-around bg-green-950 text-white mb-6 p-6'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>

    <div className='flex gap-6'>              
        <h1> Privacy Policy </h1>
        <h1> Terms of Service </h1>
        <h1> Cookies</h1>
    </div>
  </div>
</>

    );
};

export default Footer;