import React, { useState } from 'react'
import Layout from '../components/Layout'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Import statements for images...
import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpg"
import t3 from "../assets/t3.jpg"
import t4 from "../assets/t4.jpg"
import t5 from "../assets/t5.jpg"
import t6 from "../assets/t6.jpg"
import t7 from "../assets/t7.jpg"
import t8 from "../assets/t8.jpg"
import t9 from "../assets/t9.jpg"
import r1 from "../assets/r1.jpg"
import r2 from "../assets/r2.jpg"
import r3 from "../assets/r3.jpg"
import r4 from "../assets/r4.jpg"
import r5 from "../assets/r5.jpg"
import r6 from "../assets/r6.jpg"
import ru2 from "../assets/ru2.jpeg"
import ru7 from "../assets/ru7.jpg"
import ru8 from "../assets/ru8.jpg"
import ru9 from "../assets/ru9.jpg"
import ru10 from "../assets/ru10.jpg"
import ru11 from "../assets/ru11.jpg"
import ru12 from "../assets/ru12.jpg"
import ru13 from "../assets/ru13.jpg"
import ru14 from "../assets/ru14.jpg"
import ru15 from "../assets/ru15.jpg"
import ru16 from "../assets/ru16.jpg"
import ru17 from "../assets/ru17.jpg"
import ru18 from "../assets/ru18.jpg"
import ru19 from "../assets/ru19.jpg"
import ru20 from "../assets/ru20.jpg"
import ru21 from "../assets/ru21.jpg"
import ru22 from "../assets/ru22.jpg"
import ru23 from "../assets/ru23.jpg"

