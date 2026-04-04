import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-tertiary)', padding: '4rem 0 2rem 0', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div className="grid grid-cols-2" style={{ marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              <span className="text-gradient">Synapse</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', marginBottom: '2rem' }}>
              The MCP-Powered Enterprise Data-to-Design Intelligence Agent. Built for the Adobe Fund for Design.
            </p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '3rem' }}>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Connect</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>
                  <a href="https://www.linkedin.com/in/areeb-abdul-ghani-aaa46a1b7/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-blue)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
                    <FaLinkedin size={18} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://x.com/AreebAbdulGhan1" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-cyan)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
                    <FaTwitter size={18} /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AreebAbdulGhani" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--accent-purple)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
                    <FaGithub size={18} /> GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:areebghani359@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='white'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
                    <Mail size={18} /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          <div>&copy; 2026 Areeb Abdul Ghani. All rights reserved.</div>
          <div>Product Architecture Whitepaper v1.0 &bull; April 5, 2026</div>
        </div>
      </div>
    </footer>
  );
}
