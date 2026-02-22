import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState(new Date());
  const location = useLocation();
  const [activeTabStyle, setActiveTabStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const activeIndex = links.findIndex(link => link.path === location.pathname);
    if (activeIndex !== -1 && tabsRef.current[activeIndex]) {
      const el = tabsRef.current[activeIndex];
      if (el) {
        setActiveTabStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          opacity: 1
        });
      }
    }
  }, [location.pathname]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    }) + ' IST';
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[var(--glass-border)] bg-[var(--glass-bg)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <NavLink to="/" className="text-lg font-bold text-[var(--text-primary)]">
              Aditya Verma
            </NavLink>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card-hover)] border border-[var(--glass-border)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-[var(--text-secondary)]">
                {formatTime(time)}
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 relative">
            <motion.div
              className="absolute h-9 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 pointer-events-none"
              animate={{ 
                left: activeTabStyle.left, 
                width: activeTabStyle.width, 
                opacity: activeTabStyle.opacity 
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
            {links.map((link, index) => (
              <NavLink
                key={link.name}
                ref={el => { tabsRef.current[index] = el; }}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-[var(--card-hover)] z-10 ${
                    isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover:bg-[var(--card-hover)] transition-colors text-[var(--text-primary)]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--card-hover)] transition-colors text-[var(--text-primary)]"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-primary)]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-[var(--glass-border)] bg-[var(--bg-primary)] overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                <div className="flex sm:hidden items-center gap-2 px-3 py-2 rounded-lg bg-[var(--card-hover)] border border-[var(--glass-border)] w-fit mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-mono text-[var(--text-secondary)]">
                    {formatTime(time)}
                  </span>
                </div>
                {links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors ${
                        isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
