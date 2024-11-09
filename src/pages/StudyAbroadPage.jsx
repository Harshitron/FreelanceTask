import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import uni1 from '../assets/Uni1.jpg';
import uni2 from '../assets/Uni2.jpg';
import uni3 from '../assets/Uni3.jpeg';
import uni4 from '../assets/Uni4.jpeg';

export default function StudyAbroadPage() {
  const [showCounselingPopup, setShowCounselingPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    qualification: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCounselingPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://freelance-backend-c6kl.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        toast.success('Data submitted successfully!');
        // Optionally, reset form data here
        setFormData({
          name: '',
          email: '',
          phone: '',
          experience: '',
          qualification: '',
        });
      } else {
        toast.error(`Submission failed: ${result.error}`);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <Layout>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 pr-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Study Abroad Programs</h1>
              <p className="text-xl text-gray-700 mb-6">
                Discover top universities, courses, and programs abroad. 
                Your journey begins here!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Save up to 1/3rd of your degree cost</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">No GRE/TOEFL required</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Get your Dream University Abroad</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800">LIMITED TIME OFFER</h3>
                <p className="mt-2 text-yellow-800">
                  Get a Comprehensive Guide on Studying in Russia with a 1:1 Counselling for FREE
                </p>
                <button onClick={() => setShowCounselingPopup(true)}
                 className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300">
                  GET COUNSELLING
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-orange-400 rounded-full p-8 relative overflow-hidden">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg relative z-10">
                  <h2 className="text-2xl font-bold mb-4">Get 1:1 Counselling</h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <select
                      name="experience"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Work Experience in years</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                    <input
                      type="text"
                      name="qualification"
                      placeholder="Highest Qualification CGPA out of 10"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300">
                    Submit
                  </button>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>

          {/* Featured Programs Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Study in Russia", duration: "2 years", university: "Sechenov University" },
                { title: "Study in Romania", duration: "18 months", university: "Global Business School" },
                { title: "Study in Turkey", duration: "4 years", university: "Innovation Institute" }
              ].map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    
                    <ul className="text-sm text-gray-500 mb-4">
                      <li>• Cutting-edge curriculum</li>
                      <li>• Industry partnerships</li>
                      <li>• Internship opportunities</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mt-16 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Uzhunnan Fawaz", program: "Peoples Friendship University (RUEN)", quote: "My experience as a medical student at Peoples Friendship University (RUEN) of Russia named after Patrice Lumumba has been truly enriching! I want to extend my gratitude to GKSAS for making the admission process smooth and comfortable." },
                { name: "Fathima Ranna Manappadan", program: "Buryat State University", quote: "My journey as a medical student at Buryat State University has been an incredible experience, made possible by the fully funded scholarship from the Russian government. I am deeply grateful for this support, which ensured a smooth admission process through GKSAS and allowed me to pursue my dream without financial worries. The university's expert faculty, practical training, and welcoming community have all enriched my studies and deepened my passion for medicine." },
                { name: "Ahamed Dhanish", program: "National Research Nuclear University MEPhI", quote: "My experience as a medical student at National Research Nuclear University MEPhI has been nothing short of inspiring! Thanks to GKSAS for a smooth and comfortable admission process, starting my journey here was easy and welcoming." }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.program}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                
                </div>
              ))}
            </div>
          </section>

          {/* Partner Universities Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Partner Universities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: "Mephi University", imgSrc: uni1 },
                { name: "Sechenov University", imgSrc: uni2 },
                { name: "Rudn University", imgSrc: uni3 },
                { name: "Koç University", imgSrc: uni4 },
              ].map((university, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={university.imgSrc}
                      alt={university.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* Call to Action Section */}
          <section className="mt-16 bg-indigo-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-6">Take the first step towards your international education today!</p>
            <button onClick={() => setShowCounselingPopup(true)}
             className="bg-white text-indigo-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition duration-300">
              Apply Now
            </button>
          </section>
        </div>
      </main>


      {showCounselingPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Get Free Counseling</h2>
              <button onClick={() => setShowCounselingPopup(false)} className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <select
                name="experience"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.experience}
                onChange={handleInputChange}
                required
              >
                <option value="">Work Experience in years</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
              <input
                type="text"
                name="qualification"
                placeholder="Highest Qualification CGPA out of 10"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.qualification}
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}