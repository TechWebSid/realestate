'use client'
import { useState } from 'react';

export default function ContactBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Quick Contact Card */}
      <div className="bg-gradient-to-br from-rose-100 to-orange-100 rounded-3xl p-8 shadow-lg flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-gray-600">+91 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">info@lucknowinfra.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-gray-600">Sarvaan Nagar, Bijnor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Business Hours</p>
            <p className="font-medium text-gray-900">Mon - Sat: 9:00 AM - 7:00 PM</p>
            <p className="font-medium text-gray-900">Sun: 10:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>

      {/* Schedule a Visit Card - Replacing Map */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule a Property Visit</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-6 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-3">Residential Properties</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                  Guided property tours
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                  Expert consultation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                  Flexible timing
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-3">Commercial Spaces</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Detailed walkthrough
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Investment analysis
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Location insights
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-rose-100 to-orange-100 p-6 rounded-2xl text-center">
            <p className="text-gray-800 font-medium mb-3">
              Book your visit today and let us help you find your perfect property
            </p>
            <button className="bg-rose-500 text-white px-6 py-2 rounded-xl hover:bg-rose-600 transition-colors">
              Schedule Now
            </button>
          </div>
        </div>
      </div>

      {/* Social Links Card */}
      <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
        <div className="grid grid-cols-2 gap-4">
          {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
            <button
              key={social}
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <span className="font-medium text-gray-800">{social}</span>
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Preview Card */}
      <div className="bg-gradient-to-br from-rose-100 to-orange-100 rounded-3xl p-8 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h3>
        <div className="space-y-4">
          <div className="bg-white/80 rounded-xl p-4">
            <p className="font-medium text-gray-900">What are the payment terms?</p>
            <p className="text-sm text-gray-600 mt-1">Flexible payment plans available with easy EMI options.</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4">
            <p className="font-medium text-gray-900">When is the possession date?</p>
            <p className="text-sm text-gray-600 mt-1">Ready to move in properties available.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 