import React from 'react';
import {Header} from '@/components/ui/SectionHeader';
import ContactCard from '@/components/ui/ContactCard';
import ContactForm from '@/components/ui/ContactForm';
import { IoLocationOutline } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
    const iconStyle = 'text-accent-primary w-6 h-6 group-hover:text-white';
    const contactInfo = [
            {
                icon: <IoLocationOutline className={iconStyle}/>,
                heading: 'Address',
                subHeading: 'Aba, Abia State, Nigeria'
            },
            {
                icon: <LuPhone className={iconStyle}/>,
                heading: 'Call Me',
                subHeading: '08106820012'
            },
            {
                icon: <FaWhatsapp className={iconStyle}/>,
                heading: 'Direct Message',
                subHeading: '08104420678'
            },
            {
                icon: <CiMail className={iconStyle}/>,
                heading: 'Email Me',
                subHeading: 'markorrente01@gmail.com'
            }
        ];
    const content = `
          I deliver modern, high-performing frontend solutions 
          focused on usability, scalability, and clean code—helping 
          brands turn ideas into fast, reliable, and engaging digital 
          experiences.
      `;
  return (
    <section id='contact' className='sectionCenter'>
        <div>
            <Header 
            header='CONTACT' 
            subHeading='Contact' 
            content={content}
            />
        </div>

        <div className='sm:flex sm:gap-8 mt-10'>
            <div className='sm:w-[50%] flex flex-col gap-5'>
            {contactInfo.map((contact, index)=>{
                return (
                    <ContactCard 
                        key={index}
                        icon={contact.icon} 
                        heading={contact.heading} 
                        subHeading={contact.subHeading} 
                    />
                )
            })}
        </div>
            <ContactForm />
        </div>
        
    </section>
  )
}

export default Contact
