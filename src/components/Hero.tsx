import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '4px', color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.875rem' }}
          >
            <Code size={16} />
            Built for Adobe Fund for Design
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}
          >
            The <span className="text-gradient">MCP-Powered</span> Enterprise Intelligence Agent
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}
          >
            Synapse introduces bidirectional data intelligence to Adobe Express. Automate data-driven content creation and turn your workspace into a continuously learning content engine.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#how-it-works" className="glow-button">
              Explore Architecture <ArrowRight size={18} />
            </a>
            <a href="https://github.com/AreebAbdulGhani" target="_blank" rel="noreferrer" className="glow-button secondary">
              View on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
