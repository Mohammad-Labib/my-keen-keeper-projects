import React from 'react';

const ThisdataCart = ({friendCards}) => {
    return (
        
<>
<section className='container mx-auto'>
    <h1 className='text-2xl font-bold'>Your Friends:</h1>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" /> */}
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">No Data</button>
    </div>
  </div>
</div>
</section>
</>
    );
};

export default ThisdataCart;