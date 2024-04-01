import React from 'react';

const page = ({ params: { id } }) => {

    console.log("buisness id = ", id)

    return (
        <div className='wrapper '>
            page details
        </div>
    );
}

export default page;