export default function Component() {
  const [activeCountry, setActiveCountry] = useState('Russia')
  const [showCounselingPopup, setShowCounselingPopup] = useState(false)
  const [selectedUniversity, setSelectedUniversity] = useState(null)
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
      const response = await fetch('https://freelance-backend-c6kl.onrender.com/submit', {
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
        console.log(`${result.error}`)
      }
    } catch (error) {
      console.error('Fetch error:', error); 
      toast.error('An error occurred. Please try again.')
    }
  }

  const universities = {
    Russia: [
      {
        name: "Ural State Medical University",
        image: ru7,
        description: "Leading medical education in Orenburg.",
        details: [
          {
            title: "Overview",
            items: [
              "Established: 1930",
              "Location: Yekaterinburg, Russia",
              "Type: Public University",
              "Students: Over 6,000 (including 300+ international students)"
            ]
          },
          {
            title: "Affiliations",
            items: [
              "Medical Council of India (MCI)",
              "World Health Organization (WHO)",
              "United Nations Educational, Scientific, and Cultural Organization (UNESCO)",
              "Ministry of Science & Higher Education of the Russian Federation"
            ]
          },
          {
            title: "Ranking",
            items: [
              "10th among Russian Medical Universities",
              "Top 100 in RAEX Russian University ranking"
            ]
          },
          {
            title: "MBBS Program Highlights",
            items: [
              "Duration: 6 years (5 years academic + 1-year internship)",
              "Medium of Instruction: English",
              "Eligibility: 50% in Physics, Chemistry, Biology (Class 12), NEET qualifying score required",
              "Recognition: NMC (MCI), WHO approved"
            ]
          },
          {
            title: "Special Facilities",
            items: [
              "Affordable tuition fees, government subsidies",
              "Advanced learning tools, secure campus",
              "International partnerships with institutions in China, Denmark, and Hungary"
            ]
          },
          {
            title: "Additional Benefits",
            items: [
              "Hostel: Indian food and Indian wardens available",
              "Internship: Partnered with hospitals for practical training",
              "Part-Time Jobs: Options available for students",
              "Cultural Support: Friendly campus environment with transportation facilities"
            ]
          }
        ]
      },
      {
        name: "Sechenov University",
        image: ru2,
        description: "Comprehensive medical education in Siberia.",
        details: [
          {
            title: "Overview",
            items: [
              "Location: Kemerovo Oblast, Russia",
              "Established: 1955",
              "Type: Public University"
            ]
          },
          {
            title: "Recognition",
            items: [
              "National Medical Commission (NMC) - India",
              "Ministry of Health of Russia",
              "Ministry of Science and Higher Education of Russia",
              "WHO approved"
            ]
          },
          {
            title: "Ranking",
            items: [
              "Country Rank: 331",
              "World Rank: 7985"
            ]
          },
          {
            title: "MBBS Program Highlights",
            items: [
              "Duration: 6 years (including internship)",
              "Medium of Instruction: English",
              "Eligibility: 50% in Physics, Chemistry, Biology (Class 12), NEET score, Age 17+ by July 31 of admission year"
            ]
          },
          {
            title: "Facilities",
            items: [
              "On-campus Central Scientific Library",
              "Research Laboratory",
              "Graduate Employment Promotion Center",
              "Separate hostel facilities for boys and girls",
              "24/7 security and campus Wi-Fi"
            ]
          },
          {
            title: "Advantages of Studying MBBS",
            items: [
              "Affordable Tuition: No donation required, reasonable fees",
              "International Student Support: English medium, friendly campus, Indian cuisine hostel options",
              "Quality Education: High standards, experienced faculty, modern infrastructure",
              "Cultural Exposure: Diverse international community, cross-cultural exchange opportunities"
            ]
          }
        ]
      },
      {
        name: "Kemerovo State Medical University",
        image: ru8,
        description: "High-quality training in medical sciences.",
        details: [
          {
            title: "Overview",
            items: [
              "Location: Kirov, Russia",
              "Established: 1987",
              "Type: Public University"
            ]
          },
          {
            title: "Recognition",
            items: [
              "WHO",
              "National Medical Commission (NMC) - India",
              "Ministry of Health of Russia"
            ]
          },
          {
            title: "Ranking",
            items: [
              "Country Rank: 290",
              "World Rank: 6479"
            ]
          },
          {
            title: "MBBS Program Details",
            items: [
              "Duration: 6 years (5 years coursework + 1-year internship)",
              "Medium of Instruction: English",
              "Eligibility: 50% in Physics, Chemistry, Biology (Class 12), Qualifying NEET score, Age 17+ by admission year"
            ]
          },
          {
            title: "Campus Facilities",
            items: [
              "Well-equipped classrooms and laboratories",
              "Comprehensive library, sports complex, and health services",
              "Separate hostels for male and female students with a mess facility"
            ]
          },
          {
            title: "Why Study MBBS at Kirov State Medical University?",
            items: [
              "Affordable Education: Economically feasible with flexible fees",
              "International Student Support: English medium, diverse cultural environment",
              "Modern Infrastructure: Updated labs, ventilated rooms, high-quality technical resources",
              "Experienced Faculty: Qualified staff dedicated to student development"
            ]
          }
        ]
      },
      {
        name: "Kirov State Medical University",
        image: ru9,
        description: "Prominent medical training in Samara.",
        details: [
          {
            title: "Overview",
            items: [
              "Location: Samara, Russia (857 km from Moscow)",
              "Established: 1919",
              "Recognition: ECFMG, WDOMS, FAIMER, NMC, AMC, GMC (PLAB)",
              "Medium of Instruction: English",
              "Course Duration: 6 years (including internship)",
              "Eligibility: 50% in Class 12 (PCB), NEET qualified",
              "Intake Period: September"
            ]
          },
          {
            title: "Faculties",
            items: [
              "Faculty of General Medicine",
              "Faculty of Dentistry",
              "Faculty of Preventive Medicine",
              "Faculty of Nursing Education",
              "Faculty of Vocational Education",
              "Faculty of Innovative Development"
            ]
          },
          {
            title: "Why Choose Samara State Medical University?",
            items: [
              "Affordable tuition with high-quality education",
              "Largest campus in Samara",
              "Partnerships with 40+ international institutions",
              "Comfortable student life with Indian food options",
              "Cultural and sports activities"
            ]
          },
          {
            title: "Life in Samara",
            items: [
              "Weather: Clear skies, short dry summers, and cool, dry winters",
              "Popular Places: Samara Art Museum, Stalin's Bunker, Samara Zoological Park, Kubychev Square, Leningradskaya Street"
            ]
          }
        ]
      },
      {
        name: "Samara State Medical University",
        image: ru10,
        description: "Excellence in multidisciplinary education.",
        details: [
          {
            title: "Overview",
            items: [
              "Student Population: 32,000 students, with 1,800 international students from 76 countries, including 150+ Indian students",
              "Academic Programs: Offers Bachelor's and Master's programs in English across 110 fields, with over 850 foreign students in medicine",
              "Faculty: 1,800 teaching staff, including 200 Doctorate holders and 800 with scientific credentials"
            ]
          },
          {
            title: "Facilities and Campus Life",
            items: [
              "Student Accommodations: Four dormitories for 3,000+ international students",
              "Recreational Facilities: Fitness centers, cafes, dance clubs, and sports centers, including the renowned Svetlana Khorkina Sports Complex",
              "Resources: 39 scientific centers, 4,000 computers, and a library with 7 reading halls"
            ]
          },
          {
            title: "Additional Highlights",
            items: [
              "Recognition and Innovation: Part of the Shanghai Cooperation Organization (SCO) University, with specialized fields like nanotechnology",
              "Cultural and Social Infrastructure: Includes a medical clinic, Saint Gabriel's Church, museums, and a cultural center for a rich socio-cultural experience"
            ]
          }
        ]
      },
      {
        name: "Belgorod State Medical University",
        image: ru11,
        description: "Dedicated to medical education and research.",
        details: [
          {
            title: "Overview",
            items: [
              "Location: Omsk, Russia",
              "Faculty: 59 departments with over 73% of staff holding advanced degrees (100+ full professors, 300+ associate professors)",
              "Global Collaborations: Partnerships with universities in Europe, the U.S., Japan, and other countries",
              "Recognitions: ECFMG, WDOMS, FAIMER, NMC, AMC, GMC PLAB",
              "Language of Instruction: English",
              "Program Duration: 6 years (including internship)",
              "Annual Tuition Fee: $4,200 from the second year; total package approximately $27,200",
              "Intake Period: September"
            ]
          },
          {
            title: "Facilities and Student Life",
            items: [
              "Library: Largest among Russian medical universities, with over 600,000 resources and a computer-equipped hall",
              "Clinical Training: Conducted in municipal hospitals with state-of-the-art equipment",
              "Student Life: Well-equipped gyms, ski centers, and sports facilities for a healthy lifestyle",
              "Hostel: Comfortable dormitories available for local and international students"
            ]
          },
          {
            title: "Why Choose Omsk State Medical University",
            items: [
              "No capitation fees",
              "Affordable fees with hostel and insurance included",
              "Quality education with a balance of academic and physical training",
              "Located in the cultural city of Omsk, offering libraries, museums, theaters, and iconic sites"
            ]
          }
        ]
      },
      {
        name: "Tver State Medical University",
        image: ru12,
        description: "Well-rounded medical training programs.",
        details: [
          {
            title: "Overview",
            items: [
              "Established: 1936",
              "Type: Government",
              "Location: Tver, Russia",
              "Intake: September",
              "Duration: 6 years (including internship)",
              "Medium of Instruction: English",
              "Recognition: WDOMS, ECFMG, FAIMER, NMC (MCI), Medical Council of Canada, and more"
            ]
          },
          {
            title: "Faculties",
            items: [
              "General Medicine",
              "Dental Medicine",
              "Pediatrics",
              "Pharmacy",
              "Advanced Nursing Education",
              "Postgraduate Studies"
            ]
          },
          {
            title: "Admission Eligibility",
            items: [
              "Academic: Minimum 50% in Physics, Chemistry, Biology in Class 12; passing marks in English",
              "Age: Minimum 17 years by December 31 in the admission year",
              "Exam: NEET qualified"
            ]
          },
          {
            title: "Student Life",
            items: [
              "Hostels: Four hostels with Wi-Fi, air-conditioning, Indian food, and police security",
              "Activities: Annual cultural events, Indian festival celebrations, sports tournaments"
            ]
          },
          {
            title: "Benefits",
            items: [
              "Affordable fees",
              "Global recognition of the degree",
              "English-medium instruction",
              "Indian mess facility available",
              "Eligibility for PLAB, USMLE, and other global licensing exams"
            ]
          }
        ]
      },
      {
        name: "Mari State Medical University",
        image: ru13,
        description: "Prominent medical institution in Mari El.",
        details: [
          {
            title: "Overview",
            items: [
              "Established: 1972",
              "Location: Yoshkar-Ola, Mari El Republic, Russia",
              "Type: Government University",
              "Medium of Instruction: English",
              "Duration: 6 years (including internship)",
              "Recognition: ECFMG, WDOMS, FAIMER, NMC (MCI), and others"
            ]
          },
          {
            title: "Faculties",
            items: [
              "General Medicine",
              "Pediatrics",
              "Dentistry",
              "Preventive Care",
              "Clinical Psychology",
              "Pharmacy & Nursing"
            ]
          },
          {
            title: "Admission Eligibility",
            items: [
              "Academic: 50% in Class 12 with PCB",
              "Age: 17 years or above",
              "Exam: NEET qualified (50th percentile for general/EWS, 40th for SC/ST/OBC)"
            ]
          },
          {
            title: "Admission Procedure",
            items: [
              "Submit the admission form with required documents.",
              "Receive an acceptance letter.",
              "Apply for a student visa.",
              "Complete formalities upon arrival."
            ]
          },
          {
            title: "Required Documents",
            items: [
              "Class 10 and 12 certificates",
              "NEET scorecard",
              "Passport and photos",
              "Medical test report (HIV negative)"
            ]
          },
          {
            title: "Fee Structure (2024-25)",
            items: [
              "Tuition: $32,500 (approx. ₹26.65 lakh total)",
              "Includes: Tuition, hostel, medical insurance, study materials, MCI coaching, airport transfer, and other services."
            ]
          },
          {
            title: "Student Life and Facilities",
            items: [
              "Hostels: Well-furnished rooms shared by 2-3 students, central air-conditioning, Wi-Fi, Indian mess.",
              "Activities: Sports complex, scientific clubs, cultural events, volunteer work, youth forums.",
              "Festivals: Indian Independence Day, Diwali, Holi, Eid, and other celebrations."
            ]
          },
          {
            title: "Benefits of Studying at Mari State University",
            items: [
              "Affordable fees",
              "Internationally recognized degree",
              "English-medium instruction",
              "No entrance exams like IELTS/TOEFL",
              "Comprehensive campus facilities"
            ]
          }
        ]
      },
      {
        name: "Orenburg State Medical University",
        image: ru14,
        description: "Innovative medical education in Orenburg.",
        details: [
          {
            title: "Overview",
            items: [
              "Establishment & Location: Founded in 1944, OrSMU is a top-ranked government medical university in Orenburg, Russia.",
              "Programs Offered: Bachelor's, Master's, and Doctorate degrees in various fields of medicine.",
              "Faculty & Facilities: Highly qualified faculty, advanced labs, a library, and skill labs provide hands-on training. The university attracts students worldwide, especially from India.",
              "Recognition: Recognized by ECFMG, WDOMS, FAIMER, NMC, GMC PLAB.",
              "Medium of Teaching: English.",
              "Course Duration: MBBS - 6 years, including an internship."
            ]
          },
          {
            title: "Fee Structure (2024-25)",
            items: [
              "Tuition: $6,000/year.",
              "Hostel & Mess: Hostel included in 1st-year tuition, mess fee $1,500/year.",
              "Total Fees: ~$37,500 (₹30.62 lakh) for the entire course."
            ]
          },
          {
            title: "Eligibility & Admission",
            items: [
              "Criteria: 50% in Class 12 (PCB), NEET qualified, minimum age 17, free from contagious diseases.",
              "Process: Submit application, pay fees, receive admission confirmation, visa processing, and fly to Russia."
            ]
          },
          {
            title: "Student Life",
            items: [
              "Accommodation: 3 hostels, one dedicated to Indian students with Indian food options.",
              "Sports: Facilities for aerobics, swimming, basketball, soccer, etc.",
              "City: Orenburg, known for its location between Europe and Asia, has a continental climate and famous sites like Caravanserai and Holy Trinity Convent."
            ]
          },
          {
            title: "Why Choose OrSMU?",
            items: [
              "No entrance exams or donations required.",
              "Affordable fees, English-medium education.",
              "Degree recognized worldwide, including in India after FMGE clearance."
            ]
          },
          {
            title: "Highlights",
            items: [
              "Provides quality education in general medicine",
              "Emphasizes research and development in medical sciences",
              "Offers modern facilities for practical training"
            ]
          }
        ]
      },
      {
        name: "Orel State Medical University",
        image: ru15,
        description: "Specializes in medical and dental education.",
        details: [
          {
            title: "Overview",
            items: [
              "Established: 1931",
              "Location: Oryol, Russia",
              "Type: Government University",
              "Duration: 6 years (including internship)",
              "Medium of Instruction: English",
              "Recognitions: NMC, FAIMER, WDOMS, ECFMG",
              "Intake Period: September",
              "NEET Requirement: Yes"
            ]
          },
          {
            title: "Faculties",
            items: [
              "Faculty of Medicine",
              "Faculty of Pharmacy",
              "Faculty of Dentistry",
              "Faculty of Pediatrics"
            ]
          },
          {
            title: "Admission Eligibility",
            items: [
              "Academic: 50% in Class 12 (PCB) for unreserved categories, 40% for reserved categories",
              "Age: 17 years or above",
              "NEET: Valid score card (50th percentile for unreserved, 40th for reserved categories)"
            ]
          },
          {
            title: "Admission Procedure",
            items: [
              "1. Submit application form with required documents.",
              "2. Receive admission letter.",
              "3. Apply for student visa.",
              "4. Pay tuition fees.",
              "5. Travel to Russia and complete university formalities."
            ]
          },
          {
            title: "Required Documents",
            items: [
              "Class 10 and 12 certificates",
              "NEET scorecard",
              "Passport and photos",
              "Medical test report (HIV negative)"
            ]
          },
          {
            title: "Fee Structure",
            items: [
              "Affordable Fees: Covers tuition and hostel fees (details available upon request)"
            ]
          },
          {
            title: "Student Life",
            items: [
              "Hostels: 9 hostels with essential amenities, CCTV surveillance, and kitchen facilities.",
              "Sports: Regular sports activities promoting a healthy lifestyle.",
              "Library: Extensive library with 8 lakh+ books for academic support.",
              "Student Welfare: A strong student support system ensuring a smooth transition to life in Russia."
            ]
          },
          {
            title: "Why Study at Orel State University?",
            items: [
              "Affordable fees with high-quality medical education.",
              "Simplified admission process with no donations or capitation fees.",
              "Well-equipped labs, experienced faculty, and global recognition for MBBS degree.",
              "Safe and comfortable campus life with good student facilities."
            ]
          },
          {
            title: "Programs",
            items: [
              "Offers programs in general medicine and dentistry",
              "Aims to produce skilled medical practitioners for various regions",
              "Focuses on practical skills development"
            ]
          }
        ]
      },
      {
        name: "Bashkir State Medical University",
        image: ru16,
        description: "Leading medical institution in Bashkortostan.",
        details: [
          {
            title: "Overview",
            items: [
              "Established: 1932 in Ufa, Russia",
              "Type: Government Medical University",
              "Course Duration: 6 years (5 years of study + 1 year internship)",
              "Medium of Teaching: English",
              "Recognitions: WDOMS, ECFMG, FAIMER, NMC, Medical Council of Canada",
              "Intake Period: September",
              "NEET Requirement: Yes"
            ]
          },
          {
            title: "Fee Structure",
            items: [
              "Tuition: ₽2,82,186 per year",
              "Hostel: ₽14,400 per year",
              "Total Fees: ₽18,35,561 (₹18.35 lakh) for the entire course"
            ]
          },
          {
            title: "Eligibility",
            items: [
              "50% in Physics, Chemistry, Biology (Class 12)",
              "Minimum age of 17 on December 31st of the admission year",
              "NEET qualification (50th percentile for general/EWS, 40th percentile for reserved categories)"
            ]
          },
          {
            title: "Admission Process",
            items: [
              "Fill out the online application.",
              "Submit required documents (Class 10 & 12 certificates, NEET score, passport).",
              "Receive an admission letter, apply for a student visa, and arrange travel."
            ]
          },
          {
            title: "Why Choose BSMU?",
            items: [
              "Affordable tuition and hassle-free admission process.",
              "1500+ international students, with strong facilities for education and student life.",
              "Training in both English and Russian languages.",
              "Recognized degree accepted for FMGE exam in India to practice medicine."
            ]
          },
          {
            title: "Campus Life",
            items: [
              "5 hostels with Wi-Fi and security.",
              "Sports and extracurricular activities (basketball, soccer, chess, etc.).",
              "Well-equipped laboratories, classrooms, and libraries."
            ]
          },
          {
            title: "Key Features",
            items: [
              "Top medical school in the region",
              "Offers specialized training in medicine, pharmacy, and preventive health",
              "Known for its research contributions"
            ]
          }
        ]
      },
      {
        name: "St. Petersburg State University",
        image: ru17,
        description: "Comprehensive education with a medical faculty.",
        details: [
          {
            title: "Overview",
            items: [
              "Established: 1724",
              "Location: St. Petersburg, Russia",
              "Rankings: Top 300 globally, 2nd in Eastern Europe and Central Asia (QS Rankings), 2nd in Russia for Graduate Employability",
              "Fields of Study: Multidisciplinary academic programs, combining theoretical and practical knowledge"
            ]
          },
          {
            title: "Notable Alumni",
            items: [
              "9 Nobel Prize winners in various fields, including Physics, Medicine, and Literature",
              "Graduates include two Russian Presidents and six government leaders"
            ]
          },
          {
            title: "International Students",
            items: [
              "Over 5,000 international students from 121 countries",
              "Offers 6 double degree programs and 27 Master's programs in English, German, Spanish, French, and Italian"
            ]
          },
          {
            title: "International Cooperation",
            items: [
              "Partnerships with 500+ universities across 81 countries",
              "Active member of global academic organizations (e.g., Coimbra Group)",
              "10 representative offices in countries including China, South Korea, Spain, and Uzbekistan"
            ]
          },
          {
            title: "Research & Innovation",
            items: [
              "Research across almost all fields with cutting-edge facilities in the Research Park",
              "Opportunities for students to receive research grants and access state-of-the-art labs"
            ]
          },
          {
            title: "Student Life",
            items: [
              "Over 700 events annually, including conferences, sports, and cultural activities",
              "21 types of sports available at 30 university venues",
              "Opportunities to join creative clubs, volunteering projects, and the international students association"
            ]
          },
          {
            title: "Medical Faculty",
            items: [
              "Offers a wide array of programs",
              "Reputable medical faculty with high academic and research standards",
              "Provides opportunities for interdisciplinary studies"
            ]
          }
        ]
      },
      {
        name: "Volgograd State University",
        image: ru18,
        description: "Multidisciplinary education with medical programs.",
        details: [
          {
            title: "Overview",
            items: [
              "Established: 1935 (as Stalingrad Medical Institute, became a university in 2003)",
              "Location: Volgograd, Russia",
              "Course Duration: 6 years (MBBS)",
              "Medium of Instruction: English (for international students)",
              "Recognized: Listed in WHO, FAIMER, and MCI India",
              "Tuition Fees: $5000/year (English medium), $3500/year (Russian medium)",
              "Living Costs: $100-$150/month",
              "Total Course Fee: ₹27,48,000 for 6 years"
            ]
          },
          {
            title: "Eligibility",
            items: [
              "Minimum 50% in Class 12 (Physics, Chemistry, Biology)",
              "NEET qualification",
              "Minimum age of 17 by December 31st of the admission year"
            ]
          },
          {
            title: "Hostel and Campus Life",
            items: [
              "7 hostels with separate accommodation for boys and girls",
              "Shared and private rooms with Wi-Fi, cafeterias, and snack bars",
              "Cultural diversity and national festival celebrations"
            ]
          },
          {
            title: "Why Choose VSMU?",
            items: [
              "Affordable fees and low living costs",
              "Globally recognized degree",
              "English-medium instruction for ease of learning",
              "Cultural diversity, including many Indian students",
              "High-quality education with experienced faculty"
            ]
          },
          {
            title: "Admission Process",
            items: [
              "Open from May 1st to August 30th",
              "Easy, hassle-free admission assistance provided"
            ]
          },
          {
            title: "Medical Faculty",
            items: [
              "Strong reputation for its medical faculty",
              "Particularly known for research and community health initiatives",
              "Offers diverse medical programs"
            ]
          }
        ]
      },
      {
        name: "Yaroslavl State Medical University",
        image: ru19,
        description: "Renowned for medical and healthcare education.",
        details: [
          {
            title: "Overview",
            items: [
              "Established: 1944",
              "Location: Yaroslavl City, Russia (280 km from Moscow)",
              "Climate: Summer avg. +28ºC (83ºF), Winter avg. -15ºC (5ºF)",
              "Recognition: WHO, MCI (Medical Council of India), World Directory of Medical Schools"
            ]
          },
          {
            title: "Faculties & Departments",
            items: [
              "General Medicine Faculty",
              "Pediatric Faculty",
              "Pharmacy Faculty",
              "Stomatology Faculty",
              "Pre-Education Study Faculty",
              "Additional Professional Education Faculty"
            ]
          },
          {
            title: "Education at YSMU",
            items: [
              "Around 4,500 students, including international students",
              "57 departments offering world-class medical training",
              "Cutting-edge technology and modern facilities for high-quality education"
            ]
          },
          {
            title: "Fee Structure (MBBS)",
            items: [
              "Tuition Fees: 250,000 Rubles/year",
              "Hostel Fees: 20,000 Rubles/year",
              "Medical Insurance: 5,000 Rubles/year",
              "Administration Fees: 8,000 Rubles/year",
              "Medical Checkup: $100/year"
            ]
          },
          {
            title: "Facilities",
            items: [
              "Digital classrooms with projectors and LEDs",
              "Extensive library with internet and database access",
              "Sports centers, five hostels, student healthcare center, medical plants garden, and a summer camp on the Volga River"
            ]
          },
          {
            title: "International Students",
            items: [
              "Students from over 40 countries, including India, Palestine, Syria, Kenya, Morocco, and more"
            ]
          },
          {
            title: "Key Highlights",
            items: [
              "Offers affordable MBBS education",
              "Well-equipped with modern learning facilities",
              "Supports leadership and creative skills development for students"
            ]
          },
          {
            title: "Programs",
            items: [
              "Focuses on general medicine",
              "Has partnerships with various hospitals for clinical training",
              "Emphasizes practical experience in medical education"
            ]
          }
        ]
      },
      {
        name: "Kazan State Medical University",
        image: ru20,
        description: "One of the oldest and most prestigious medical schools.",
        details: [
          {
            title: "Overview",
            items: [
              "Location: Kazan, Russia",
              "Established: 1804",
              "Rank: 3rd among top Russian medical universities",
              "Recognitions: NMC, WHO",
              "Intake: September",
              "Duration: 5+1 years (5 years of classroom learning + 1 year internship)",
              "Medium of Instruction: English",
              "NEET Requirement: Yes, with qualifying marks",
              "FMGE Passing Percentage: High"
            ]
          },
          {
            titlePercentage: High"
            ]
          },
          {
            title: "Faculties",
            items: [
              "Faculty of General Medicine",
              "Faculty of Paediatrics",
              "Faculty of Dentistry",
              "Faculty of Pharmacy",
              "Faculty of Preventive Medicine",
              "Faculty of Nursing"
            ]
          },
          {
            title: "Fees & Cost",
            items: [
              "Tuition Fees: $5,000/year",
              "Living Costs: $160 - $250/month"
            ]
          },
          {
            title: "Admission Process",
            items: [
              "Apply Online: Submit documents (10th, 12th marksheets, passport, etc.)",
              "Get Invitation Letter: Notification of acceptance within 1-2 days",
              "Pay Fees: Complete payment after receiving confirmation",
              "Apply for Visa: Submit the invitation letter, passport, medical certificates, etc.",
              "Arrival in Russia: Pay first-year fees, share flight details for airport pickup",
              "Commencement of Classes: Complete registration within 3 days of arrival"
            ]
          },
          {
            title: "Documents Required",
            items: [
              "10th and 12th marksheets",
              "Transfer certificate",
              "Passport-size photographs",
              "Migration certificate",
              "Passport",
              "Medical insurance & HIV reports"
            ]
          },
          {
            title: "Key Highlights",
            items: [
              "Offers affordable education with excellent medical training",
              "High teacher-student ratio (1:15) for personalized attention",
              "Excellent global exposure with many international students",
              "Strong FMGE passing percentage, ensuring quality education"
            ]
          },
          {
            title: "Key Features",
            items: [
              "Offers high-quality education in multiple medical specialties",
              "Known for its research contributions",
              "Rich history in medical education"
            ]
          }
        ]
      },
      {
        name: "Kursk State Medical University",
        image: ru21,
        description: "A leader in Russian medical education.",
        details: [
          {
            title: "Overview",
            items: [
              "Established: February 7, 1935",
              "Location: Kursk, Russia",
              "Accredited by: WHO, GMC, JPA, MMC, and other medical boards",
              "International Students: 2600 from 47 countries",
              "Programs Offered: General Medicine (6 years), Pharmacy/Dentistry (5 years), Economics, Management, Social Work, Biotechnology (4 years)",
              "Languages of Instruction: Russian and English",
              "Tuition: Fixed for the entire duration",
              "Recognition: Listed among the top Russian universities and internationally recognized"
            ]
          },
          {
            title: "Key Features",
            items: [
              "Pre-Medical Course: 7-12 months for students with O-level or low A-level marks",
              "High-Quality Education: Focused on continuous professional development and innovative teaching methods",
              "Scientific Research: Strong emphasis on biomedical research and cooperation with global organizations",
              "Vibrant Campus: Located in Kursk city with easy access to amenities"
            ]
          },
          {
            title: "Student Services",
            items: [
              "Accommodation: Provided for all students",
              "Health Insurance: Included for international students",
              "Airport Pickup: Available for new students"
            ]
          },
          {
            title: "International Collaboration",
            items: [
              "KSMU is a member of several global medical and educational associations, offering programs accredited in 15 foreign countries"
            ]
          },
          {
            title: "Admission",
            items: [
              "Intake: September/October and February/March"
            ]
          },
          {
            title: "Highlights",
            items: [
              "Offers comprehensive programs in medicine",
              "Known for its emphasis on clinical training and research",
              "Provides modern facilities for medical education"
            ]
          }
        ]
      },
      {
        name: "Tambov State Medical University",
        image: ru22,
        description: "Innovative programs in medical sciences.",
        details: [
          {
            title: "Overview",
            items: [
              "Founded: 1843",
              "Location: Tambov, Russia",
              "Focus on modern education and research",
              "World-class infrastructure with modern facilities and sports complexes",
              "Offers a variety of courses, including MBBS, with a research-focused approach"
            ]
          },
          {
            title: "Key Highlights of MBBS",
            items: [
              "Duration: 6 years (including 1 year of apprenticeship)",
              "Fees: 4,200 USD/year for tuition and 600 USD/year for hostel",
              "Medium of Instruction: English",
              "Recognition: WHO and NMC-approved",
              "Intake: September",
              "Documents Required: 10th and 12th marksheets, passport, medical insurance, and more",
              "Living Costs: 160-250 USD/month"
            ]
          },
          {
            title: "Admission Procedure",
            items: [
              "Apply Online: Submit necessary documents",
              "Invitation Letter: Upon acceptance, receive an invitation letter",
              "Visa Application: Apply for a student visa with required documents",
              "Arrival and Registration: Pay the first year's fees and arrive in Russia",
              "Commencement of Classes: Register and start classes after arrival"
            ]
          },
          {
            title: "Campus Life",
            items: [
              "Tambov is a vibrant city, rich in culture and history, located near Moscow",
              "Students enjoy modern living with access to recreational facilities and a balanced life"
            ]
          },
          {
            title: "International Collaboration",
            items: [
              "The university collaborates with global institutions, providing students opportunities for internships and research"
            ]
          },
          {
            title: "Student Support",
            items: [
              "Eklavya Overseas assists with the admission process, visa applications, travel, accommodation, and coaching for the NMC Screening Test"
            ]
          },
          {
            title: "Programs",
            items: [
              "Offers a variety of programs in general medicine and related fields",
              "Modern facilities and a research-focused approach",
              "Emphasizes innovative teaching methods"
            ]
          }
        ]
      },
      {
        name: "Far Eastern Federal University",
        image: ru23,
        description: "Pioneering medical and scientific education in Russia's Far East.",
        details: [
          {
            title: "Overview",
            items: [
              "Location: Vladivostok, Eastern Russia",
              "Founded: 1899",
              "Recognition: ECFMG, WDOMS, FAIMER, NMC",
              "Medium of Instruction: English",
              "MBBS Duration: 6 years (5 years study + 1 year internship)",
              "NEET Requirement: Yes",
              "Tuition Fees: $31,800 for 6 years (~₹23.85 lakh)",
              "Living Costs: ₹8,000 – ₹10,000/month"
            ]
          },
          {
            title: "Faculties",
            items: [
              "School of Medicine",
              "School of Natural Sciences",
              "School of Economics and Management",
              "School of Engineering",
              "School of Humanities",
              "School of Law"
            ]
          },
          {
            title: "Admission Criteria",
            items: [
              "Eligibility: 50% in PCB in class 12",
              "NEET Score: Required with minimum percentile (50% general, 45% PwD, 40% SC/ST/OBC)",
              "Age: At least 17 years old"
            ]
          },
          {
            title: "Admission Process",
            items: [
              "Apply: Fill out and submit the admission form with documents",
              "Receive Invitation: After document evaluation, get an acceptance letter",
              "Visa: Apply for a student visa",
              "Travel: Pay first-year fees, travel, and complete university formalities"
            ]
          },
          {
            title: "Documents Required",
            items: [
              "Class 10th and 12th certificates",
              "NEET scorecard",
              "Birth certificate",
              "Passport-sized photos",
              "Valid passport",
              "Medical test report (including HIV negative)"
            ]
          },
          {
            title: "Campus Life",
            items: [
              "Accommodation: Double rooms, suites for 3-4 students",
              "Sports: Gym, fitness center, dance classes, athletics",
              "Campus Facilities: ATM, shopping center, medical center, internal transit"
            ]
          },
          {
            title: "Why Choose Far Eastern Federal University?",
            items: [
              "Over 120 years of educational excellence",
              "Cutting-edge medical facilities and research opportunities",
              "Safe, comfortable campus with comprehensive student services",
              "Vibrant student life with diverse extracurricular activities"
            ]
          }
        ]
      },
    ],
    Turkey: [
      {
        name: "Ankara University",
        image: t1,
        description: "Established in 1946, Ankara University is known for its strong programs in social sciences, medicine, and law.",
        details: "Ankara University's Faculty of Medicine is one of the most prestigious in Turkey. It offers comprehensive medical education with state-of-the-art facilities and research opportunities. The university has a strong emphasis on both clinical practice and medical research."
      },
      {
        name: "Hacettepe University",
        image: t2,
        description: "Founded in 1967, Hacettepe University is a leading institution in Turkey, particularly known for its medical school and research output.",
        details: "Hacettepe University's Faculty of Medicine is renowned for its innovative curriculum and research contributions. It offers programs in various medical specialties and is known for its strong international collaborations and exchange programs."
      },
      {
        name: "Dokuz Eylul University",
        image: t3,
        description: "Located in Izmir and established in 1982, this university offers a variety of programs and is well-regarded for its medical and engineering faculties.",
        details: "Dokuz Eylul University's Faculty of Medicine is known for its problem-based learning approach. It offers a modern curriculum that integrates basic sciences with clinical practice from early years. The university has strong ties with local hospitals for clinical training."
      },
      {
        name: "Koc University",
        image: t4,
        description: "Founded in 1993 in Istanbul, Koc University is a private institution known for its high research standards and global partnerships.",
        details: "Koc University School of Medicine, established in 2010, is rapidly gaining recognition for its research-oriented approach to medical education. It offers a curriculum that emphasizes both clinical skills and scientific research, preparing students for careers in both medical practice and academic medicine."
      },
      {
        name: "Ege University",
        image: t5,
        description: "One of the oldest universities in Turkey, established in 1955 in Izmir, with notable programs in medical, engineering, and agricultural sciences.",
        details: "Ege University Faculty of Medicine is known for its comprehensive medical education and research facilities. It offers programs in various medical specialties and is particularly strong in areas such as oncology and neuroscience. The university hospital is a major healthcare center in the Aegean region."
      },
      {
        name: "Akdeniz University",
        image: t6,
        description: "Located in Antalya and founded in 1982, it is known for its agricultural research and medical school.",
        details: "Akdeniz University Faculty of Medicine offers a modern medical curriculum with a focus on integrating basic sciences and clinical practice. It's known for its research in areas such as medical genetics and tropical diseases, leveraging its location in the Mediterranean region."
      },
      {
        name: "Gazi University",
        image: t7,
        description: "Founded in 1926 and located in Ankara, Gazi University is one of Turkey's largest universities, offering a wide range of programs with a strong emphasis on education and engineering.",
        details: "Gazi University Faculty of Medicine is one of the oldest and most respected medical schools in Turkey. It offers a comprehensive medical education with a strong emphasis on research and clinical skills. The university hospital is a major referral center for complex medical cases."
      },
      {
        name: "Bahcesehir University",
        image: t8,
        description: "A private university in Istanbul, established in 1998, recognized for its international outlook and diverse academic offerings.",
        details: "Bahcesehir University Faculty of Medicine, although relatively new, is gaining recognition for its modern approach to medical education. It offers an integrated curriculum that combines basic sciences, clinical skills, and research methodology. The university has strong partnerships with hospitals in Istanbul for clinical training."
      },
      {
        name: "Istinye University",
        image: t9,
        description: "Established in 2015 in Istanbul, Istinye University is one of the newer institutions with a strong focus on health sciences and technology.",
        details: "Istinye University Faculty of Medicine offers a modern, technology-enhanced medical education. Despite being a newer institution, it has quickly established itself with state-of-the-art facilities and a curriculum that emphasizes early clinical exposure and research skills. The university has strong ties with major hospitals in Istanbul."
      },
    ],
    Romania: [
      {
        name: "Ovidius University",
        image: r1,
        description: "Located in Constanța, Ovidius University is known for its diverse programs and serves as an important educational institution in southeastern Romania.",
        details: "Ovidius University's Faculty of Medicine offers comprehensive medical education with a focus on both theoretical knowledge and practical skills. The university has modern facilities and collaborates with local hospitals for clinical training. It's known for its programs in general medicine and dentistry."
      },
      {
        name: "University of Oradea",
        image: r2,
        description: "Established in Oradea, this university offers a variety of programs and is known for its focus on engineering, medicine, and social sciences.",
        details: "The University of Oradea's Faculty of Medicine and Pharmacy provides high-quality medical education with a strong emphasis on practical skills. It offers programs in general medicine, dentistry, and pharmacy. The university has modern laboratories and simulation centers for hands-on learning."
      },
      {
        name: "University of Medicine and Pharmacy of Craiova",
        image: r3,
        description: "A prestigious medical university in Craiova, specializing in medical and pharmaceutical sciences with a strong reputation for research.",
        details: "The University of Medicine and Pharmacy of Craiova is renowned for its research output and quality of medical education. It offers programs in medicine, dentistry, and pharmacy. The university has strong international collaborations and is known for its modern approach to medical education."
      },
      {
        name: "Babes-Bolyai University",
        image: r4,
        description: "Located in Cluj-Napoca and founded in 1919, it is one of Romania's largest universities, known for a broad array of programs and research initiatives.",
        details: "While Babes-Bolyai University is not primarily a medical school, it offers programs in related fields such as biology, chemistry, and psychology. These programs provide a strong foundation for students interested in pursuing medical research or related health sciences."
      },
      {
        name: "Iuliu Hatieganu University of Medicine and Pharmacy, Cluj Napoca",
        image: r5,
        description: "Established in 1919, this university is highly regarded in Romania for its focus on health sciences and medical research.",
        details: "Iuliu Hatieganu University is one of Romania's top medical schools. It offers programs in medicine, dentistry, and pharmacy. The university is known for its research output, modern facilities, and strong international collaborations. It has a particular strength in areas such as cardiology and neuroscience."
      },
      {
        name: "Carol Davila University of Medicine and Pharmacy",
        image: r6,
        description: "Located in Bucharest, it is one of Romania's oldest and most respected medical universities, established in 1857.",
        details: "Carol Davila University is the oldest and most prestigious medical school in Romania. It offers comprehensive programs in medicine, dentistry, and pharmacy. The university is known for its rigorous curriculum, extensive research opportunities, and strong clinical training in Bucharest's major hospitals."
      }
    ]
  }

  return (
    <Layout>
      <div className="bg-white p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top Universities</h1>
          <p className="text-xl text-gray-700 mb-6">
            Discover some of the best universities in Russia, Turkey, and Romania. These institutions offer world-class education and unique cultural experiences for international students.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(universities).map((country) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities[activeCountry].map((university, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <img
                    src={university.image || "/placeholder.svg"}
                    alt={university.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{university.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{university.description}</p>
                </div>
                <div className="px-4 pb-4">
                  <button 
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    onClick={() => setSelectedUniversity(university)}
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Study in {activeCountry}?</h2>
            <p className="text-gray-700">
              {activeCountry === 'Russia' && (
                "Russia offers a rich cultural heritage, world-renowned academic institutions, and cutting-edge research opportunities. With its diverse landscape and vibrant cities, studying in Russia provides a unique blend of historical significance and modern innovation."
              )}
              {activeCountry === 'Turkey' && (
                "Turkey bridges Europe and Asia, offering a unique cultural experience alongside high-quality education. With its rapidly developing economy and strategic location, Turkey provides students with valuable international exposure and career opportunities."
              )}
              {activeCountry === 'Romania' && (
                "Romania boasts a high standard of education at affordable costs, making it an attractive destination for international students. With its beautiful landscapes, rich history, and growing economy, Romania offers a perfect blend of academic excellence and cultural exploration."
              )}
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Want to learn more about studying in {activeCountry}? Contact us for personalized guidance and support.
            </p>
            <button onClick={() => setShowCounselingPopup(true)} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Get More Information
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
      {selectedUniversity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedUniversity.name}</h2>
              <button onClick={() => setSelectedUniversity(null)} className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <img src={selectedUniversity.image || "/placeholder.svg"} alt={selectedUniversity.name} className="w-full h-64 object-cover mb-4 rounded-md" />
            {Array.isArray(selectedUniversity.details) ? (
              <div className="space-y-4">
                {selectedUniversity.details.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 mb-4">{selectedUniversity.details}</p>
            )}
            <button 
              onClick={() => setSelectedUniversity(null)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  )
}

