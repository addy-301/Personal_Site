import { motion } from 'motion/react';
import { GraduationCap, Code2, Database, Cloud, Terminal, Award, Cpu } from 'lucide-react';
import { personalData } from '../data';

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

export default function AboutPage() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6 md:px-12 pb-20 min-h-screen">
      <SectionHeader title="About Me" subtitle="About Me." />

      <div className="grid lg:grid-cols-[1fr_300px] gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[var(--text-secondary)] text-lg leading-relaxed space-y-6"
        >
          <p>
            I am Aditya Verma, a Data Engineer at <span className="text-[var(--accent)] font-medium">Tata Consultancy Services (TCS)</span> working at client location for <span className="text-[var(--accent)] font-medium">Reserve Bank of India (RBI)</span>. I specialize in building well-engineered consumer products that solve real-world problems.
          </p>
          <p>
            With a Bachelors in Technology from Graphic Era University, I have contributed to developing new features and optimizing applications using JavaScript, React and Redux. I am currently part of the data modernization team for Centralised Information Management System serving <span className="text-[var(--accent)] font-medium">Reserve Bank of India</span> as client.
          </p>
        </motion.div>
        
        <div className="hidden lg:block relative">
           <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-10 rounded-2xl -z-10 blur-2xl" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border border-[var(--glass-border)]"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
              <GraduationCap className="text-[var(--accent)]" /> Education
            </h3>
            <div className="space-y-2">
              {personalData.education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l border-[var(--glass-border)]">
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                  <h4 className="text-xl font-bold text-[var(--text-primary)]">{edu.degree}</h4>
                  <p className="text-[var(--text-secondary)] text-lg mt-1">{edu.institute}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm font-mono text-[var(--text-secondary)]">
                    <span className="px-2 py-1 rounded bg-[var(--card-hover)]">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl border border-[var(--glass-border)]"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
              <Award className="text-[var(--accent)]" /> Achievements
            </h3>
            <div className="space-y-4">
              {personalData.achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--glass-border)] group hover:border-[var(--accent)] transition-colors"
                >
                  <div className="p-2 rounded-full bg-[var(--card-hover)] text-yellow-500 group-hover:scale-110 transition-transform shrink-0">
                    <Award size={18} />
                  </div>
                  <span className="text-[var(--text-primary)] text-sm leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-2xl border border-[var(--glass-border)]"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
              <Code2 className="text-[var(--accent)]" /> Technical Skills
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono uppercase text-[var(--accent)] mb-3 flex items-center gap-2">
                  <Terminal size={16} /> Languages & Core
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.technical.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] border border-[var(--glass-border)] hover:border-[var(--accent)] transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase text-[var(--accent)] mb-3 flex items-center gap-2">
                  <Database size={16} /> Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.database.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] border border-[var(--glass-border)] hover:border-[var(--accent)] transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase text-[var(--accent)] mb-3 flex items-center gap-2">
                  <Cloud size={16} /> Cloud & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[...personalData.skills.cloud, ...personalData.skills.tools].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] border border-[var(--glass-border)] hover:border-[var(--accent)] transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 rounded-2xl border border-[var(--glass-border)]"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
              <Cpu className="text-[var(--accent)]" /> Certifications
            </h3>
            <div className="grid gap-3">
              {personalData.certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--glass-border)] hover:border-[var(--accent)] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[var(--card-hover)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors shrink-0">
                    <Cpu size={18} />
                  </div>
                  <span className="text-[var(--text-primary)] font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
