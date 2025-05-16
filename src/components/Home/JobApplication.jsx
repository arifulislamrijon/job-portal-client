import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';


const JobApplication = () => {
  const {id}=useParams();
  const {user}=useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setURL] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  console.log(name.email,url,github,linkedin)
  const jobApply={
    job_id: id,
    applicant_email:user?.email,
    github,
    linkedin,
  }
  fetch('',{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(jobApply)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  })

  const handleRegister = async (e) => {
    e.preventDefault();
    setSuccess("Application submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Job Application</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      {success && <p className="text-green-500 mb-3">{success}</p>}

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
           
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Portfolio URL</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">GitHub Profile</label>
          <input
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">LinkedIn Profile</label>
          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
           
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
