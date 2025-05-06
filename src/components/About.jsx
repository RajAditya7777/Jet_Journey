import React from 'react';



export default function About() {
  return (
   <section>
    <div className='bg-[#0047AB] ,text-white py-16 px-6 text-left pl-25'>
      <h1 className=" text-white text-5xl font-bold mb-4">About JetJourney</h1>
      <p className="text-white text-lg max-w-2xl font-light">
        Your trusted partner for real-time flight tracking and status updates.</p>

      <br />
      <p className="text-white mt-2 max-w-2xl font-light">
        Launched in 2025, JetJourney has quickly become the go-to platform for travelers seeking accurate, timely information on flights worldwide.</p>
    </div>


    <div className="grid grid-cols-2 gap-10 p-10 items-center bg-white">
      <img src="/map.png" alt="World map with airplane" className="rounded-lg shadow-md" />

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At JetJourney, our mission is to empower travelers with accurate,
            real-time flight information, reducing the stress and uncertainty that
            often comes with air travel. We believe that informed travelers make
            better decisions, leading to smoother, more enjoyable journeys.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600">🛡️</span>
              <div><strong>Reliability</strong><br />We provide accurate, up-to-date information you can trust.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600">⭐</span>
              <div><strong>Excellence</strong><br />We strive for excellence in every aspect of our service.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600">👤</span>
              <div><strong>Customer Focus</strong><br />Your needs and preferences drive our development.</div>
            </li>
          </ul>
        </div>
      </div>
   </section>

   
  );
}