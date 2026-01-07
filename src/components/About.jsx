import { Header, SectionHeader } from '@/components/ui/SectionHeader';
import AbtBox from '@/components/ui/AbtBox';
import { BsBriefcase } from 'react-icons/bs';
import { IoSchoolOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEventAvailable } from "react-icons/md";
import Skills from '@/components/ui/Skills';

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
    const content = `
                    I’m a detail-driven Frontend developer specializing in building clean, functional, 
                    and conversion-focused websites. I enjoy turning complex requirements into 
                    simple, scalable solutions and writing code that’s easy to maintain. Whether 
                    it’s improving performance, or refining UI, I focus on results that actually 
                    help businesses grow.
                `;
  return (
    <section id='about' className='sectionCenter'>
        <div>
            <Header 
            header='ABOUT ME' 
            subHeading='Transforming Ideas into Digital Reality' 
            content={content}
            />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10 mb-15'>
            {aboutInfo.map((info, index)=><AbtBox key={index} icon={info.icon} heading={info.heading} subHeading={info.subHeading} />)}
        </div>
        
        <div>
            <Skills />
        </div>
    </section>
  )
}

export default About
