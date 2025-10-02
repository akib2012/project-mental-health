import React from 'react';
import Img from '../assets/helth.jpg'
import { useLoaderData } from 'react-router';
import Helthinfo from './Helthinfo';

const Health = () => {
    const healthdata = useLoaderData();
    console.log(healthdata);
    return (
        <div className='bg-cover bg-center bg-no-repeat text-white mt-8 
        
        'style={{ backgroundImage: `url(${Img})` }}>


            <div className='max-w-8/12 mx-auto py-6'>
                <h1 className='text-center text-4xl font-semibold'>Mental Health</h1>
                <p className='text-center py-5'>read more mental helth related topic</p>
                <div className='grid grid-cols-4 gap-9'>
                    {
                        healthdata.map(data => <Helthinfo data={data}></Helthinfo>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Health;