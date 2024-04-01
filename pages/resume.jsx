import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>sohaib078 | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Muhammad Sohaib</h2>
          <div className='flex'>

            <a
              href='https://github.com/sohaib078'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
           <span className='px-1'></span> Front-End Developer{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        I am hard working programmer with a flair for creating elegant solutions 
        in the least amount of time. As a web developer, my objective is to create 
        user-friendly and efficient websites that are visually appealing and easy to 
        navigate. I utilize my skills in React JS to develop websites that meet all the 
        requirements of the client. I am able to work well both in a team environment 
        as well as using own initiative. I am able to work well under pressure and adhere 
        to strict deadlines. My passion lies in learning new technologies and staying up-to-date  
        with industry trends.
        </p>

        <h5 className=' text-3xl underline text-[18px] py-4'>
         Education
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Lahore Garrison University
            </span>
            <span className='px-2'>|</span>Pakistan, lahore
          </p>
          <p className='py-1 italic'>Bachelors in Computer Science (2018 - 2022)</p>
          </div>
          <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Fazaia Inter College
            </span>
            <span className='px-2'>|</span>Pakistan, lahore
          </p>
          <p className='py-1 italic'>Inter in Computer Science (2016 - 2018)</p>
          </div>


        {/* Skills */}
        <h5 className='text-3xl underline text-[18px] py-2'>Skills</h5>
        <div className='text-center py-4'>
        
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React.JS
            <span className='px-2'>|</span>Tailwind Css
            <span className='px-2'>|</span>Bootstrap
          </p>

        </div>

        <h5 className=' text-3xl underline text-[18px] py-4'>
         Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            7 KINGS CODE
            </span>
            <span className='px-2'>|</span>Pakistan, lahore
          </p>
          <p className='py-1 italic'>Front End Web Developer (2023 - Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Maintained and updated the company website using 
            HTML, CSS, and basic JavaScript.

            </li>
            <li>
            Collaborated with the marketing team to implement website content updates.

            </li>
            <li>
            Provided support in troubleshooting website issues and user inquiries.

            </li>
            <li>
            Gained hands-on experience in implementing responsive user interfaces.

            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
           One Step Sol
            </span>
            <span className='px-2'>|</span>Pakistan, Lahore
          </p>
          <p className='py-1 italic'>Web Developer (2021 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Assisted in the development of web applications using React.js.

            </li>
            <li>
            Collaborated with the development team to troubleshoot and optimize existing code.

            </li>
            <li>
            Contributed to the testing and debugging processes..

            </li>
          </ul>
        </div>

        {/*  */}

      </div>
    </>
  );
};

export default resume;
