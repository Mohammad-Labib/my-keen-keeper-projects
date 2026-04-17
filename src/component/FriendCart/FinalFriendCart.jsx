import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FinalFriendCart = ({friendCards}) => {
    const {id, name, image, time, type, status} = friendCards;
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10 flex justify-center">
    
    <div className="w-[120px] h-[120px] rounded-full overflow-hidden ">
        
        <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="object-cover w-full h-full"
        />

    </div>

</figure>
  <div className="card-body items-center text-center">
    <h2 className="text-2xl font-semibold">{name}</h2>
    <p className='text-gray-400 text-xl'>{time}</p>
    <div className=' rounded-2xl w-20 h-6 text-center bg-green-200'>
        <h1 >{type}</h1>
    </div>
    <Link href={`/dataStor/${id}`}>
        <div className="card-actions">
        <button className="w-30 h-10 text-xl text-center  bg-red-500 text-white rounded-full">{status}</button>
        </div>
    </Link>
  </div>
</div>
    );
};

export default FinalFriendCart;