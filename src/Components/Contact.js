import React from 'react';

const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent the form from submitting

//     // Log form data for debugging
//     // console.log('Form submitted');
//     // console.log('Name:', e.target.name.value);
//     // console.log('Email:', e.target.email.value);
//     // console.log('Message:', e.target.message.value);

//     // Additional logic for form submission
//     // ...

//     // Reset the form
//     e.target.reset();
//   };

  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black-to-gray-800 p-4 text-black'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 justify-center items-center'>Contact</p>
          <p className='py-6 items-center justify-center'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/5730802f-a5a1-4d91-a18c-2c4705ba4ef8' method='POST'
           className='flex flex-col w-full md:w-1/2'>
            <input type='text' name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none' />
            <input type='email' name="email" placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name='message' rows="10" placeholder='Type Your Message Here' className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'></textarea>

            <button type="submit" className='text-white bg-gradient-to-b from-slate-500 to-blue-500 px-6 py-3 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
