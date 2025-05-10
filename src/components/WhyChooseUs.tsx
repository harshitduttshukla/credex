import React, { type JSX } from 'react';
import { FaLock, FaClock, FaCheckCircle, FaUserShield } from 'react-icons/fa';

interface Benefit {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const benefits: Benefit[] = [
  { icon: <FaLock size={30} />, title: "Secure Transactions", desc: "We prioritize your security and privacy." },
  { icon: <FaClock size={30} />, title: "Fast Process", desc: "Complete your sale in minutes." },
  { icon: <FaCheckCircle size={30} />, title: "Trusted Platform", desc: "Used by hundreds of professionals." },
  { icon: <FaUserShield size={30} />, title: "Verified Buyers", desc: "We work only with reputable partners." },
];

const WhyChooseUs: React.FC = () => (
  <section className="py-16 px-4 text-center">
    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {benefits.map((b, i) => (
        <div key={i} className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900">
          <div className="mr-4 text-indigo-600 dark:text-indigo-400">
            {b.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{b.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{b.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
