'use client';
import { useDispatch } from 'react-redux';
import { setCursorVariants } from '../store/cursorSlice';

export default function page() {
  const dispatch = useDispatch();

  const textEnter = () => {
    dispatch(setCursorVariants('text'));
  }

  const textLeave = () => {
    dispatch(setCursorVariants('default'));
  }

  return (
    <div className='w-screen lg:px-36 px-4 lg:mt-6 md:mt-10 md:px-16 mt-20 pb-8 lg:pb-0 tracking-wider'>
      <span onMouseEnter={textEnter} onMouseLeave={textLeave} className='md:text-lg text-sm text-hover'>Welcome to my <strong>creative space!</strong></span>
      <div className='flex flex-col md:gap-4 gap-2 md:text-lg lg:text-xl text-sm mt-4'>
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} text-hover> Hey, Myself <strong>Rahul</strong></p>
      <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
        I’m a MERN Stack Developer with over 1 year of hands-on experience in full-stack web development. I specialize in React, Node.js, and MongoDB, building scalable, high-performance, and user-friendly applications. My goal is to create solutions that are not only functional but also impactful.
      </p>
      <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
        I’m passionate about continuous learning and staying current with the latest trends in technology. I enjoy working in collaborative environments, where I contribute through strong communication, adaptability, and a focus on writing clean, efficient code.
      </p>
      <p onMouseEnter={textEnter} onMouseLeave={textLeave} text-hover>
        I’m passionate about continuous learning and staying current with the latest trends in technology. I enjoy working in collaborative environments, where I contribute through strong communication, adaptability, and a focus on writing clean, efficient code.
      </p>
      </div>
     
    </div>
  );
}
