import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    const { _id, title, company, company_logo, location, description, requirements, responsibilities } = job;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-300 p-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-200 p-4 rounded-full shadow-md">
                        <img src={company_logo} alt="Company Logo" className="w-24 h-24 object-cover rounded-full" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">{company}</h1>
                <h2 className="text-lg font-medium text-center text-gray-600 mb-4">{location}</h2>
                <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">{title}</h2>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1 w-16 mx-auto mb-6"></div>
                <div className="space-y-4">
                    <p className="font-medium text-gray-700">📜 <span className="font-semibold">Description:</span> {description}</p>
                    <p className="font-medium text-gray-700">📌 <span className="font-semibold">Requirements:</span> {requirements}</p>
                    <p className="font-medium text-gray-700">🛠️ <span className="font-semibold">Responsibilities:</span> {responsibilities}</p>
                    <div className="text-center justify-end">
                             <Link to={`/jobApplication/${_id}`}> <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Apply Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
