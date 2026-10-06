import { motion } from 'framer-motion'
import { Reveal, fadeLeft, StaggerReveal, staggerItem } from './anim'
import './Footer.css'

const columns = [
  {
    title: 'Features',
    links: ['Analytics', 'Collaboration', 'Data Management', 'Integrations', 'Security'],
  },
  {
    title: 'Company',
    links: ['About us', 'Blog', 'Careers', 'Cookie Policy'],
  },
  {
    title: 'Resource',
    links: ['Customers', 'Strategic', 'E books & Guides', 'Webinar'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-panel">
        <div className="footer-banner">
          <motion.div
            className="footer-banner-motion"
            initial={{ y: '40%', opacity: 0.5 }}
            whileInView={{ y: '-26%', opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/images/footer.png" alt="" className="footer-banner-img" />
            <span className="footer-banner-fade" aria-hidden />
          </motion.div>
        </div>

        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="container footer-main">
            <Reveal variants={fadeLeft} className="footer-left">
              <div className="footer-social" aria-label="Social links">
                <a href="#home" aria-label="Facebook">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg>
                </a>
                <a href="#home" aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href="#home" aria-label="X">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.6 7.5L22 22h-6.8l-4.7-6.2L5.2 22H2.4l7.1-8.1L2 2h7l4.2 5.6L18.2 2zm-1.2 18h1.8L7.1 3.9H5.2L17 20z"/></svg>
                </a>
                <a href="#home" aria-label="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 9H3v12h3.5V9zM4.8 3C3.5 3 2.5 4 2.5 5.3S3.5 7.5 4.8 7.5 7 6.5 7 5.3 6 3 4.8 3zM21 13.3c0-3.2-1.7-4.7-4.1-4.7-1.9 0-2.8 1-3.3 1.8V9H10v12h3.5v-6.4c0-1.7.3-3.3 2.4-3.3s2.1 1.9 2.1 3.4V21H21v-7.7z"/></svg>
                </a>
              </div>
              <h2 className="footer-cta-title">
                Ready to take control of
                <br />
                your financial future
              </h2>
              <a href="#home" className="btn-pill footer-get-started">
                Get Started
              </a>
            </Reveal>

            <StaggerReveal className="footer-columns">
              {columns.map((col) => (
                <motion.div key={col.title} className="footer-col" variants={staggerItem}>
                  <h3>{col.title}</h3>
                  <ul>
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#home">{link}</a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </StaggerReveal>
          </div>

          <div className="container footer-legal">
            <span>© 2024 finguard</span>
            <span>All Rights Reserved.</span>
            <div className="footer-legal-links">
              <a href="#home">Terms of Service</a>
              <a href="#home">Privacy Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
