import React from 'react';
import Layout from '../components/Layout';

export default function CareerSupportPage() {
  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Support</h1>
        <p className="text-xl text-gray-700 mb-6">
          We offer comprehensive career support services to help you succeed in your chosen field. From resume building
          to interview preparation, we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Resume and Cover Letter Writing</li>
              <li>Interview Preparation</li>
              <li>Career Counseling</li>
              <li>Job Search Strategies</li>
              <li>Networking Workshops</li>
            </ul>
          </div>
          <div className="bg-white p-6  rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Industry Connections</h2>
            <p className="text-gray-700">
              We have partnerships with leading companies across various industries, providing our students with
              exclusive internship and job opportunities.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}