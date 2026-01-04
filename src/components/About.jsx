import { Header, SectionHeader } from '@/components/SectionHeader';
import AbtBox from '@/components/AbtBox';
import { BsBriefcase } from 'react-icons/bs';
import { IoSchoolOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEventAvailable } from "react-icons/md";

const About = () => {
    const iconStyle = 'text-accent-primary w-6 h-6';
    const aboutInfo = [
        {
            icon: <BsBriefcase className={iconStyle}/>,
            heading: 'EXPERIENCE',
            subHeading: '4+ Years'
        },
        {
            icon: <IoSchoolOutline className={iconStyle}/>,
            heading: 'DEGREE',
            subHeading: 'Bachelor of Science'
        },
        {
            icon: <SlLocationPin className={iconStyle}/>,
            heading: 'BASED IN',
            subHeading: 'Nigeria, Abia'
        },
        {
            icon: <MdOutlineEventAvailable className={iconStyle}/>,
            heading: 'AVAILABILITY',
            subHeading: 'Open to Work'
        }
    ];
  return (
    <section id='about' className='bg-bg-secondary py-15 px-5 lg:px-25'>
        <div>
            <Header header='ABOUT ME' />
            <h2 className='my-5 heading text-center'>
                Transforming Ideas into Digital Reality
            </h2>
            <article className='text-text-secondary text-base sm:text-lg lg:px-45 text-center'>
                I’m a detail-driven Frontend developer specializing in building clean, functional, 
                and conversion-focused websites. I enjoy turning complex requirements into 
                simple, scalable solutions and writing code that’s easy to maintain. Whether 
                it’s improving performance, or refining UI, I focus on results that actually 
                help businesses grow.
            </article>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
            {aboutInfo.map((info, index)=><AbtBox key={index} icon={info.icon} heading={info.heading} subHeading={info.subHeading} />)}
        </div>
        
        <div>
            <SectionHeader header='CORE SKILLS' />
            <h2 className='heading mt-4 mb-6'>Technical Proficiency</h2>
        </div>
    </section>
  )
}

export default About
