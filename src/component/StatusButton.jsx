'use client';

import React from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

const StatusButton = ({ friendId, status, friendName }) => {
  const handleClick = () => {
    toast.success(`${friendName || 'Friend'}-এর বিস্তারিত তথ্য দেখা হচ্ছে!`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <Link href={`/dataStor/${friendId}`} className="w-full">
      <button 
        onClick={handleClick}
        className="w-full px-8 py-3.5 bg-[#FF2D3F] text-white text-base font-bold rounded-full hover:bg-[#e02636] transition-colors duration-200 shadow-[0_6px_18px_rgb(255,45,63,0.3)]"
      >
        {status || "On-Track"}
      </button>
    </Link>
  );
};

export default StatusButton;