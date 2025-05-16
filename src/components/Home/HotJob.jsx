import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJob = () => {
    const[jobs,setJob]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/job")
        .then(res=>res.json())
        .then(data=>setJob(data))

    },[])
    return (
        <div>
           <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
           {
                jobs.map(job=><JobCard key={jobs._id} job={job}></JobCard>)
            }
           </div>
        </div>
    );
};

export default HotJob;