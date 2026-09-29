'use client';

import React, { useEffect, useState } from 'react';
import { 
  IoCallOutline, 
  IoChatbubbleEllipsesOutline, 
  IoVideocamOutline, 
  IoTrashOutline,
  IoSearchOutline
} from "react-icons/io5";

export default function TimelinePage() {
  const [timelineList, setTimelineList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const loadData = () => {
    if (typeof window !== 'undefined') {
      const rawData = localStorage.getItem('user_timeline');
      if (rawData) {
        try {
          setTimelineList(JSON.parse(rawData));
        } catch (e) {
          console.error("Failed to parse timeline data", e);
        }
      }
    }
  };

  useEffect(() => {
    setIsMounted(true);
    loadData();

    window.addEventListener('timeline_updated', loadData);
    window.addEventListener('storage', loadData);

    return () => {
      window.removeEventListener('timeline_updated', loadData);
      window.removeEventListener('storage', loadData);
    };
  }, []);

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all history?")) {
      localStorage.removeItem('user_timeline');
      setTimelineList([]);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'Call':
        return <IoCallOutline className="text-emerald-600 text-xl" />;
      case 'Message':
      case 'Text':
        return <IoChatbubbleEllipsesOutline className="text-blue-600 text-xl" />;
      case 'Video':
        return <IoVideocamOutline className="text-purple-600 text-xl" />;
      default:
        return <IoCallOutline className="text-gray-600 text-xl" />;
    }
  };

  // Filter and Search Logic
  const filteredTimeline = timelineList.filter((item) => {
    const matchesType = filterType === 'All' || item.type?.toLowerCase() === filterType.toLowerCase() || (filterType === 'Message' && item.type === 'Text');
    const matchesSearch = item.friendName?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Activity Timeline</h1>
            <p className="text-sm text-gray-500 mt-1">Quick Check-In History</p>
          </div>

          {timelineList.length > 0 && (
            <button 
              onClick={handleClearAll}
              className="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-lg transition cursor-pointer"
            >
              <IoTrashOutline size={14} /> Clear History
            </button>
          )}
        </div>

        {/* Filter and Search Box */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          
          {/* Type Filter Buttons */}
          <div className="flex bg-gray-100 p-1 rounded-xl w-full sm:w-auto">
            {['All', 'Call', 'Video', 'Message'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                  filterType === type 
                    ? 'bg-white text-emerald-700 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

        </div>

        {/* Timeline Items Display */}
        {filteredTimeline.length > 0 ? (
          <div className="space-y-4">
            {filteredTimeline.map((item, index) => (
              <div 
                key={item.id || index} 
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">
                      {item.type} with <span className="text-emerald-700 font-bold">{item.friendName}</span>
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">Quick Check-in logged</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full inline-block">
                    {item.subtitle || item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
            <p className="text-gray-400 font-medium">- No Data Found -</p>
            <p className="text-xs text-gray-400 mt-1">Try selecting a different filter or search keyword.</p>
          </div>
        )}

      </div>
    </div>
  );
}