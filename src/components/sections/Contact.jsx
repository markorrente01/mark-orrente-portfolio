import React from 'react';
import {Header} from '@/components/ui/SectionHeader';
import ContactCard from '@/components/ui/ContactCard';
import ContactForm from '@/components/ui/ContactForm';
import { IoLocationOutline } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/Utils'
import { socials } from '@/data/SocialData';

const H3 = ({children, others})=>{
  return(
    <h3 className={cn('mb-3 relative tracking-wide sm:text-star leading-[1.2] font-medium text-text-primary',
        others
    )}>
          {children}
      </h3>
  )
}
const P = ({children})=>{
  return (
    <p className='relative md:text-start leading-[1.3] text-text-secondary text-sm sm:text-base mt-2 mb-5'>
      {children}
    </p>
  )
}
const Ul = ({children, others})=>{
    return (
        <ul className={cn('list-none space-y-2', others)}>
            {children}
        </ul>
    )
}
const SocialIcon = ({icon, link})=>{
    return(
         <a className={cn('text-white border border-text-secondary flex items-center justify-center w-11 h-11 rounded-full', 
            'transform transition-all duration-300 ease-out hover:text-accent-primary hover:border-accent-primary hover:-translate-y-0.5')}
            href={link} target='_blank' rel="noopener noreferrer">
            {icon}
        </a>
    )
}
const contListStyle = 'text-sm text-text-secondary'
const liStyle = 'soft-transition hover:text-accent-primary cursor-pointer text-sm text-text-secondary';
const usefulLinks = ['Home', 'About Us', 'Services', 'Terms of Services', 'Privacy Policy'];
const servicesLinks = ['Web design', 'Web development', 'Product Management', 'Marketing', 'Graphic design'];
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

        <div className='mb-15 flex flex-col gap-10 sm:flex-row sm:gap-8 mt-10 sm:items-start'>
            <div className='sm:w-[50%] flex flex-col gap-4'>
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

        <article className='py-10 border-t border-text-primary/10 space-y-5 lg:flex gap-8'>
            <div className='lg:max-w-[45%]'>
                <div>
                <H3 others='text-xl md:text-2xl lg:text-3xl'>
                    ORTECH
                </H3>
                <P>
                    Cras fermentum odio eu feugiat lide par naso tierra. 
                    Justo eget nada terra videa magna derita valies darta 
                    donna mare fermentum iaculis eu non diam phasellus.
                </P>
                </div>
                <div className='flex gap-2'>
                    {socials.map((social, index)=>{
                        return (
                           <SocialIcon key={index} icon={social.icon} link={social.link}/>
                        )
                    })}
                </div>
                
            </div>

            <article className='grid grid-cols-2 md:grid-cols-3'>
                <div>
                    <H3 others='text-base'>Useful Links</H3>
                    <Ul>
                        {usefulLinks.map((link, index)=>{
                            return (
                                <li key={index} className={liStyle}>{link}</li>
                            )
                        })}
                    </Ul>
                </div>  
                <div>
                    <H3 others='text-base'>Our Services</H3>
                    <Ul>
                        {servicesLinks.map((link, index)=>{
                            return (
                                <li key={index} className={liStyle}>{link}</li>
                            )
                        })}
                    </Ul>
                </div>  

                <div className='space-y-5 col-span-2 md:col-span-1 mt-8 md:mt-0'>
                    <H3 others='text-base text-center md:text-start'>Contack Us</H3>
            
                    <Ul others='text-center md:text-start space-y-1'>
                        <li className={contListStyle}>Adams street</li>
                        <li className={contListStyle}>New york</li>
                        <li className={contListStyle}>United States</li>
                    </Ul>
                    
                    <Ul others='text-center space-y-1 md:text-start'>
                        <li className={contListStyle}><b>Phone:</b> +234 8106820012</li>
                        <li className={contListStyle}><b>Email:</b> markorrente01@gmail.com</li>
                    </Ul>
                
                </div>  

            </article>
        </article>
        
    </section>
  )
}

export default Contact
