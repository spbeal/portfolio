import React from 'react'

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/html.png';
import AWS from '../../assets/html.png';
import GitHub from '../../assets/html.png';
import TailWind from '../../assets/html.png';
import Mongo from '../../assets/html.png';
import csharp from '../../assets/icons8-c-sharp.png'
import flask from '../../assets/icons8-flask-50.png'

import Cplusplus from '../../assets/c++.png';
import PythonImg from '../../assets/python.png';

// import nav from '../../components/navigationbar/Navbar.jsx'

const { nav } = require('../navigationbar/Navbar')

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-almond '>
       {/*Container */}
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4 text-lg '> // These are some of the technologies I've worked with </p>
            </div>

            <div className = 'w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-bold'>        
                <div className='shadow-md shadow-[#040c161] scale-100 hover:scale-[1.1] duration-500'>
                    <img className='w-20 mx-auto' src={Cplusplus} alt="C++ icon"/>
                    <p className='my-4'>C++</p>
                </div> 
                <div className='shadow-md shadow-[#040c161] scale-90 hover:scale-100 duration-500'>
                    <img className='w-20 mx-auto' src={PythonImg} alt="Python icon"/>
                    <p className='my-4'>Python</p>
                </div> 
                <div className='shadow-md shadow-[#040c161] scale-95 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={csharp} alt="C# icon"/>
                    <p className='my-4'>C#</p>
                </div>
                <div className='shadow-md shadow-[#040c161] scale-95 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c161] scale-95 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c161] scale-95 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon"/>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c161] scale-95 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon"/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c161] scale-95 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={flask} alt="Flask icon"/>
                    <p className='my-4'>Flask</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Skills
