import { Github, Linkedin, Mail } from 'lucide-react';

export const personalData = {
  name: "Aditya Verma",
  role: "Software Engineer",
  email: "vaditya832@gmail.com",
  socials: [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/-aditya-verma-/" },
    { name: "GitHub", icon: Github, url: "https://github.com/addy-301" },
    { name: "Email", icon: Mail, url: "mailto:vaditya832@gmail.com" }
  ],
  summary: "As an SWE, I have contributed towards modernization of central repository for RBI using Python, PySpark and Java. I am part of a core development team for RBI, managing humongous amount of data from various banks.",
  education: [
    {
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      institute: "Graphic Era University, Dehradun",
      year: "2021 - 2025",
    }
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "TCS",
      location: "Mumbai, Maharashtra",
      period: "November, 2025 - Current",
      description: [
        "Designed and developed scalable backend systems using Python and PySpark as part of the Reserve Bank of India’s Centralised Information Management System modernization, enabling the transition from report-based to element-based data architecture for 200+ regulatory workflows across ~15,000 financial institutions.",
        "Architected and implemented bi-directional data processing frameworks, including ingestion of structured SDMX data and dynamic generation of regulatory reports, powering both real-time query platforms and end-user reporting systems.",
        "Built high-performance data processing modules leveraging distributed computing (Apache Spark), optimizing data transformation, validation, and mapping logic to ensure system reliability, consistency, and regulatory compliance at scale.",
        "Engineered robust data pipelines and backend services integrating SQL and Hive, focusing on performance optimization, fault tolerance, and maintainability in large-scale production environments.",
        "Led the development and optimization of large-scale data migration systems, identifying and resolving system-level defects, ensuring accurate and consistent transformation of legacy datasets into the new architecture."
      ]
    }
  ],
  projects: [
    {
      title: "WordSphere",
      description: "A comprehensive blogging application with seamless post creation, editing, and deletion. Features advanced filters and a powerful TinyMCE editor.",
      tech: ["React", "Node.js", "TinyMCE", "Appwrite", "TailwindCSS"],
      period: "Aug 2024 - Sept 2024",
      link: "https://word-sphere.vercel.app/"
    },
    {
      title: "Self-Driving Car Agent",
      description: "Designed a self-driving car agent using Unity3D’s ML-Agents module (PPO & SAC models) with 92% decision-making accuracy.",
      tech: ["Unity3D", "C#", "ML-Agents", "PPO/SAC", "Reinforcement Learning"],
      period: "Sept 2023 - Dec 2023",
      link: "https://github.com/addy-301/Self-Driving-Car-Agent-with-RL"
    },
    {
      title: "Real-Time Vehicle Tracking",
      description: "Engineered a real-time vehicle tracking application achieving 98% update accuracy with a user-friendly interface.",
      tech: ["ReactJS", "Tailwind CSS", "Figma", "MongoDB", "SocketIO", "ExpressJS"],
      period: "Aug 2023 - Sept 2023",
      link: "https://github.com/addy-301/RealTime-Vehicle-Tracking-System-SIH2023"
    }
  ],
  achievements: [
    "Secured 1st place amongst 15 teams battling for 7 hours creating a well-documented and working RAG based application for given problem statement in an internal AI Hackathon.",
    "Secured 3rd rank in Graphic Era Coding Competition (ICCC).",
    "Qualified for 2nd round twice for TechWizard (Inter-University coding contest).",
    "Qualified for Round 2 of INFAthon (Informatica Code-a-thon)."
  ],
  skills: {
    technical: ["Python", "Java", "JavaScript", "HTML/CSS", "Spark", "GenAI", "AI/ML"],
    database: ["SQL", "MongoDB"],
    tools: ["ReactJS", "ExpressJS", "Mongoose", "TailwindCSS", "Git", "Docker"],
    cloud: ["Google Cloud Platform"]
  },
  certifications: [
    "Certified Salesforce Agentblazer Innovator",
    "Certified AWS GenAI Practitioner",
    "Google Cloud - Introduction to GenAI",
    "Google Cloud Computing Foundations",
    "Networking Fundamentals in Google Cloud",
    "Postman API Fundamentals Student Expert"
  ]
};
