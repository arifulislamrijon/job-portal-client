import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const{_id,title,company,company_logo,location,description}=job;
    return (
      <div className="flex flex-col ">
      <div className="bg-white p-6 flex-wrap rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex flex-x mb-4">
          <div className="bg-blue-100 rounded-full">
            <img src={company_logo} alt="Company Logo" className="w-25 h-25" />
            </div>
            <span>
            <h1 className="text-2xl font-bold text-center mb-2">{company} </h1>
            <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">{location}</h2>
            </span>
          
        </div>
       
        <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">{title}</h2>
        <p className='font-semibold text-center text-gray-700'>{description}</p>
        <div className="text-center justify-end">
         <Link to={`/job/${_id}`}> <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Apply Now</button></Link>
        </div>
      </div>
    </div>
    );
};
export default JobCard;