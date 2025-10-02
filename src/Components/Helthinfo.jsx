import React from 'react';
import { Link } from 'react-router';

const Helthinfo = ({ data }) => {
    return (
        <div className='flex justify-center items-center mt-8'>
            <div>
                <img src={data.image} alt="" className=" w-[100px] h-[100px] max-w-[100px] max-h-[100px] object-cover rounded-full" />
                <h3 className='text-center pt-4 text-3xl '>{data.title}</h3>
                <Link><h3 className='font-semibold text-green-600'>read more</h3></Link>
            </div>
        </div>
    );
};

export default Helthinfo;