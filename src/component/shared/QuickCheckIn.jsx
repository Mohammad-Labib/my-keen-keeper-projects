'use client';

import React, { useState } from 'react';
import { 
  IoCallOutline, 
  IoChatbubbleEllipsesOutline, 
  IoVideocamOutline, 
  IoCheckmarkCircle 
} from "react-icons/io5";

const QuickCheckIn = ({ friendId, friendName }) => {
  const [toastMessage, setToastMessage] = useState('');

  const handleCheckIn = (type) => {
    try {
      // LocalStorage থেকে সেফলি ডাটা রিড করা
      const rawData = localStorage.getItem('user_timeline');
      const existingTimeline = rawData ? JSON.parse(rawData) : [];
      
      const safeTimeline = Array.isArray(existingTimeline) ? existingTimeline : [];

      const formattedDate = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const newEntry = {
        id: Date.now(),
        friendId: friendId || 'N/A',
        friendName: friendName || "Friend",
        type: type,
        subtitle: formattedDate,
        date: formattedDate
      };

      const updatedTimeline = [newEntry, ...safeTimeline];
      
      // LocalStorage-এ সেভ করা
      localStorage.setItem('user_timeline', JSON.stringify(updatedTimeline));

      // Custom event trigger
      window.dispatchEvent(new Event('timeline_updated'));

      setToastMessage(`${type} logged successfully!`);
      setTimeout(() => setToastMessage(''), 2500);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
      <h3 className="text-lg font-semibold text-green-900 mb-6">Quick Check-In</h3>

      {toastMessage && (
        <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl flex items-center gap-2">
          <IoCheckmarkCircle className="text-lg text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        <button 
          onClick={() => handleCheckIn('Call')}
          className="flex flex-col items-center justify-center gap-2 p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition group cursor-pointer"
        >
          <IoCallOutline className="text-2xl text-gray-700 group-hover:scale-110 transition" />
          <span className="text-sm font-medium text-gray-700">Call</span>
        </button>

        <button 
          onClick={() => handleCheckIn('Message')}
          className="flex flex-col items-center justify-center gap-2 p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition group cursor-pointer"
        >
          <IoChatbubbleEllipsesOutline className="text-2xl text-gray-700 group-hover:scale-110 transition" />
          <span className="text-sm font-medium text-gray-700">Text</span>
        </button>

        <button 
          onClick={() => handleCheckIn('Video')}
          className="flex flex-col items-center justify-center gap-2 p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition group cursor-pointer"
        >
          <IoVideocamOutline className="text-2xl text-gray-700 group-hover:scale-110 transition" />
          <span className="text-sm font-medium text-gray-700">Video</span>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;