import { motion } from 'framer-motion';
import { Server, Activity, PenTool, LayoutDashboard } from 'lucide-react';

export default function Architecture() {
  const agents = [
    { name: 'Data Agent', icon: <Server />, desc: 'Fetches and normalizes live records via MCP.', color: 'var(--accent-blue)' },
    { name: 'Content Agent', icon: <PenTool />, desc: 'Writes contextually relevant copy using RAG.', color: 'var(--accent-purple)' },
    { name: 'Design Agent', icon: <LayoutDashboard />, desc: 'Applies visual hierarchy using Express Sandbox API.', color: 'var(--accent-cyan)' },
    { name: 'Performance Agent', icon: <Activity />, desc: 'Feeds outcomes into the Content Intelligence Graph.', color: '#ff003c' }
  ];

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">The <span className="text-gradient">Multi-Agent</span> Engine</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontFamily: 'monospace', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              [Prompt] → API Gateway → Agent Orchestrator (LangGraph)
            </p>
            <div className="grid grid-cols-4" style={{ width: '100%', gap: '1rem' }}>
              {agents.map((agent, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${agent.color}40`, padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}
                >
                  <div style={{ color: agent.color, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{agent.icon}</div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>{agent.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{agent.desc}</p>
                </motion.div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-blue), var(--accent-purple), transparent)' }}></div>
            <p style={{ fontFamily: 'monospace', color: 'var(--accent-cyan)', marginTop: '2rem', fontWeight: 600 }}>
              Result: Fully Designed Express Canvas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
