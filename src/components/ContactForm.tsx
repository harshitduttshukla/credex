import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';


interface FormState {
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  type?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    type: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!form.name) newErrors.name = 'Required';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.company) newErrors.company = 'Required';
    if (!form.type) newErrors.type = 'Required';
    if (!form.message) newErrors.message = 'Required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted (mock)!');
    }
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        {(['name', 'email', 'company'] as (keyof FormState)[]).map((field) => (
          <div key={field}>
            <input
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              className="w-full p-3 border rounded text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        <div>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-3 border rounded text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select License Type</option>
            <option value="Windows">Windows</option>
            <option value="Office">Office</option>
            <option value="Adobe">Adobe</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

