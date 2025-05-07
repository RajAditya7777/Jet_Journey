import React from 'react';
import {FaRegStar,FaShieldAlt,} from 'react-icons/fa';

const impact = [
  { number: "10M+", label: "Flights Tracked" },
  { number: "5M+", label: "Happy Users" },
  { number: "200+", label: "Airports Covered" },
  { number: "100+", label: "Airlines" },
]

const visionCards = [
  {
    icon: "📈",
    title: "Expand Coverage",
    description:
      "We're working to include even more airlines and airports in our tracking system.",
  },
  {
    icon: <FaRegStar />,
    title: "Enhanced Features",
    description:
      "We're developing new tools to provide even more detailed flight information.",
  },
  {
    icon: <FaShieldAlt  />,
    title: "Personalized Experiences",
    description:
      "Our goal is to tailor our service to your specific travel needs and preferences.",
  },
];

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



      <div className="text-center py-16 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Since our launch, we've helped millions of travelers stay informed and make better decisions about their journeys.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {impact.map((ele, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg py-6">
              <h3 className="text-blue-600 text-2xl font-bold">{ele.number}</h3>
              <p className="text-gray-700 mt-1">{ele.label}</p>
            </div>
          ))}
        </div>
      </div>




      <div className="text-center py-16 px-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">Our Vision for the Future</h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          As we look ahead, we're committed to expanding our services, integrating new technologies,
          and creating an even more seamless travel experience for our users.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visionCards.map((card, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-2xl mb-2 flex justify-center items-center">{card.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
}