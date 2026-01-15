// import { useForm } from "react-hook-form";
// import { cn } from '@/lib/Utils';

// const ContactForm = () => {
//     const inputStyle =cn('soft-transition w-full focus:outline-0', 
//         'rounded-md border-1 border-text-primary/20 text-text-primary py-2 px-4',
//         'focus:border-accent-primary focus:shadow-md focus:shadow-accent-primary/40');
//     // react-hook-form used to handle the form
//     const {register, handleSubmit} = useForm();
//     const onSubmit = (data)=>console.log(data);
//    return (
//     <form onSubmit={handleSubmit(onSubmit)} className={`
//         rounded-xl border border-text-primary/12 
//         flex flex-col gap-6 px-4 py-7 sm:px-8 md:px-10
//          border bg-bg-card w-full
//         `}>
//         <div className="w-full flex sm:flex-row flex-col gap-6"> 
//             <input 
//                 className={inputStyle}
//                 {...register('name')}
//                 placeholder='Your Name'
//             />
//             <input 
//                 className={inputStyle}
//                 {...register('mail')}
//                 placeholder='Your Email'
//             />
//         </div>

//         <div className="flex flex-col gap-6">
//             <input 
//                 className={inputStyle}
//                 {...register('subject')}
//                 placeholder='Subject'
//             />
//             <textarea 
//                 className={cn('h-40', inputStyle)}
//                 {...register('message')}
//                 placeholder="Message"
//             />
//         </div>
//             <button 
//                 type="submit"
//                 className={cn("sm:w-[40%] mx-auto my-3 soft-transition bg-accent-primary rounded-md text-white font-bold py-3 px-10",
//                      "hover:-translate-y-0.5 hover:bg-accent-primary/80")}
//             >
//                 Send Message
//             </button>
//     </form>
//   )
// }

// export default ContactForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from '@/lib/Utils';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState(""); //ui feedback 

    const inputStyle = cn(
        'soft-transition w-full focus:outline-0',
        'rounded-md border-1 border-text-primary/20 text-text-primary py-2 px-4',
        'focus:border-accent-primary focus:shadow-md focus:shadow-accent-primary/40'
    );

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // The Logic to send the email using Web3 email sending service
    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setResult("Sending...");

        data.access_key = "416a65ec-6255-4277-a46c-8055d0609719"; 

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        const res = await response.json();

        if (res.success) {
            setResult("Message sent successfully!");
            reset(); // Clears the form
        } else {
            setResult("Something went wrong. Please try again.");
        }
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl border border-text-primary/12 flex flex-col gap-6 px-4 py-7 sm:px-8 md:px-10 bg-bg-card w-full">
            
            <div className="w-full flex sm:flex-row flex-col gap-6">
                <div className="w-full">
                    <input 
                        className={cn(inputStyle, errors.name && "border-red-500")}
                        {...register('name', { required: "Name is required" })}
                        placeholder='Your Name'
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                </div>

                <div className="w-full">
                    <input 
                        className={cn(inputStyle, errors.mail && "border-red-500")}
                        {...register('mail', { 
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })}
                        placeholder='Your Email'
                    />
                    {errors.mail && <span className="text-red-500 text-xs mt-1">{errors.mail.message}</span>}
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <input 
                    className={inputStyle}
                    {...register('subject')}
                    placeholder='Subject'
                />
                <textarea 
                    className={cn('h-40', inputStyle, errors.message && "border-red-500")}
                    {...register('message', { required: "Message cannot be empty" })}
                    placeholder="Message"
                />
            </div>

            <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                    "sm:w-[40%] mx-auto my-3 soft-transition bg-accent-primary rounded-md text-white font-bold py-3 px-10",
                    "hover:-translate-y-0.5 hover:bg-accent-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                )}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {result && (
                <p className={cn("text-center text-sm font-medium", result.includes("success") ? "text-green-500" : "text-red-500")}>
                    {result}
                </p>
            )}
        </form>
    );
};

export default ContactForm;
