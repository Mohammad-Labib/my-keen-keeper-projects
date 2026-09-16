'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ActivityStatusChart = () => {
  const [timelineList, setTimelineList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  const loadData = () => {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(localStorage.getItem('user_timeline')) || [];
      setTimelineList(data);
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

  // Calculate counts dynamically from timeline data
  const chartData = useMemo(() => {
    let calls = 0;
    let messages = 0;
    let videos = 0;

    timelineList.forEach((item) => {
      if (item.type === 'Call') calls++;
      else if (item.type === 'Message' || item.type === 'Text') messages++;
      else if (item.type === 'Video') videos++;
    });

    return [
      { name: 'Calls', value: calls, color: '#10B981' },       // Emerald Green
      { name: 'Messages', value: messages, color: '#3B82F6' },  // Blue
      { name: 'Videos', value: videos, color: '#8B5CF6' },      // Purple
    ];
  }, [timelineList]);

  const totalActivities = timelineList.length;

  if (!isMounted) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 w-full max-w-md mx-auto font-sans">
     

      {/* Donut Chart with Center Text */}
      <div className="relative w-full h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

      
      </div>

      {/* Legend Bottom */}
      <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-gray-50 flex-wrap">
        {chartData.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="w-3.5 h-3.5 rounded-sm inline-block"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-xs font-semibold text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityStatusChart;