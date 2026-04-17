import Link from 'next/link';
import React from 'react';

const timeLinePage = () => {
    return (
            <Link href="/TimeLine">
        <div>
            <h1>Hello Time Line Page</h1>
            <button className='flex justify-center items-center text-center'>TimeLine</button>
        </div>
        </Link>
    );
};

export default timeLinePage;