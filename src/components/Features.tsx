import { motion } from 'framer-motion';
import { Network, BrainCircuit, Square, CloudRain } from 'lucide-react';

export default function Features() {
  const mcpIntegrations = [
    { name: 'Salesforce', use: 'Sales decks, pipeline reports' },
    { name: 'HubSpot', use: 'Marketing reports, campaign assets' },
    { name: 'Google Sheets', use: 'Data visualizations, dynamic tables' },
    { name: 'Airtable', use: 'Project boards, dashboards' },
    { name: 'Notion', use: 'Meeting decks, knowledge assets' }
  ];

  return (
    <section className="section" id="features" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              The <span className="text-gradient">Content Intelligence Graph</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Every time a team publishes content through Synapse, the Performance Agent decomposes the design into measurable attributes using vision AI. It tracks engagement outcomes from connected platforms and maps them back to the design.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              After 20 or 30 published assets, the graph learns exactly which visual choices drive results for your specific audience. It's an organization-specific moat that makes every piece of future content fundamentally smarter.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', flex: 1, border: '1px solid var(--glass-border)' }}>
                <BrainCircuit size={28} color="var(--accent-purple)" style={{ marginBottom: '0.5rem' }} />
                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Vector DB</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Powered by Pinecone</div>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', flex: 1, border: '1px solid var(--glass-border)' }}>
                <CloudRain size={28} color="var(--accent-cyan)" style={{ marginBottom: '0.5rem' }} />
                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Vision AI</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Powered by OpenCV</div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Network color="var(--accent-blue)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>MCP Server Hub</h3>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Synapse connects securely via the Model Context Protocol (MCP) using a modular Server Hub. No more brittle custom integrations.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {mcpIntegrations.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Square size={16} color="var(--accent-cyan)" /> {item.name}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textAlign: 'right' }}>{item.use}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
