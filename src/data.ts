import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, Database, Cloud, Award, Terminal } from 'lucide-react';

export const personalData = {
  name: "Aditya Verma",
  role: "Data Engineer",
  email: "vaditya832@gmail.com",
  socials: [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/-aditya-verma-/" },
    { name: "GitHub", icon: Github, url: "https://github.com/addy-301" },
    { name: "Email", icon: Mail, url: "mailto:vaditya832@gmail.com" }
  ],
  summary: "Engineered and optimized Python & PySpark-based ETL pipelines to modernize RBI’s CIMS Data Lake. Passionate about transforming raw data into actionable insights and building scalable systems.",
  education: [
    {
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      institute: "Graphic Era University, Dehradun",
      year: "2021 - 2025",
    }
  ],
  experience: [
    {
      role: "Data Engineer",
      company: "TCS",
      location: "Mumbai, Maharashtra",
      period: "November, 2025 - Current",
      description: [
        "Engineered and optimized Python & PySpark-based ETL pipelines to modernize RBI’s CIMS Data Lake, transforming regulatory reporting from Report-Based-Returns (RBR) to Element-Based-Returns (EBR).",
        "Developed scalable Spark data transformation scripts for large-volume financial data processing, leveraging SQL, Hive, and Impala.",
        "Implemented data validation, cleansing, normalisation, and mapping logics to ensure regulatory compliance and data integrity.",
        "Optimized SQL queries and Spark jobs to enhance processing efficiency and reduce execution time across distributed data environments."
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
    "Secured 3rd rank in Graphic Era Coding Competition (ICCC).",
    "Qualified for 2nd round twice for TechWizard (Inter-University coding contest).",
    "Qualified for Round 2 of INFAthon (Informatica Code-a-thon)."
  ],
  skills: {
    technical: ["Python", "Java", "JavaScript", "HTML/CSS", "PySpark", "GenAI", "AI/ML"],
    database: ["SQL", "MongoDB"],
    tools: ["ReactJS", "ExpressJS", "Hive", "TailwindCSS"],
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
