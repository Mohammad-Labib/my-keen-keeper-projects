import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const TimeLineData = () => {
    return (
        <div>
                <Link href="/dataStor">
                            <button className="btn bg-green-900 text-white flex items-center gap-2">
                                <FaPlus />
                                TimeLine
                            </button>
                        </Link>
        </div>
    );
};

export default TimeLineData;