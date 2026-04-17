import React from 'react';
import Image from 'next/image';
import { MdDeleteForever, MdOutlineNotificationsActive, MdOutlineArchive } from 'react-icons/md';
import { IoCallOutline, IoChatbubbleEllipsesOutline, IoVideocamOutline } from "react-icons/io5";

const CardDatails = async ({ params }) => {
  const { dataStorId } = await params;

  const res = await fetch(
    'https://my-keen-keeper-projects.vercel.app/friendData.json'
  );

  const data = await res.json();

  const singleData = data.find(
    (item) => item.id.toString() === dataStorId
  );

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4 md:p-10 font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        
       
        <div className="md:col-span-4 space-y-4">
         
          <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-8 text-center">
            {singleData?.image && (
              <div className="flex justify-center mb-4">
                <Image
                  src={singleData.image}
                  alt={singleData.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover border-2 border-gray-50 shadow-sm"
                />
              </div>
            )}
            <h1 className="text-xl font-bold text-gray-800">{singleData?.name}</h1>
            
            <div className="flex flex-col items-center gap-2 mt-3">
              <span className={`px-4 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                singleData?.status === "Overdue" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
              }`}>
                {singleData?.status}
              </span>
              <span className="px-4 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider border border-green-100">
                {singleData?.type || "FAMILY"}
              </span>
            </div>

            <p className="mt-6 text-gray-500 italic text-sm">
          
            </p>
            <p className="text-[11px] text-gray-400 mt-2 font-medium">Preferred: email</p>
          </div>

       
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition shadow-sm">
              <MdOutlineNotificationsActive size={20} /> Snooze 2 Weeks
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition shadow-sm">
              <MdOutlineArchive size={20} /> Archive
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-red-500 font-medium hover:bg-red-50 transition shadow-sm">
              <MdDeleteForever size={20} /> Delete
            </button>
          </div>
        </div>

    
        <div className="md:col-span-8 space-y-4">
          
      
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <div className="text-3xl font-bold text-gray-800">62</div>
              <div className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-tight">Days Since Contact</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-800">30</div>
              <div className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-tight">Goal (Days)</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <div className="text-xl font-bold text-gray-800 leading-tight">Feb 27, 2026</div>
              <div className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-tight">Next Due</div>
            </div>
          </div>

  
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-green-900">Relationship Goal</h3>
              <button className="px-4 py-1 border border-gray-200 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50">Edit</button>
            </div>
            <p className="text-gray-600 text-sm">
              Connect every <span className="font-bold text-gray-900">30 days</span>
            </p>
          </div>

         
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-green-900 mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition group">
                <IoCallOutline className="text-2xl text-gray-700 group-hover:scale-110 transition" />
                <span className="text-sm font-medium text-gray-700 font-sans">Call</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition group">
                <IoChatbubbleEllipsesOutline className="text-2xl text-gray-700 group-hover:scale-110 transition" />
                <span className="text-sm font-medium text-gray-700 font-sans">Text</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition group">
                <IoVideocamOutline className="text-2xl text-gray-700 group-hover:scale-110 transition" />
                <span className="text-sm font-medium text-gray-700 font-sans">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardDatails;