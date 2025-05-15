import React from 'react';
import SendButton from '../miniComponents/sendbutton';

export default function Contact() {
  return (
    <section>
      <div className='bg-[#0047AB] ,text-white py-16 px-6 text-left pl-25'>
        <h1 className=" text-white text-5xl font-bold mb-4">Contact Us</h1>
        <br />
        <p className="text-white text-lg max-w-2xl font-light">
          Have questions or feedback? We'd love to hear from you!</p>


      </div>

      <div className="bg-gray-50 px-4 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-1">


          {/* Contact Info Section starts from here  */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>

            <div>
              <div className="flex items-start gap-3 mb-2 text-blue-600">
                <span>📍</span>
                <h3 className="font-semibold text-gray-900">Our Office</h3>
              </div>
              <p className="text-gray-600">Sky Tower, 123 Flight Street</p>
              <p className="text-gray-600">New York, NY 10001</p>
              <p className="text-gray-600">United States</p>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-2 text-blue-600">
                <span>📞</span>
                <h3 className="font-semibold text-gray-900">Phone</h3>
              </div>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Monday - Friday, 9am - 6pm EST</p>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-2 text-blue-600">
                <span>✉️</span>
                <h3 className="font-semibold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-600">info@jetjourney.com</p>
              <p className="text-gray-600">support@jetjourney.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Connect With Us</h3>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>




          {/* Message form section starts from here */}

          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Whether you have a question about our services, need help with tracking a flight, or just want to say hello, fill out the form below and we'll get back to you as soon as possible.
            </p>

            <div className="bg-white rounded-lg shadow p-6">
              <form className="space-y-4">
                <div className="flex gap-4 flex-col sm:flex-row">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select a subject</option>
                    <option>Support</option>
                    <option>Flight Delay</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    rows="5"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <SendButton />

                {/* <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md flex justify-center items-center gap-2"
                >
                  <span>📨</span> Send Message
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>





    </section>
  );
}