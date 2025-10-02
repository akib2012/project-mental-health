import React from 'react';

const Fotter = () => {
    return (
        <div>
            <div className=' flex  flex-col justify-center items-center py-20'>
                <h4 className='text-4xl font-semibold py-5'>Unlocking well-being excellence</h4>
                <p className='text-xl text-gray-400 max-w-[700px] text-center'>A website to keep track of your mental health, write journals, chat anonymously and get a personalized result based on your quiz.</p>
            </div>
            <div className=' flex justify-center items-center'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 my-7 max-w-10/12 mx-auto">

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-indigo-600 text-white p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 11c0 .88-.39 1.67-1 2.22M12 13c0 .88.39 1.67 1 2.22M11 21h2" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-gray-900">Mental Health Assessment</h3>
                            <p className="mt-2 text-gray-600">
                                Check your mental wellbeing with a quick and confidential assessment.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-indigo-600 text-white p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-gray-900">Write Personal Journals</h3>
                            <p className="mt-2 text-gray-600">
                                Track your mood and thoughts in a secure, private journal for self-reflection.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-indigo-600 text-white p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-gray-900">1:1 Chat with AI Therapist</h3>
                            <p className="mt-2 text-gray-600">
                                Get 24/7 support from an AI therapist to manage your mental health.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-indigo-600 text-white p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 16h-1v-4h-1m0-4h.01" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-gray-900">Anonymous Chatting</h3>
                            <p className="mt-2 text-gray-600">
                                Connect with a supportive community anonymously and share your experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fotter;