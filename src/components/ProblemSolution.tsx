import { motion } from 'framer-motion';
import { Database, LayoutTemplate, RefreshCcw } from 'lucide-react';

export default function ProblemSolution() {
  const cards = [
    {
      icon: <Database size={32} color="var(--accent-blue)" />,
      title: 'Current Workflow is Broken',
      description: 'Export numbers from CRM, paste into spreadsheet, manually type into Adobe Express, export and publish. Outdated instantly. Zero performance tracking.'
    },
    {
      icon: <LayoutTemplate size={32} color="var(--accent-cyan)" />,
      title: 'The Synapse Solution',
      description: 'Describe what you need in natural language. Synapse fetches live enterprise data via MCP, designs the canvas automatically, and measures published asset performance.'
    },
    {
      icon: <RefreshCcw size={32} color="var(--accent-purple)" />,
      title: 'Self-Improving Engine',
      description: 'Every design choice is tracked against engagement outcomes in the Content Intelligence Graph. The next asset you create gets fundamentally smarter.'
    }
  ];

  return (
    <section className="section" id="problem">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <h2 className="section-title">The Seam Between <span className="text-gradient">Data and Design</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Enterprise teams waste 8-12 hours per week copying data into design tools with absolutely zero way to know if their visual choices actually perform. Synapse closes this loop.</p>
        </div>

        <div className="grid grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel"
            >
              <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', display: 'inline-flex', padding: '1rem', borderRadius: '12px' }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>{card.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
