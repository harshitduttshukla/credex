import React, { type JSX } from 'react';
import { FaCloudUploadAlt, FaDollarSign, FaRegHandshake } from 'react-icons/fa';

interface Step {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { icon: <FaCloudUploadAlt size={40} />, title: "Upload License", desc: "Provide your license details securely." },
  { icon: <FaDollarSign size={40} />, title: "Get Valuation", desc: "Receive a fair market valuation instantly." },
  { icon: <FaRegHandshake size={40} />, title: "Get Paid", desc: "Get payment quickly upon sale." },
];

const HowItWorks: React.FC = () => (
  <section className="py-16 px-4 text-center bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">How It Works</h2>
    <div className="flex flex-col md:flex-row justify-center gap-8">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow">
          {step.icon}
          <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
          <p className="mt-2">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
