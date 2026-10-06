// Single source of truth derived strictly from uploaded academic documents
// No hallucinated or invented information

export const PERSONAL_INFO = {
  name: "M RAMYA",
  fullNameOfficial: "Ramya Muguntha Babu", // As on official Goethe Certificate
  title: "Computer Science and Business Systems Graduate",
  degree: "B.Tech. in Computer Science and Business Systems",
  institution: "R.M.K. Engineering College",
  institutionDetails: "Autonomous Institution, Affiliated to Anna University, NAAC 'A+' Accredited, NBA Accredited",
  cgpa: "7.88",
  period: "October 2022 – March 2026",
  location: "Kanchipuram, Tamil Nadu, India",
  email: "ramya2004.07@gmail.com",
  phone: "9080187877",
  github: "https://github.com/ramya-2407",
  summary: "Motivated technology and business professional with an interest in software development and problem-solving. Passionate about building solutions that combine technical skills with business understanding. Committed to learning, adapting, and creating value through technology-driven solutions.",
  resumePdf: "/documents/RAMYA CV.pdf",
};

export const EDUCATION = {
  institution: "R.M.K. Engineering College",
  degree: "B.Tech. in Computer Science and Business Systems",
  cgpa: "7.88",
  period: "October 2022 – March 2026",
  coursework: [
    "Web Development",
    "Database Management Systems",
    "Business Strategy",
    "Marketing Management"
  ],
  academicFocus: "Intersection of software engineering methodologies, data systems, and strategic enterprise management."
};

export const SKILLS = {
  technical: [
    { name: "Java", category: "Core Programming" },
    { name: "HTML", category: "Web Technologies" },
    { name: "CSS", category: "Web Technologies" },
    { name: "SQL", category: "Database Systems" },
    { name: "Database Management Systems (DBMS)", category: "Database Systems" }
  ],
  professional: [
    { name: "Communication", description: "Effective articulation of technical concepts and cross-functional collaboration." },
    { name: "Teamwork", description: "Collaborative problem-solving and structured project coordination." },
    { name: "Problem Solving", description: "Analytical breakdown of business requirements into technology-driven solutions." }
  ],
  languages: [
    {
      language: "German (Deutsch)",
      level: "A2 (CEFR)",
      credential: "Goethe-Zertifikat A2 (Score: 82/100, Grade: gut / good)",
      institution: "Goethe-Institut"
    },
    {
      language: "English",
      level: "B2 (CEFR)",
      credential: "IELTS — B2 (CEFR)",
      institution: "English Language Proficiency"
    }
  ]
};

export const ACHIEVEMENTS = [
  {
    id: "invente-24",
    title: "Invente '24 Paper Presentation Participation Certificate",
    event: "Invente '24 - Imagine. Create. Inspire",
    eventType: "National Level Technical Fest",
    organizer: "SSN College of Engineering, Chennai & Shiv Nadar University Chennai",
    department: "Organized by Department of Electronics and Communication Engineering (ECE)",
    dates: "September 27 – 28, 2024",
    location: "Chennai, India",
    description: "Attended and presented at the National Level Technical Symposium Invente '24, demonstrating research presentation and technical communication skills before academic evaluators.",
    signatories: [
      { name: "Dr. B. Sakthi Abirami", role: "Faculty Coordinator" },
      { name: "Dr. P. Vijayalakshmi", role: "Head of Department, ECE" }
    ],
    pdf: "/documents/INVENTE.pdf"
  }
];

