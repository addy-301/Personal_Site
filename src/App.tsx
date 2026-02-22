import { Suspense, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { personalData } from './data';
import { 
  Linkedin, Mail, ExternalLink, 
  Code2, Database, Cloud, Award, Terminal, GraduationCap, Cpu, Rocket
} from 'lucide-react';
import Navbar from './components/Navbar';
import ResumeBtn from './components/ResumeBtn';
import About from './components/About';
import { ThemeProvider } from './context/ThemeContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <RecentWork />
        <SkillsSection />
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6 md:px-12 pb-20">
      <SectionHeader title="Projects" subtitle="Selected Works" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personalData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-2xl hover:bg-[var(--card-hover)] transition-colors group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-lg bg-[var(--card-hover)] text-[var(--accent)]">
                <Code2 size={24} />
              </div>
              <a href={project.link} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
            
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-[var(--card-hover)] text-xs font-mono text-[var(--text-secondary)] border border-[var(--glass-border)]">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6 md:px-12 pb-20">
      <SkillsSection />
    </div>
  );
}

function EducationPage() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6 md:px-12 pb-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <SectionHeader title="Education" subtitle="Academic Background" />
          <div className="space-y-8">
            {personalData.education.map((edu, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-[var(--glass-border)]">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[var(--accent)]">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                    <p className="text-[var(--text-secondary)] mt-1">{edu.institute}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm font-mono text-[var(--text-secondary)]">
                      <span>{edu.year}</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--text-secondary)]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader title="Achievements" subtitle="Honors & Certifications" />
          <div className="space-y-4">
            {personalData.achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-[var(--text-secondary)] text-sm group"
              >
                <Award size={16} className="mt-1 text-yellow-500/80 shrink-0 group-hover:text-yellow-400 transition-colors" />
                <span className="group-hover:text-[var(--text-primary)] transition-colors">{achievement}</span>
              </motion.div>
            ))}
            <div className="h-px bg-[var(--glass-border)] my-6" />
            <h4 className="text-[var(--text-primary)] font-medium mb-4 flex items-center gap-2">
              <Cpu size={18} className="text-[var(--accent)]" /> Certifications
            </h4>
            <div className="flex flex-wrap gap-2">
              {personalData.certifications.map((cert, index) => (
                <span key={index} className="px-3 py-1 rounded-full border border-[var(--glass-border)] text-xs text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6 md:px-12 pb-20 min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Let's Connect</h2>
        <p className="text-[var(--text-secondary)] mb-10 text-lg">
          Based in Mumbai, India. Open to discussing engineering challenges, AI innovations, and new opportunities to be part of your visions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a 
            href={`mailto:${personalData.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={20} />
            Email Me
          </motion.a>

          <motion.a 
            href={personalData.socials.find(s => s.name === 'LinkedIn')?.url} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--card-hover)] text-[var(--text-primary)] border border-[var(--glass-border)] rounded-full font-medium hover:bg-[var(--accent)] hover:text-white transition-all"
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

function RecentWork() {
  return (
    <section className="py-12">
      <SectionHeader title="Recent Work" subtitle="Current Position" />
      <div className="space-y-8">
        {personalData.experience.slice(0, 1).map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border border-[var(--glass-border)]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">{exp.role}</h3>
                <p className="text-[var(--accent)] text-lg">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-[var(--text-secondary)] font-mono text-sm">{exp.period}</p>
                <p className="text-[var(--text-secondary)] text-sm">{exp.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const categories = [
    { name: "Technical Stack", icon: Terminal, skills: personalData.skills.technical },
    { name: "Databases", icon: Database, skills: personalData.skills.database },
    { name: "Cloud & Frameworks", icon: Cloud, skills: [...personalData.skills.cloud, ...personalData.skills.tools] },
  ];

  return (
    <section className="py-12">
      <SectionHeader title="Expertise" subtitle="Technical Proficiency" />
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[var(--card-hover)] text-[var(--accent)]">
                <cat.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">{cat.name}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 rounded-md bg-[var(--card-hover)] text-sm text-[var(--text-secondary)] border border-[var(--glass-border)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="min-h-[90vh] flex flex-col justify-center relative group overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              var(--card-hover),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[1px] bg-[var(--accent)]"
            />
            <span className="text-[var(--accent)] font-mono text-sm tracking-widest uppercase flex items-center gap-2">
               <Rocket size={14} /> Data Engineer & Full Stack Developer
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
            <span className="block text-gradient">Aditya</span>
            <span className="block text-[var(--text-secondary)] opacity-50">Verma</span>
          </h1>
          
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed mb-8">
              <span className="text-[var(--text-primary)] font-medium">Building</span> scalable data systems and crafting elegant digital experiences. Currently engineering the future of regulatory reporting at <span className="text-[var(--accent)]">TCS</span>.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {personalData.socials.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full glass-card transition-colors group hover:border-[var(--accent)]"
                >
                  <social.icon size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
                  <span className="text-sm font-medium text-[var(--text-primary)]">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-2"
      >
        <span className="h-[1px] w-8 bg-[var(--accent)] opacity-50"></span>
        <span className="text-[var(--accent)] font-mono text-xs tracking-widest uppercase">{title}</span>
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
      >
        {subtitle}
      </motion.h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--glass-border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[var(--text-primary)] text-base font-medium">
          Aditya Verma
        </p>
        <p className="text-[var(--text-secondary)] text-sm opacity-70">
          &copy; {new Date().getFullYear()} <span className="text-[var(--text-secondary)] opacity-70">Designed in the future</span>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
          <Navbar />
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-[var(--text-primary)]">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
          <ResumeBtn />
          <Footer />
          <Analytics />
        </div>
      </Router>
    </ThemeProvider>
  );
}
