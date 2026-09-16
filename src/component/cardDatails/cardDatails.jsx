import React from 'react';
import Image from 'next/image';
import { MdDeleteForever, MdOutlineNotificationsActive, MdOutlineArchive } from 'react-icons/md';
import QuickCheckIn from '../shared/QuickCheckIn'; 

const CardDatails = async ({ params }) => {
  const { dataStorId } = await params;

  let singleData = null;

  try {
    const res = await fetch(
      'https://my-keen-keeper-projects.vercel.app/friendData.json',
      { cache: 'no-store' }
    );
    if (res.ok) {
      const data = await res.json();
      singleData = data.find((item) => String(item.id) === String(dataStorId));
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!singleData) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-xl font-semibold text-gray-500">Data not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex items-center justify-center p-4 md:p-10 font-sans min-h-screen">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Column */}
        <div className="md:col-span-4 space-y-4">
          <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-8 text-center">
            {singleData.image && (
              <div className="flex justify-center mb-4">
                <Image
                  src={singleData.image}
                  alt={singleData.name || "User Image"}
                  width={100}
                  height={100}
                  className="rounded-full object-cover border-2 border-gray-50 shadow-sm"
                />
              </div>
            )}
            <h1 className="text-xl font-bold text-gray-800">{singleData.name}</h1>
            
            <div className="flex flex-col items-center gap-2 mt-3">
              <span className={`px-4 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                singleData.status === "Overdue" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
              }`}>
                {singleData.status || "UNKNOWN"}
              </span>
              <span className="px-4 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider border border-green-100">
                {singleData.type || "FAMILY"}
              </span>
            </div>

            <p className="text-[11px] text-gray-400 mt-6 font-medium">Preferred: email</p>
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

        {/* Right Column */}
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

          {/* Quick Check-In Component */}
          <QuickCheckIn 
            friendId={singleData.id} 
            friendName={singleData.name} 
          />

        </div>
      </div>
    </div>
  );
};

export default CardDatails;