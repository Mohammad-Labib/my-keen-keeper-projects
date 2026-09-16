import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ThisdataCart = async ({ friendCards }) => {
  let cards = friendCards;

  if (!cards || cards.length === 0) {
    try {
      const res = await fetch(
        'https://my-keen-keeper-projects.vercel.app/friendData.json',
        { cache: 'no-store' }
      );

      // রেসপন্স ঠিক আছে কিনা (status 200-299) চেক করুন
      if (!res.ok) {
        throw new Error(`Fetch failed with status: ${res.status}`);
      }

      cards = await res.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      cards = [];
    }
  }

  // সর্বোচ্চ ১০টি কার্ড দেখানোর জন্য
  const displayedCards = Array.isArray(cards) ? cards.slice(0, 10) : [];

  return (
    <section className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 w-fit">
        Your Friends: {displayedCards.length}
      </h1>

      {displayedCards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedCards.map((friend, index) => (
            <div 
              key={friend.id || index} 
              className="bg-white rounded-3xl border border-gray-100 p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-gray-50 flex-shrink-0">
                <Image
                  src={friend.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                  alt={friend.name || "Friend"}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority={index < 4}
                />
              </div>

              {/* Name */}
              <h2 className="text-2xl font-semibold text-gray-950 mb-1 line-clamp-1">
                {friend.name || "Sarah Ahmed"}
              </h2>
              
              {/* Time */}
              <p className="text-gray-400 text-sm font-normal mb-5">
                {friend.daysAgo || friend.preferredContact || "10d ago"}
              </p>
              
              {/* Tag */}
              <div className="flex gap-2 items-center mb-6">
                <span className="px-5 py-1.5 bg-[#D2F9E0] text-[#1D9460] text-xs font-semibold rounded-full uppercase tracking-wide">
                  {friend.tag || friend.type || "personal"}
                </span>
              </div>

              {/* Button */}
              <Link href={`/dataStor/${friend.id}`} className="w-full">
                <button className="w-full px-8 py-3.5 bg-[#FF2D3F] text-white text-base font-bold rounded-full hover:bg-[#e02636] transition-colors duration-200 shadow-[0_6px_18px_rgb(255,45,63,0.3)]">
                  {friend.status || "On-Track"}
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-100">
          <p className="text-xl text-gray-400 font-medium">
            No friend data found in your list.
          </p>
        </div>
      )}
    </section>
  );
};

export default ThisdataCart;