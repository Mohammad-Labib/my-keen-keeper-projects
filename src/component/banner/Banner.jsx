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


<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">

    <div className="flex flex-col items-center justify-center w-60 h-30 p-4 bg-white shadow rounded-lg">
        <h1 className="text-3xl font-bold ">10</h1>
        <p className="text-gray-600">Total Friends</p>
    </div>

    <div className="flex flex-col items-center justify-center w-60 h-30 p-4 bg-white shadow rounded-lg">
        <h1 className="text-3xl font-bold ">3</h1>
        <p className="text-gray-600">On Track</p>
    </div>

    <div className="flex flex-col items-center justify-center w-60 h-30 p-4 bg-white shadow rounded-lg">
        <h1 className="text-3xl font-bold ">6</h1>
        <p className="text-gray-600">Need Attention</p>
    </div> 

    <div className="flex flex-col items-center justify-center w-60 h-30 p-4 bg-white shadow rounded-lg">
        <h1 className="text-3xl font-bold ">12</h1>
        <p className="text-gray-600">Interactions This Month</p>
    </div>

   

</div>
       </section>
    );
};

export default Banner;