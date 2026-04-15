import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen w-full bg-black px-6 md:px-35 pt-30'>
        <span className='w-full flex flex-col md:flex-col gap-4'>
            <div className='hidden md:flex md:h-[10vh] rounded-xl bg-blue-800/10'>
            </div>

            <div className='md:h-fit md:pb-12 items-center px-3 flex justify-center'>
                <p className='md:text-[30px] text-[20px] text-white font-semibold'>Let us know how we can be of service</p>
            </div>

            <div className='flex md:h-[60vh] rounded-md flex-row text-white p-0 gap-0 pt-0'>
                
                <span className='hidden md:flex flex-1/2 h-full bg-gray-800'>

                </span>

                <span className='textflex md:flex-col flex-1/2 h-full md:pl-8'>
                    <p className='text-xl md:text-3xl font-bold py-6'>Contact Us</p>

                    <div className='w-full flex flex-col gap-2 md:gap-5'>
                        <input type="text"  placeholder='Enter your first name'
                            className='md:w-[80%] outline-none border-2 border-blue-600/40 p-3 md:p-4 md:font-semibold rounded-lg'/>
                        <input type="text"  placeholder='Enter your last name'
                            className='md:w-[80%] outline-none border-2 border-blue-600/40 p-3 md:p-4 md:font-semibold rounded-lg'/>
                        <input type="text"  placeholder='Enter your e-mail'
                            className='md:w-[80%] outline-none border-2 border-blue-600/40 p-3 md:p-4 md:font-semibold rounded-lg'/>
                        <textarea name="" id="" placeholder='Enter your message'
                            className='md:w-[80%] outline-none border-2 border-blue-600/40 p-3 md:p-4 md:font-semibold md:h-50 rounded-lg'>

                        </textarea>
                    </div>
                    <button className='mt-4 uppercase text-sm md:font-bold w-full md:w-fit px-8 py-4 bg-gray-300
                     text-black hover:text-white hover:cursor-pointer hover:bg-blue-700/70 rounded-xl'>
                        send message
                    </button>
                </span>
            </div>
        </span>
    </div>
  )
}

export default Contact