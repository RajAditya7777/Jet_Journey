import React from 'react';
import ContactForm from '../miniComponents/contactForm';

export default function Contact() {
  return (
    <section>
      <div className='bg-[#0047AB] ,text-white py-16 px-6 text-left pl-25'>
      <h1 className=" text-white text-5xl font-bold mb-4">Contact Us</h1>
      <br />
      <p className="text-white text-lg max-w-2xl font-light">
      Have questions or feedback? We'd love to hear from you!</p>

      
    </div>

    <div className="grid grid-cols-2 gap-10 p-10 items-center bg-white">
      <div>

      </div>
      
      <div>
        <h2 className='font-bo'>Send Us a Message</h2>
      </div>
    </div>

    </section>
  );
}