export const CERTIFICATIONS = [
  {
    id: "hci-nptel",
    title: "Human Computer Interaction",
    fullName: "Human Computer Interaction (In English)",
    provider: "NPTEL Online Certification (Funded by MoE, Govt. of India) / SWAYAM",
    partnerInstitutions: "IIT Madras & IIIT Delhi",
    date: "Jan – Apr 2025",
    duration: "12-week course",
    score: "79%",
    scoreBreakdown: "Online Assignments: 25/25 | Proctored Exam: 53.75/75",
    type: "Elite Certification",
    certificateNumber: "NPTEL25CS38S643211844",
    recommendedCredits: "3 or 4 credits",
    totalCertified: "3,921 candidates",
    signatories: "Dr. Anand Srivastava (Coordinator, IIITD) & Prof. Andrew Thangaraj (Coordinator, IIT Madras)",
    pdf: "/documents/Human computer interaction(in English).pdf",
    verificationLink: null
  },
  {
    id: "oracle-ai",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    provider: "Oracle University",
    date: "August 15, 2025",
    validUntil: "August 15, 2027",
    certificateNumber: "102326420OCI25AICFA",
    type: "Oracle Certified Foundations Associate",
    description: "Recognized by Oracle Corporation as Oracle Certified Foundations Associate in Cloud Infrastructure AI concepts and foundations.",
    signatories: "Damien Carey (Senior Vice President, Oracle University)",
    pdf: "/documents/oracle certificate.pdf",
    verificationLink: null
  },
  {
    id: "infosys-html",
    title: "HTML Web Development Crash Course",
    provider: "Infosys / Infosys Springboard",
    date: "January 23, 2023",
    issueDate: "January 25, 2023",
    type: "Course Completion Certificate",
    description: "Successfully completed HTML Web Development Crash Course curriculum under Infosys Springboard initiative.",
    signatories: "Thirumala Arohi (Senior Vice President and Head ETA, Infosys Limited)",
    pdf: "/documents/infosys.HTML.pdf",
    verificationLink: "https://verify.onwingspan.com"
  },
  {
    id: "goethe-a2",
    title: "Goethe-Zertifikat A2",
    candidateName: "Ramya Muguntha Babu",
    provider: "Goethe-Institut",
    examDate: "12.05.2026",
    issueDate: "Chennai, 04.06.2026",
    location: "Chennai, India",
    score: "82 / 100",
    grade: "gut / good",
    certificateNumber: "1420-AA2A-0002800887",
    scoreBreakdown: [
      { section: "Reading (Lesen)", score: "16.25", max: "25.00" },
      { section: "Listening (Hören)", score: "18.75", max: "25.00" },
      { section: "Writing (Schreiben)", score: "25.00", max: "25.00" },
      { section: "Speaking (Sprechen)", score: "22.00", max: "25.00" }
    ],
    type: "CEFR A2 Language Proficiency Certificate (ALTE Q218)",
    description: "Demonstrates ability to understand elementary language in everyday communications, short texts, and professional social interactions in German.",
    pdf: "/documents/A2 goethe certificate.pdf",
    verificationLink: "https://www.goethe.de/verify"
  },
  {
    id: "power-bi-workshop",
    title: "Business Intelligence Using Power BI",
    provider: "Skill Nation",
    date: "CV Source Record",
    type: "2-Day Workshop",
    description: "Practical workshop training in business intelligence dashboards, data visualization, and reporting workflows using Power BI.",
    pdf: null,
    sourceNote: "Documented in Official Academic CV"
  },
  {
    id: "invente-cert",
    title: "Invente ’24 Paper Presentation Participation Certificate",
    provider: "SSN College of Engineering & Shiv Nadar University Chennai",
    date: "September 27 – 28, 2024",
    type: "Symposium Presentation Certificate",
    description: "Paper Presentation Participation at national-level technical fest organized by ECE Department.",
    pdf: "/documents/INVENTE.pdf"
  }
];

export const INTERNSHIPS = [
  {
    id: "virtual-tech-services",
    organization: "Virtual Tech Services",
    location: "Corporate Office (Ambattur, Chennai)",
    role: "Web Development Internship Training",
    period: "07.06.2024 – 20.07.2024",
    certificateDate: "20-07-2024",
    project: "MULTI AGENT SHOPPING SYSTEM FOR FARMERS",
    cvResponsibilities: [
      "Developed foundational skills in web development and website creation.",
      "Gained practical experience in designing user-friendly web applications."
    ],
    certificateNote: "During her association with the company, she was eager to learn and was sincere in her assignment.",
    pdf: "/documents/Virtual tech services internship.pdf",
    regNo: "111722202030"
  },
  {
    id: "good-leather-shoes",
    organization: "Good Leather Shoes Private Ltd.",
    organizationNote: "Govt. Of India Recognized Export House",
    location: "Kanchipuram / Thiruvallur District, Tamil Nadu",
    role: "Information Systems Intern",
    period: "May 2025 – June 2025 (05 May 2025 to 07 June 2025)",
    cvResponsibilities: [
      "Assisted in system coordination and operational support activities.",
      "Gained exposure to business workflows and information management practices."
    ],
    certificateNote: "Involved in system coordination and operational support activities within the organization. Completed assigned internship responsibilities during tenure.",
    pdf: "/documents/Good Leather Intern.pdf"
  }
];

