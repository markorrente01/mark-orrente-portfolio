import { useForm } from "react-hook-form";
import { cn } from '@/lib/Utils';

const ContactForm = () => {
    const inputStyle =cn('soft-transition w-full focus:outline-0', 
        'rounded-md border-1 border-text-primary/20 text-text-primary py-2 px-4',
        'focus:border-accent-primary focus:shadow-md focus:shadow-accent-primary/40');
    // react-hook-form used to handle the form
    const {register, handleSubmit} = useForm();
    const onSubmit = (data)=>console.log(data);
   return (
    <form onSubmit={handleSubmit(onSubmit)} className={`
        rounded-xl border border-text-primary/12 
        flex flex-col space-y-6 px-4 py-7 sm:px-8 md:px-10
         border bg-bg-card w-full
        `}>
        <div className="w-full flex sm:flex-row flex-col gap-6"> 
            <input 
                className={inputStyle}
                {...register('name')}
                placeholder='Your Name'
            />
            <input 
                className={inputStyle}
                {...register('mail')}
                placeholder='Your Email'
            />
        </div>

        <div className="flex flex-col gap-6">
            <input 
                className={inputStyle}
                {...register('subject')}
                placeholder='Subject'
            />
            <textarea 
                className={cn('h-40', inputStyle)}
                {...register('message')}
                placeholder="Message"
            />
        </div>
            <button 
                type="submit"
                className={cn("sm:w-[40%] m-auto soft-transition bg-accent-primary rounded-md text-white font-bold py-3 px-10",
                     "hover:-translate-y-0.5 hover:bg-accent-primary/80")}
            >
                Send Message
            </button>
    </form>
  )
}

export default ContactForm;
