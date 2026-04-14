import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-screen  flex items-center justify-center flex-col font-bold text-5xl text-gray-400'>
            <h1>This Page is not found..!</h1>
            <Link href={'/'}><button className='btn btn-error'>Back to Home</button></Link>
        </div>
    );
};

export default NotFoundPage;