export const PROJECTS = [
  {
    id: "skillmate",
    title: "SkillMate – Connecting People Through Skills and Services",
    year: "2026",
    description: "Platform where users share skills, learn from others, and showcase or sell products.",
    liveUrl: "https://skillshare-platform-sandy.vercel.app/",
    type: "Web Application Platform",
    deployed: true,
    highlights: [
      "Interactive marketplace connecting peer skill learners with providers.",
      "Service listing, booking management, and profile workflows.",
      "Production deployment on Vercel."
    ]
  },
  {
    id: "farmers-market",
    title: "Multi Agent Shopping System for Farmers",
    year: "2024",
    description: "Web platform helping farmers make informed purchasing decisions through product comparison and recommendations.",
    liveUrl: "https://farmers-market-platform-beryl.vercel.app/",
    type: "Agricultural Decision-Support Platform",
    deployed: true,
    highlights: [
      "E-commerce and decision system developed during Web Development Internship.",
      "Multi-agent architecture to compare prices and recommend agricultural supplies.",
      "Production deployment on Vercel."
    ]
  },
  {
    id: "carewise",
    title: "CareWise – Your Guide to Better Healthcare",
    year: "2025",
    description: "A platform for discovering and comparing hospitals based on ratings, services, and user preferences.",
    academicEvaluation: "Mentored at R.M.K. Engineering College by Prof. C. Mary Shiba; recognized for calibre of documentation and presentation with project performance rated 8 out of 10.",
    type: "Healthcare Informatics Project",
    deployed: false,
    highlights: [
      "Assisted consumers in comparing healthcare costs across varied hospital facilities.",
      "Calculated estimated costs across a spectrum of medical illnesses and treatments.",
      "Rigorous emphasis on user-focused solution design, research, and structured data organization."
    ]
  }
];

export const LOR_LIST = [
  {
    id: "hod-lor",
    recommender: "Dr. K. Chidambarathanu, M.E., Ph.D.",
    role: "Professor & Head of Department",
    department: "Department of Computer Science and Business Systems",
    institution: "R.M.K. Engineering College",
    contact: {
      email: "hod.csbs@rmkec.ac.in",
      phone: "044-67906641"
    },
    recommendationTarget: "Academic & Professional References",
    relationshipPeriod: "Known since 2023 as Head of Department",
    keyObservations: [
      "Demonstrated a model of dedication, intellectual curiosity, and genuine commitment to learning during undergraduate education.",
      "Maintained a strong academic record with CGPA of 7.88 while actively engaged in technical initiatives outside the classroom.",
      "Exemplified ability to successfully balance course work, academic projects, internship commitments, and assessment deadlines.",
      "Pursued continuous learning through industry certifications (Oracle AI Foundations, Infosys Springboard) and national symposium paper presentations.",
      "Displays maturity, persistence, self-motivation, and academic capability suited for advanced postgraduate studies."
    ],
    pdf: "/documents/LOR HOD.pdf"
  },
  {
    id: "shiba-lor",
    recommender: "C. Mary Shiba, M.E., (Ph.D.)",
    role: "Assistant Professor & Project Work Mentor",
    department: "Department of Computer Science and Business Systems",
    institution: "R.M.K. Engineering College",
    contact: {
      email: "cms.csbs@rmkec.ac.in",
      phone: "9962958458"
    },
    recommendationTarget: "Academic & Professional References",
    relationshipPeriod: "Known since 2022 as graduate & project mentee",
    keyObservations: [
      "Served as project work mentor for the healthcare informatics project 'CareWise - A Better Guide to Healthcare'.",
      "Recognized for the calibre of documentation, presentation, and overall contribution, rating project performance at an 8 out of 10.",
      "Demonstrated significant growth in analytical thinking, project planning, problem-solving, and confidence.",
      "Demonstrated strong initiative by seeking out extracurricular learning opportunities and certifications alongside coursework.",
      "Highly motivated graduate who embraces challenges with a positive approach and continuous self-improvement."
    ],
    pdf: "/documents/LOR SHIBA.pdf"
  }
];
