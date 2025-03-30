'use client'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function QuotationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: 'any'
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // EmailJS service configuration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      property_interest: formData.propertyInterest,
      message: formData.message,
      to_name: 'Lucknow Infra Vision', // Your company name
    };

    emailjs.send(
      'service_m9nqqmu', // Replace with your EmailJS service ID
      'template_zohh5y1', // Replace with your EmailJS template ID
      templateParams,
      'x8tvxZ1IMAJ2vTafu' // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        propertyInterest: 'any'
      });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    });
  };

  return (
    <div className="w-full bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Get a Free Quotation</h2>
        <p className="text-gray-600 mt-2">Fill out the form below and we will get back to you with a detailed quotation.</p>
      </div>

      {status.submitted && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl">
          Thank you for your message! We will get back to you soon.
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl">
          {status.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              placeholder="Your full name"
              required
              disabled={status.submitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              placeholder="your@email.com"
              required
              disabled={status.submitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
            placeholder="Your phone number"
            required
            disabled={status.submitting}
          />
        </div>

        <div>
          <label htmlFor="propertyInterest" className="block text-sm font-medium text-gray-700 mb-2">Property Interest</label>
          <select
            id="propertyInterest"
            name="propertyInterest"
            value={formData.propertyInterest}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
            required
            disabled={status.submitting}
          >
            <option value="any">Any Property Type</option>
            <option value="2bhk">2 BHK Apartment</option>
            <option value="3bhk">3 BHK Apartment</option>
            <option value="4bhk">4 BHK Apartment</option>
            <option value="penthouse">Penthouse</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 h-32 resize-none"
            placeholder="Tell us about your requirements..."
            required
            disabled={status.submitting}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 text-white font-medium 
                     hover:from-rose-600 hover:to-orange-600 transition-all transform hover:scale-[1.02] 
                     shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {status.submitting ? 'Sending...' : 'Get Quotation'}
        </button>
      </form>
    </div>
  );
} 