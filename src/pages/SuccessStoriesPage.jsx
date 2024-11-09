import React from 'react';
import Layout from '../components/Layout';
import kid1 from '../assets/kid5.jpg'
import kid2 from '../assets/kid2.jpg'
import kid3 from '../assets/kid3.jpg'
import kid4 from '../assets/kid4.jpg'
import kid5 from '../assets/kid1.jpg'
import kid6 from '../assets/kid6.jpg'

export default function SuccessStoriesPage() {
  const successStories = [
    {
      name: 'Nalakath Shamsuddeen Fathimarisha',
      university: 'National Research Nuclear University MEPhI',
      testimonial:
        '"As a student at National Research Nuclear University MEPhI, Im thrilled with my experience here! The smooth and supportive admission process made starting my journey at MEPhI easy and welcoming. The universitys advanced facilities and expert faculty have provided me with both practical skills and deep theoretical knowledge in nuclear science. MEPhIs inclusive community has made my time here truly rewarding, and I highly recommend it to anyone passionate about this field."',
      photo: kid1,
    },
    {
      name: 'Ahamed Dhanish',
      university: 'National Research Nuclear University MEPhI',
      testimonial:
        '"My experience as a medical student at National Research Nuclear University MEPhI has been nothing short of inspiring! Thanks to GKSAS for a smooth and comfortable admission process, starting my journey here was easy and welcoming. MEPhIs hands-on training, dedicated faculty, and advanced facilities have turned complex medical concepts into practical, engaging learning. This experience has truly fueled my passion for medicine, and Im proud to be part of such an incredible community. Highly recommended to future medical students!"',
      photo: kid2,
    },
    {
      name: 'Uzhunnan Fawaz',
      university: 'Peoples Friendship University (RUEN)',
      testimonial:
        '"My experience as a medical student at Peoples Friendship University (RUEN) of Russia named after Patrice Lumumba has been truly enriching! I want to extend my gratitude to GKSAS for making the admission process smooth and comfortable. The universitys diverse community, expert faculty, and hands-on training have made learning both enjoyable and practical. This journey has deepened my passion for medicine and equipped me with invaluable skills. Im grateful to be part of such a supportive and inspiring environment and highly recommend this university to future medical students!"',
      photo: kid3,
    },
    {
      name: 'Kavila Vallappil Hamjad Rahman',
      university: 'Peoples Friendship University (RUEN)',
      testimonial:
      "My experience as a medical student at People's Friendship University (RUDEN) of Russia named after Patrice Lumumba has been incredibly rewarding! A huge thank you to GKSAS for ensuring a smooth and comfortable admission process. The diverse community, knowledgeable faculty, and hands-on training have transformed my learning experience into something truly special. This journey has ignited my passion for medicine and provided me with essential skills for my future career. I feel fortunate to be part of such an inspiring environment and highly recommend this university to aspiring medical professionals!",
      photo: kid4,
    },
    {
      name: 'Fathima Ranna Manappadan',
      university: 'Buryat State University',
      testimonial: "My journey as a medical student at Buryat State University has been an incredible experience, made possible by the fully funded scholarship from the Russian government. I am deeply grateful for this support, which ensured a smooth admission process through GKSAS and allowed me to pursue my dream without financial worries. The university's expert faculty, practical training, and welcoming community have all enriched my studies and deepened my passion for medicine. I feel privileged to be part of such an inspiring environment and would highly recommend Buryat State University to future scholars!",
      photo: kid5,
    },
    {
      name: 'Sayali Arun Satpute',
      university: 'Saint Petersburg State Medical University',
      testimonial:
      "Studying at Saint Petersburg State Medical University has been nothing short of amazing! Thanks to the fully funded scholarship from the Russian government and the smooth admission process through GKSAS, my journey into medical education has been both accessible and exciting. The university's top-notch faculty, state-of-the-art facilities, and immersive, hands-on training have made learning incredibly engaging. Every day here fuels my passion for medicine and brings me closer to my dream of making a difference. I couldn't be prouder to be part of this incredible institution and wholeheartedly recommend it to future medical students!",
      photo: kid6,
    },
  ];

  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
        <p className="text-xl text-gray-700 mb-6">
          Read about the inspiring journeys of our students who have successfully pursued their dreams of studying
          abroad.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-40 w-40 mx-auto">
                <img
                  src={story.photo}
                  alt={`Photo of ${story.name}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{story.name}</h2>
              <p className="text-gray-600 mb-4">
                {story.university}
              </p>
              <p className="text-gray-700">{story.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}