import React from 'react';

const Hero: React.FC = () => (
  <section className="text-center p-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white dark:bg-gradient-to-r dark:from-indigo-700 dark:to-purple-800">
    <h1 className="text-4xl md:text-6xl font-bold">
      Sell Unused Software Licenses Easily
    </h1>
    <p className="mt-4 text-xl">
      SoftSell helps you turn unused software into cash quickly and securely.
    </p>
    <button className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded shadow hover:bg-gray-100 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 transition-all">
      Get a Quote
    </button>
  </section>
);

export default Hero;
