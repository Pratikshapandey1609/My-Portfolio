import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

const Contact = () =>  {
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
      const userInfo={
           name:data.name,
           Email:data.Email,
           Message:data.Message
       }
       try{
          await axios.post("https://getform.io/f/bnllklgb", userInfo);
          toast.success('Thank you for contacting us. We’ve received your message and will review it shortly."')
       }catch(error){
           console.log(error);
           toast.error('We are sorry, but something went awry')
       }
    } 

  return (
    <div className='space-y  max-w-screen-2xl h-full container mx-auto px-4 mb-0 w-full py-20 border-b-[1px] border-b-black  md:px-20 my-16'>
       <h1 className='font-3xl font-semibold mb-5 text-xl'>Contact me / Let’s Connects</h1>
       <span className='text-indigo-900 text-xl'>Reach out to discuss opportunities or collaborations</span>
      
       <div className=' flex justify-center p-6 m-5 my-8 rounded-lg bg-zinc-500'>
         <form 
               onSubmit={handleSubmit(onSubmit)}
              //action= 'https://getform.io/f/bnllklgb'
              // method="POST"
            className ='bg-white shadow md rounded-lg w-96  px-8 py-6 space-y-4 '
         
         >
            <h1 className='font-semibold '>Share Your Thoughts</h1>
            <div className='flex flex-col mb-4'> {/**name */}
             <label  className="block text-slate-900 font-medium mb-2">
               Full Name
             </label>
             <input 
             {...register("name", { required: true })} 
              type="text"
              id="name"
              name='name'
              placeholder="Enter your name"
              className=" border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
             />
             {errors.name && <span>This field is required</span>}

            </div>
            
            <div className='flex flex-col mb-4'>{/**email*/}
             <label  className="block text-slate-900  font-medium mb-2">
               Email
             </label>
             <input
              {...register("Email", { required: true })} 
              type="text"
              id="Email"
              name='Email'
              placeholder="Enter your Email"
              className=" border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
             />
              {errors.Email && <span>This field is required</span>}
            </div>
             
            <div className='flex flex-col mb-4'>{/*messagee*/}
             <label  className="block text-slate-900  font-medium mb-2">
               Message
             </label>
             <input
              {...register("Message", { required: true })} 
              type="text"
              id="Message"
              name='Message'
              placeholder="Submit your request"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
             />
              {errors.Message && <span>This field is required</span>}
            </div>
            <button type ='submit'className='bg-black text-white rounded-xl px-3 py-3 hover:bg-slate-800 duration-300 '>
                proceed 
            </button>
         </form> 
       </div>
    </div>
  );
}

export default Contact;
