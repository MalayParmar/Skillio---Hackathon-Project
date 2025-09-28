import React from 'react'
import Heroimg from '../../assets/hero-image.png'
import Button from '../Button/Button'
import { FaShare } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";


const Hero = () => {
    return <>
        <div className="w-full h-[90vh] px-30 flex items-center justify-between">
            
            <div className='flex flex-col items-start gap-y-5 mb-25'>
                {/* Hero text */}
                <h1 className='text-7xl/snug font-medium'>Exchange Skills.<br/>Learn Anything.<br/>Teach Anything.</h1>
                <p className='text-xl max-w-[500px] ml-2 text-zinc-700 mb-5'>Connect with people, share what you know, and learn what you don’t.</p>

                {/* buttons */}
                <div className='flex items-center gap-7'>
                    <Button content={'Learn a Skill'} icon={<FaChalkboardTeacher />}/>
                    <Button content={'Share a Skill'} icon={<FaShare />}/>
                </div>

            </div>

            {/* Hero image */}
            <img src={Heroimg} alt="" className='w-[700px] mb-[50px]'/>
        </div>
    </>
}

export default Hero