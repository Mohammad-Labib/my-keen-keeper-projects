import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
       <section className='container mx-auto mt-10'>
         <div className="hero ">
  <div className="hero-content text-center">
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6 text-gray-500">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
      </p>
      <button className="btn bg-green-900 text-white "> <FaPlus /> Add a Friend</button>
    </div>
  </div>
</div>
       </section>
    );
};

export default Banner;