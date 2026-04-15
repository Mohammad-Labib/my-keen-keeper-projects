import React, { use } from 'react';

const CartData = ({promiseData}) => {
    const friendsData =use(promiseData)
    console.log("friend data show,", promiseData);
    return (
        <div>
            <h1 className='text-4xl'>Your Friend Data: {friendsData.length}</h1>
        </div>
    );
};

export default CartData;