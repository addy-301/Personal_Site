import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download } from 'lucide-react';

export default function ResumeBtn() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-20 right-8 z-40">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.4, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 bg-[var(--accent)] rounded-full blur-xl -z-10"
          />
        )}
      </AnimatePresence>

      <motion.a
        href="./src/assets/Aditya_Verma_resume__updated_.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[var(--accent)] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative z-10"
        initial={{ scale: 0, opacity: 0, width: '48px', height: '48px' }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          width: isHovered ? '150px' : '48px',
          paddingLeft: isHovered ? 20 : 0,
          paddingRight: isHovered ? 20 : 0
        }}
        transition={{ type: 'spring', stiffness: 98, damping: 13 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
      >
        <FileText size={20} className="shrink-0" />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: '150px', opacity: 1, marginLeft: 8 }}
              exit={{ width: 0, opacity: 0, marginLeft: 6 }}
              className="overflow-hidden whitespace-nowrap flex items-center"
            >
              <span className="font-medium">Resume</span>
              <Download size={16} className="ml-2" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
}
