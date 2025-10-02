import { CircleArrowRight, LogIn } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-center  items-center mt-[250px]'>
            <div className='max-w-[500px]'>
                <h3 className='text-center text-5xl font-bold'>Welcome to Mindfulness.</h3>
                <p className='text-center py-8 text-xl  text-gray-400'>Welcome to our mental health app, where you can anonymously chat, track your mood, and receive personalized support through quizzes and an AI assistant. Prioritize your emotional well-being discreetly and effectively with our compassionate community.</p>
                
                <div className='flex justify-center items-center'>
                    <p className='flex items-center gap-4'>about us <CircleArrowRight></CircleArrowRight></p>
                </div>
            </div>

        </div>
    );
};

export default Banner;