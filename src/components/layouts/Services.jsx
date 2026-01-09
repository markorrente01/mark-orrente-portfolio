import { Header } from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/ui/ServiceCard';
import { cn } from '@/lib/Utils'
import { ServiceData } from '@/data/ServiceData';
import { IconContext } from "react-icons";

const H3 = ({children})=>{
  return(
    <h3 className='relative text-center md:text-start leading-[1.2] mb-4 font-medium text-text-primary text-xl md:text-2xl lg:text-3xl'>
          {children}
      </h3>
  )
}
const P = ({children})=>{
  return (
    <p className='relative text-center md:text-start leading-[1.3] text-text-secondary/90 text-sm sm:text-base mt-2 mb-6 font-medium'>
      {children}
    </p>
  )
}

const Services = () => {
  const content = `
          I deliver modern, high-performing frontend solutions 
          focused on usability, scalability, and clean code—helping 
          brands turn ideas into fast, reliable, and engaging digital 
          experiences.
      `;
    return (
        <IconContext.Provider
            value={{
                className: "text-accent-primary group-hover:text-white w-[30px] h-[30px]  md:h-[35px] md:w-[35px]"
            }}
        >
            <section id='services' className='sectionCenter mt-20 mb-10'>
                    <Header 
                    header='SERVICES' 
                    subHeading='Services' 
                    content={content}
                    others='mb-10'
                    />
                    <div className='grid gap-7 md:grid-cols-3 mb-10'>
                        {ServiceData.map(Data=>{
                        return(
                            <ServiceCard 
                                key={Data.id}
                                icon={Data.icon}
                                title={Data.title}
                                description={Data.description}
                                featured={Data.featured}
                            />
                        )
                    })}
                    </div>
                    <article className='z-1 overflow-hidden relative rounded-3xl serviceGradient p-7 md:pt-10 md:px-13 flex md:flex-row md:justify-between flex-col justify-center items-center'>
                        <div className='bg-[#c97aa3]/80 rounded-full w-60 h-60 absolute -right-20' />
                        <div>
                            <H3>Transform Your Vision Into Reality</H3>
                            <P>Partner with us to bring your ideas to life with innovative 
                                solutions tailored to your needs
                            </P>
                        </div>
                        <button className={cn('soft-transition w-50 sm:w-80 md:w-50 text-accent-primary bg-white rounded-4xl py-2.5 font-bold',
                            'hover:shadow-[0_5px_10px_2px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 relative'
                        )}>Get Started</button>
                    </article>
                </section>
        </IconContext.Provider>
     
    )
}

export default Services
