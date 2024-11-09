import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import Layout from '../components/Layout'


const CountriesSection = () => {
  const [activeCountry, setActiveCountry] = useState('Russia')
  const [showCounselingPopup, setShowCounselingPopup] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    qualification: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://freelance-backend-c6kl.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (response.ok) {
        toast.success('Data submitted successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          experience: '',
          qualification: '',
        })
      } else {
        toast.error(`Submission failed: ${result.error}`)
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    }
  }

  const countries = {
    Russia: {
      description: "Russia, the world's largest country, offers an impressive educational system recognized for its excellence in fields like medicine, engineering, and the sciences. With a rich cultural heritage, cutting-edge research facilities, and affordable educational costs, Russia is an attractive destination for students worldwide. Russia’s medical universities are particularly notable for their well-established programs, rigorous standards, and international accreditation, which opens up global career opportunities. The MBBS program in Russia spans six years, including a clinical internship year, designed to equip students with both theoretical and practical skills. Renowned institutions like Moscow State University, Saint Petersburg State University, and Kazan Federal University rank among the world’s top universities, ensuring students receive education that meets high global standards. Russian universities offer many courses in English, particularly in the fields of medicine and engineering, to accommodate international students. Besides affordable tuition fees, Russia also offers scholarships and governmental financial aid to ease the financial burden on international students. Russia’s diverse landscapes, from the bustling cities of Moscow and Saint Petersburg to the scenic Ural Mountains and vast Siberian plains, add to the unique cultural experience. Learning Russian is another added benefit, as it is a valuable language in global politics and business. Additionally, Russia is a culturally vibrant country, offering students the opportunity to experience historic art, architecture, and literature. With a strong focus on technological advancement, Russia also offers numerous opportunities for students to engage in pioneering research, particularly in STEM fields, making it an excellent choice for those interested in innovative, research-driven academic programs.",
      keyPoints: [
        "Home to prestigious universities with strong programs in medicine, engineering, and STEM fields",
        "Affordable tuition fees with scholarships and financial aid options for international students",
        "Globally recognized degrees with an emphasis on practical and theoretical training",
        "Rich cultural experiences in a country known for its arts, literature, and historical landmarks",
        "English-taught programs are available, particularly in medical and technical fields",
        "Learning Russian offers advantages for careers in global business, politics, and international relations",
        "Safe and student-friendly environment with diverse cultural interactions and lifestyle options",
        "High focus on research and innovation in STEM fields, providing extensive resources for academic growth",
      ],
      popularCities: ["Moscow", "Saint Petersburg", "Novosibirsk", "Kazan", "Yekaterinburg"]
    },
    Turkey: {
      description: "Turkey, bridging Europe and Asia, offers a unique study abroad experience. With its rapidly developing higher education system, rich history, and strategic location, Turkey provides students with a blend of traditional and modern educational opportunities.Turkey, the capital city of Istanbul, is a picturesque place. With lovely weather and scenic beauty all around, the city will engulf the soul of anyone who comes here. Turkey has postcard-like views and harbors the soul of Istanbul. If modernisation and ancient times could blend well then it has to be in Turkey. The beautiful constructions, the riverside places and the delicious cuisines, together melt down to make Turkey one of the most favorite tourist destinations in the world. MBBS aspirants who go to Turkey to study MBBS get the advantage of a flawless education system along with mesmerizing trips across the country. Pursuing MBBS from Turkey gives Indian students an opportunity to study in some of the top medical universities in the world. It also gives them a taste of high-quality education since the board of education in Turkey is extremely vigilant. Indian students prefer to study MBBS in Turkey because of numerous programmes and affordable tuition fees. The MBBS program is offered in different disciplines like Health Management,  Veterinary Medicine, Complementary and Alternative Medicine,  Pharmacy, Dentistry, Nursing, Midwifery Nutrition and Dietetics, Human Medicine, Physiotherapy, Biomedicine, Public Health, Health Sciences. In the following paragraphs, you will come to know about the various aspects of studying MBBS in Turkey. MBBS Duration in Turkey The duration to study MBBS in Turkey is 6 years which is almost the same in the different countries. This duration also includes an internship program at the end of the 5 years. The first 5 years are going to be based on theoretical studies but yes, lab visits will also be there. The internship program will be a great exposure to hone the practical skills of becoming a doctor. Studying MBBS in Turkey provides Indian students with access to several of the greatest and highest-quality universities in the world. Because of the low tuition fees, not only do Indian students want to study MBBS in Turkey, but students from all over the world choose Turkey for their MBBS Degree Program, Here are a few reasons why you should choose Turkey as your destination to study MBBS: In Turkey, high-quality education is available. More than 200 universities, including medical schools, are located in Turkey that provide an excellent education. In the QS World University Rankings, Turkey has nearly ten universities included, and its educational system is placed 43rd in the world. Several state-funded universities make one of the most prominent reasons to study MBBS in Turkey. No entrance examination is required to take admission in the Turkish MBBS schools. You can get admission to Turkish MBBS schools without IELTS/TOEFL. Studying in a low-cost country is a great advantage for international students. The overall cost of MBBS programs in Turkey is very reasonable. Unlike other European countries, life in Turkey is quite affordable, both in terms of living expenses and academic expenses. Turkish universities offer MBBS degrees in both Turkish and English, making international students' lives much easier. International students can apply for MBBS scholarships in Turkey. The Turkish government provides numerous scholarships to international students. More than 5000 scholarships are available to students from 160 countries. All undergraduate, graduate, and MBBS programs are eligible for the scholarships. Study gap is accepted here. After Study PR opticians are available here. The highest visa ratio is an added advantage. Turkish folks are extremely friendly and welcoming. Citizens assist students with the utmost sincerity and friendliness. Students will get a chance to mingle with various global cultures. Turkey is unquestionably a melting pot of civilizations. This country has numerous deep-rooted civilizations, and students from all cultures and races study here, allowing you to learn and discover different cultures while studying in a safe and peaceful atmosphere.",
      keyPoints: [
        "Rapidly improving higher education system with many English-taught programs",
        "Unique cultural experience at the crossroads of Europe and Asia",
        "Affordable living costs and competitive tuition fees",
        "Beautiful landscapes and Mediterranean climate",
        "Growing economy offering internship and career opportunities"
      ],
      popularCities: ["Istanbul", "Ankara", "Izmir", "Antalya", "Eskişehir"]
    },
    Romania: {
      description: "Romania, known for its picturesque landscapes and rich history, offers a compelling destination for students interested in high-quality yet affordable education. Romanian universities have gained a reputation in Europe for their excellence in medical, engineering, and technology fields, with many programs available in English and internationally recognized. Medical universities like Carol Davila University of Medicine and Pharmacy in Bucharest are well-regarded for their MBBS programs, which span six years and include an internship, allowing students to acquire both theoretical knowledge and practical clinical experience. Romania is also appealing due to its low tuition fees and affordable living costs, which make it one of the most budget-friendly options for studying abroad in Europe. The Romanian government and universities provide numerous scholarships to support international students financially. Romanian culture is a unique blend of Eastern and Western European traditions, allowing students to experience diverse cultural influences while studying in a peaceful and safe environment. Romania’s scenic landscapes, from the Carpathian Mountains to the Black Sea coastline, provide ample opportunities for outdoor activities and exploration. The friendly local population and vibrant student communities ensure a welcoming environment, and cities like Bucharest, Cluj-Napoca, and Timișoara offer a dynamic social life with ample amenities and cultural experiences. The education system in Romania is aligned with European standards, making degrees widely recognized and respected, especially in the medical field. Overall, studying in Romania not only provides a valuable education but also an enriching cultural immersion in a safe and affordable setting.",
      keyPoints: [
        "High-quality education system, particularly in medicine, engineering, and technology fields",
        "Affordable tuition fees and living costs compared to Western European countries",
        "English-taught programs are widely available, making education accessible to international students",
        "Extensive scholarship options from the government and universities for financial support",
        "Vibrant and safe cultural environment with a mix of Eastern and Western European influences",
        "Stunning natural landscapes and historical sites provide unique travel and exploration opportunities",
        "Friendly local population and international student communities create a welcoming atmosphere",
        "Universities like Carol Davila offer globally recognized degrees aligned with European standards",
      ],
      popularCities: ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța"]
    }
  }

  const countryImages = {
    Russia: pic1,
    Turkey: pic2,
    Romania: pic3,
  };

  return (
    <Layout>
      <div className="bg-white p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Study Abroad Destinations</h1>
          <p className="text-xl text-gray-700 mb-6">
            Explore the unique educational opportunities and cultural experiences offered by our partner countries: Russia, Turkey, and Romania.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(countries).map((country) => (
              <button
                key={country}
                className={`px-4 py-2 rounded-md ${
                  activeCountry === country
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCountry(country)}
              >
                {country}
              </button>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-4">Study in {activeCountry}</h2>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-6">{countries[activeCountry].description}</p>
                <h3 className="text-2xl font-semibold mb-3">Key Points</h3>
                <ul className="list-disc pl-6 mb-6">
                  {countries[activeCountry].keyPoints.map((point, index) => (
                    <li key={index} className="text-gray-700 mb-2">{point}</li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={countryImages[activeCountry]}
                  alt={`Study in ${activeCountry}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-3">Popular Cities for Students</h3>
            <div className="flex flex-wrap gap-2">
              {countries[activeCountry].popularCities.map((city, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {activeCountry === 'Russia' && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-3xl font-semibold mb-4">Scholarship</h2>
              <p className="text-gray-700 mb-4">
                The Russian Government Scholarship presents an incredible opportunity for Indian students to pursue world-class education at top Russian universities without the burden of tuition fees. Fully funded by the Russian government, this scholarship allows you to study at prestigious institutions like Saint Petersburg State Medical University, Buryat State University, and many others, all while receiving significant financial support.
              </p>
              <h3 className="text-2xl font-semibold mb-3">What's Covered by the Scholarship?</h3>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-gray-700 mb-2">Tuition Fees: Your entire education will be funded, meaning you won't have to pay for any course-related costs.</li>
                <li className="text-gray-700 mb-2">Accommodation: The scholarship often provides access to discounted or free dormitory accommodations, helping you manage living expenses without worrying about housing costs.</li>
                <li className="text-gray-700 mb-2">Monthly Stipend: Students are provided with a monthly stipend between INR 2,000 and INR 10,000, which can help cover daily living expenses such as food, travel, and personal needs.</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-3">Available Fields of Study</h3>
              <p className="text-gray-700 mb-4">
                This scholarship gives you access to a wide range of academic programs. Whether you're interested in medicine, engineering, computer science, arts, or other fields, you can choose from an array of courses offered at leading Russian universities.
              </p>
              <p className="text-gray-700 mb-4">
                Many programs are available in English, making it easier for international students to study in Russia without language barriers. For those interested in mastering the Russian language, courses are also offered in Russian, providing an immersive experience in one of the world's most unique and rich languages.
              </p>
              <h3 className="text-2xl font-semibold mb-3">Academic Excellence & Research Opportunities</h3>
              <p className="text-gray-700 mb-4">
                Russian universities are known for their cutting-edge educational facilities and strong focus on research. By studying at these institutions, you will have access to state-of-the-art laboratories, libraries, and technological resources, giving you the tools needed for academic and professional success. Moreover, you'll have the chance to engage in innovative research, working alongside talented professors and experts in your field, which will further enhance your academic and career profile.
              </p>
              <h3 className="text-2xl font-semibold mb-3">Cross-Cultural Exposure and International Community</h3>
              <p className="text-gray-700 mb-4">
                One of the most rewarding aspects of this scholarship is the opportunity to study in a truly international environment. Russia hosts a vibrant community of students from all over the world, allowing you to build a global network of connections. As you interact with peers from different backgrounds, you'll not only gain knowledge in your field of study but also develop cross-cultural understanding and intercultural communication skills, which are invaluable in today's interconnected world.
              </p>
              <h3 className="text-2xl font-semibold mb-3">A Pathway to Future Career Opportunities</h3>
              <p className="text-gray-700 mb-4">
                The Russian Government Scholarship is more than just financial support; it's an investment in your future. Studying at a top-ranked Russian institution will provide you with a degree that is recognized worldwide, opening doors to employment opportunities not only in India but also internationally. The skills, knowledge, and experiences gained during your time in Russia will set you apart in the competitive job market, whether you choose to work in your field of study or pursue further education.
              </p>
              <h3 className="text-2xl font-semibold mb-3">Why Apply?</h3>
              <p className="text-gray-700 mb-4">
                This scholarship offers a once-in-a-lifetime opportunity to immerse yourself in a rich academic environment, receive a high-quality education at no cost, and build a future that's full of promise. Beyond the academic benefits, you will be exposed to the rich culture, history, and lifestyle of Russia, gaining experiences that will shape your personal and professional growth for years to come.
              </p>
              <p className="text-gray-700 mb-4">
                If you're ready to take the next step in your educational journey, this scholarship could be the perfect gateway to an unforgettable international experience. Apply now and unlock a world of opportunities in Russia!
              </p>
            </div>
          )}

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Why Choose {activeCountry}?</h3>
            <p className="text-gray-700">
              {activeCountry === 'Russia' && (
                "Choosing Russia for your studies means immersing yourself in a country with a rich academic tradition, cutting-edge research facilities, and a unique cultural landscape. You'll have the opportunity to learn from world-class professors, experience the famous Russian hospitality, and potentially learn the Russian language, opening doors to a wealth of literature, science, and business opportunities."
              )}
              {activeCountry === 'Turkey' && (
                "Opting for Turkey as your study destination offers you a chance to experience a country where East meets West. You'll benefit from a high-quality education system, often at a fraction of the cost compared to many Western countries. Turkey's strategic location and growing economy also provide excellent networking and career opportunities, especially for those interested in international business or diplomacy."
              )}
              {activeCountry === 'Romania' && (
                "Selecting Romania for your studies allows you to receive a top-quality European education at highly affordable rates. Romania is particularly renowned for its excellent medical schools, engineering programs, and IT education. You'll also enjoy a safe, friendly environment, beautiful landscapes ranging from the Carpathian Mountains to the Black Sea coast, and a chance to explore Europe from a central location."
              )}
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Ready to start your educational journey in {activeCountry}? Let us guide you through the process.
            </p>
            <button onClick={() => setShowCounselingPopup(true)} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
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
              <ToastContainer />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default CountriesSection