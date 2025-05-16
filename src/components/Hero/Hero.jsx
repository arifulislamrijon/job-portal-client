import React from 'react';
import { motion } from "motion/react"
import photo1 from '../../assets/successful-business-team-with-thumbs-up-smiling.jpg'
import photo2 from '../../assets/26240-NWIC0A.jpg'
const Hero = () => {
    return (
        <div>
            <div className="flex  bg-base-200 mt-2">
  {/* Left Side */}
  <div className="w-1/2 flex items-center justify-center bg-blue-50">
    <motion.img
      src={photo1}
      animate={{ y: [50, -20, 50] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="w-[200px] rounded-lg shadow-xl border-[1px] border-b-blue-300"
    />
    <motion.img
      src={photo2}
      animate={{ x: [50, -17, 50] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="w-[150px] border-[1px] border-b-blue-300 rounded-lg shadow-xl"
    />
  </div>

  {/* Right Side */}
  <div className="w-1/2 flex flex-col items-start justify-center p-10 bg-gray-100">
    <h1 className="text-5xl font-bold">Box Office News!</h1>
    <p className="py-6">
      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
      exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
    </p>
  </div>
</div>


        </div>
    );
};

export default Hero;