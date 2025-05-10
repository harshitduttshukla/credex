import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    role: "IT Manager",
    company: "TechNova",
    review: "SoftSell helped us recover value from unused licenses!"
  },
  {
    name: "John Smith",
    role: "Procurement Lead",
    company: "SoftCore Inc",
    review: "Quick, easy, and trustworthy platform. Highly recommend."
  }
];

const Testimonials: React.FC = () => (
  <section className="py-16 px-4 text-center bg-gray-50 dark:bg-gray-700">
    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">What Our Customers Say</h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full md:w-1/2">
          <p className="italic text-gray-900 dark:text-white">"{t.review}"</p>
          <p className="mt-4 font-semibold text-gray-900 dark:text-white">- {t.name}, {t.role} at {t.company}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
