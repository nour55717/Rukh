import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './index.css';

const API_URL = 'http://localhost:5000/api';

// --- Phronesis-style Logo adapted for RUKH ---
const Logo = () => {
  return (
    <div style={{ 
      position: 'relative', 
      display: 'inline-flex',
      alignItems: 'center',
      transform: 'scaleX(1.3)', 
      transformOrigin: 'left',
      marginRight: '30px',
      fontFamily: 'Montserrat, sans-serif', 
      fontWeight: 900, 
      fontStyle: 'italic', 
      fontSize: '2rem', 
      color: 'var(--primary-accent)', 
      letterSpacing: '-1px', 
      textTransform: 'uppercase', 
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }}>
      RUKH
      <div style={{ 
        position: 'absolute', top: '50%', left: '-2%', right: '-2%', 
        height: '2px', background: 'var(--bg-main)', transform: 'translateY(-50%)' 
      }}></div>
      <div style={{ position: 'absolute', top: '50%', left: '78%', transform: 'translate(-50%, -50%) scaleX(0.7)' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
    </div>
  );
};

// --- Navbar Component ---
const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Programs</Link>
          <Link to="/privacy">Privacy Policy</Link>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span className="mono-tag" style={{ color: 'var(--text-main)', margin: 0 }}>{user.name}</span>
              <button onClick={onLogout} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">Apply Now</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div>
          <Logo />
          <p style={{ marginTop: '24px', color: 'var(--text-muted-dark)', maxWidth: '300px' }}>
            A premium technology ecosystem connecting talent development with real-world execution and elite innovation.
          </p>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">All Programs</Link></li>
            <li><Link to="/courses?category=kids">Kids Track</Link></li>
            <li><Link to="/courses?category=projects">Academy</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/conduct">Code of Conduct</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 RUKH Technology. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

// --- Home Component (Phronesis exact style) ---
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="hero-tag mono-tag">RUKH ECOSYSTEM</span>
          <h1>Build with <em>judgment.</em><br/>Execute with <em>precision.</em></h1>
          <p>
            More than just a software company. We are a premium technology ecosystem connecting talent development, real-world project execution, and research-driven innovation.
          </p>
          <Link to="/courses" className="btn btn-primary">Explore Pathways</Link>
        </div>
      </section>

      <section className="cards-section">
        <div className="container">
          <div style={{ marginBottom: '80px' }}>
            <span className="mono-tag" style={{ marginBottom: '16px', display: 'block' }}>OUR PROGRAMS</span>
            <h2 style={{ fontSize: '3rem' }}>Elite <em>Training</em> Tracks</h2>
          </div>
          
          <div className="card-grid">
            <div className="dark-card">
              <span className="mono-tag">01 / KIDS</span>
              <h3>Foundational Logic</h3>
              <div className="card-badges">
                <span className="badge">Python</span>
                <span className="badge">Logic</span>
              </div>
              <p>Early stage programming and problem solving for the next generation of engineers.</p>
              <Link to="/courses" style={{ color: 'var(--primary-accent)', fontWeight: '600', fontFamily: 'Outfit' }}>View Details →</Link>
            </div>
            
            <div className="dark-card">
              <span className="mono-tag">02 / CAMPUS</span>
              <h3>University Track</h3>
              <div className="card-badges">
                <span className="badge">Algorithms</span>
                <span className="badge">System Design</span>
              </div>
              <p>Bridging the gap between academic theory and industry-grade engineering practices.</p>
              <Link to="/courses" style={{ color: 'var(--primary-accent)', fontWeight: '600', fontFamily: 'Outfit' }}>View Details →</Link>
            </div>
            
            <div className="dark-card">
              <span className="mono-tag">03 / ACADEMY</span>
              <h3>Project Execution</h3>
              <div className="card-badges">
                <span className="badge">Full-Stack</span>
                <span className="badge">Cloud Architecture</span>
              </div>
              <p>Intensive, hands-on development of production-ready applications for advanced builders.</p>
              <Link to="/courses" style={{ color: 'var(--primary-accent)', fontWeight: '600', fontFamily: 'Outfit' }}>View Details →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// --- Privacy Component (Extracted Phronesis Policy Text) ---
const Privacy = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container" style={{ paddingTop: '80px' }}>
      <span className="mono-tag" style={{ marginBottom: '24px', display: 'block' }}>LEGAL DOCUMENTATION</span>
      <h1 style={{ fontSize: '4.5rem', marginBottom: '40px' }}>Rukh <em>Privacy Policy</em></h1>
      
      <div className="metadata-bar">
        <div className="meta-item">
          <span className="mono-tag">Version</span>
          <span className="value">1.0</span>
        </div>
        <div className="meta-item">
          <span className="mono-tag">Status</span>
          <span className="value" style={{ color: 'var(--primary-accent)' }}>• Active</span>
        </div>
        <div className="meta-item">
          <span className="mono-tag">Effective Date</span>
          <span className="value">July 14, 2026</span>
        </div>
        <div className="meta-item">
          <span className="mono-tag">Last Updated</span>
          <span className="value">July 14, 2026</span>
        </div>
      </div>

      <div className="doc-layout">
        <aside className="doc-sidebar">
          <ul>
            <li><a href="#section-1" onClick={(e) => { e.preventDefault(); scrollTo('section-1'); }}>1. Information We Collect</a></li>
            <li><a href="#section-2" onClick={(e) => { e.preventDefault(); scrollTo('section-2'); }}>2. Why We Collect Information</a></li>
            <li><a href="#section-3" onClick={(e) => { e.preventDefault(); scrollTo('section-3'); }}>3. How Data is Stored</a></li>
            <li><a href="#section-4" onClick={(e) => { e.preventDefault(); scrollTo('section-4'); }}>4. Who Can Access Your Data</a></li>
            <li><a href="#section-5" onClick={(e) => { e.preventDefault(); scrollTo('section-5'); }}>5. Data Retention</a></li>
            <li><a href="#section-6" onClick={(e) => { e.preventDefault(); scrollTo('section-6'); }}>6. Third-Party Services</a></li>
            <li><a href="#section-7" onClick={(e) => { e.preventDefault(); scrollTo('section-7'); }}>7. Children's Privacy</a></li>
            <li><a href="#section-8" onClick={(e) => { e.preventDefault(); scrollTo('section-8'); }}>8. Policy Updates</a></li>
            <li><a href="#section-9" onClick={(e) => { e.preventDefault(); scrollTo('section-9'); }}>9. Contact Us</a></li>
          </ul>
        </aside>

        <main className="doc-content">
          <p>Welcome to Rukh. We are committed to protecting your personal data and being transparent about how we handle it. This Privacy Policy describes how Rukh ("we", "our", or "us") collects, uses, stores, and protects the personal information you provide when you apply to our training tracks through our website.</p>
          <p>This Privacy Policy is part of our Terms of Service. By submitting an application, you agree to the collection and use of your information in accordance with this policy.</p>

          <h2 id="section-1">1. Information We Collect</h2>
          <p>We only collect information directly from you when you submit an application to a Rukh Cohort. The data we collect includes:</p>
          <h3>A. Personal and Contact Information</h3>
          <ul>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Country and City of Residence</li>
          </ul>
          <h3>B. Academic and Educational Information</h3>
          <ul>
            <li>University Name</li>
            <li>Faculty/Department</li>
            <li>Academic Year</li>
            <li>Expected Graduation Year</li>
          </ul>
          <h3>C. Technical and Professional Profiles</h3>
          <ul>
            <li>Preferred Track</li>
            <li>Curriculum Vitae (CV) (Required upload in PDF, DOC, or DOCX formats)</li>
            <li>LinkedIn Profile URL (Optional)</li>
            <li>GitHub Profile URL (Optional)</li>
            <li>Portfolio/Website URL (Optional)</li>
          </ul>

          <h2 id="section-2">2. Why We Collect Your Information (Legal Basis)</h2>
          <p>We process your data based on your explicit consent when you submit your application form, and for our legitimate educational and operational purposes. Specifically, we collect this information to:</p>
          <ul>
            <li><strong>Evaluate Eligibility:</strong> Assess whether an Applicant meets our selective admissions criteria for the chosen Track.</li>
            <li><strong>Verify Status:</strong> Ensure applicants meet our program requirements.</li>
            <li><strong>Communication:</strong> Inform you of application outcomes, provide enrollment instructions, and share program updates.</li>
            <li><strong>Operational Metrics:</strong> Plan capacity limits for each cohort.</li>
          </ul>

          <h2 id="section-3">3. How Data is Stored and Protected</h2>
          <p>All collected data is stored securely using reputable cloud infrastructure providers:</p>
          <ul>
            <li><strong>Database:</strong> Structured applicant records are stored in a secure relational database.</li>
            <li><strong>CV Files:</strong> Uploaded CV files are stored in a private cloud storage bucket.</li>
            <li><strong>Security:</strong> Anonymous website visitors only have write access to submit application records and upload CV files. We implement strict access controls to ensure that no anonymous public client can read, list, modify, or delete applicant data.</li>
          </ul>

          <h2 id="section-4">4. Who Can Access Your Data</h2>
          <p>Access to your personal information and CV is strictly restricted to Rukh Admissions Reviewers and program coordinators. We do not sell, rent, or distribute your personal data to any third-party marketing companies.</p>

          <h2 id="section-5">5. Data Retention and Deletion</h2>
          <p>We keep applicant information only as long as necessary to complete the admissions evaluation, enrollment phase, and training cycle for the active Cohort.</p>
          <ul>
            <li><strong>Successful Applicants (Participants):</strong> Data is retained for the duration of the Track and subsequent certificate issuance.</li>
            <li><strong>Unsuccessful Applicants:</strong> Data is safely archived or deleted once the cohort enrollment capacity is finalized and all seats are filled.</li>
            <li><strong>Right to Deletion:</strong> You have the right to request the complete deletion of your data at any time. To request deletion, please contact us. Please note that requesting deletion before the selection process completes will result in the cancellation of your application.</li>
          </ul>

          <h2 id="section-6">6. Third-Party Services We Use</h2>
          <p>To deliver our online admissions form and store your application files, we rely on reputable cloud hosting and storage infrastructure providers that implement appropriate security measures.</p>
          <p>We do not currently share your data with any external analytics providers, automated tracking scripts, or ad networks.</p>

          <h2 id="section-7">7. Children's Privacy</h2>
          <p>Our program is strictly designed for university students, graduates, and adults. We do not knowingly collect personal information from individuals under the age of 16. If we become aware that we have collected information from a child under 16 without verification of parental consent, we will delete that information immediately.</p>

          <h2 id="section-8">8. Policy Updates</h2>
          <p>We may update this Privacy Policy from time to time. The latest version will always be posted on our website with the "Last Updated" date.</p>

          <h2 id="section-9">9. Contact Us</h2>
          <p>For any questions about this Privacy Policy or your data rights, please reach out to us at: admission@rukh.tech.</p>
          <div style={{ marginTop: '30px' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>Official Channels</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="https://linkedin.com/company/rukh-education/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: '500', textDecoration: 'underline', textDecorationColor: 'var(--primary-accent)', textUnderlineOffset: '4px' }}>LinkedIn</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61594844004977" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: '500', textDecoration: 'underline', textDecorationColor: 'var(--primary-accent)', textUnderlineOffset: '4px' }}>Facebook</a></li>
              <li><a href="https://www.instagram.com/rukh.tech/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: '500', textDecoration: 'underline', textDecorationColor: 'var(--primary-accent)', textUnderlineOffset: '4px' }}>Instagram</a></li>
              <li><a href="https://www.tiktok.com/@rukh.tech" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: '500', textDecoration: 'underline', textDecorationColor: 'var(--primary-accent)', textUnderlineOffset: '4px' }}>TikTok</a></li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

// --- Contact Component ---
const Contact = () => {
  return (
    <div className="cards-section" style={{ minHeight: '80vh', paddingTop: '80px' }}>
      <div className="container">
        <span className="mono-tag" style={{ marginBottom: '16px', display: 'block' }}>REACH OUT</span>
        <h1 style={{ fontSize: '4rem', marginBottom: '60px' }}>Contact <em>Rukh</em></h1>
        
        <div className="card-grid">
          <div className="dark-card">
            <span className="mono-tag">EMAIL</span>
            <h3>Admissions</h3>
            <p>For application inquiries and general support.</p>
            <a href="mailto:admission@rukh.tech" style={{ color: 'var(--primary-accent)', fontWeight: '600', fontFamily: 'Outfit' }}>admission@rukh.tech →</a>
          </div>
          
          <div className="dark-card">
            <span className="mono-tag">SOCIAL</span>
            <h3>LinkedIn</h3>
            <p>Professional network and company updates.</p>
            <a href="https://linkedin.com/company/rukh-education/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-accent)', fontWeight: '600', fontFamily: 'Outfit' }}>Follow on LinkedIn →</a>
          </div>
          
          <div className="dark-card">
            <span className="mono-tag">SOCIAL</span>
            <h3>Facebook</h3>
            <p>Community updates and announcements.</p>
            <a href="https://www.facebook.com/profile.php?id=61594844004977" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-accent)', fontWeight: '600', fontFamily: 'Outfit' }}>Follow on Facebook →</a>
          </div>

          <div className="dark-card">
            <span className="mono-tag">SOCIAL</span>
            <h3>Instagram</h3>
            <p>Behind the scenes and visual highlights.</p>
            <a href="https://www.instagram.com/rukh.tech/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-accent)', fontWeight: '600', fontFamily: 'Outfit' }}>Follow on Instagram →</a>
          </div>

          <div className="dark-card">
            <span className="mono-tag">SOCIAL</span>
            <h3>TikTok</h3>
            <p>Short-form educational content and tips.</p>
            <a href="https://www.tiktok.com/@rukh.tech" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-accent)', fontWeight: '600', fontFamily: 'Outfit' }}>Follow on TikTok →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Legal Placeholder Components ---
const Terms = () => (
  <div className="container" style={{ paddingTop: '80px', minHeight: '60vh' }}>
    <span className="mono-tag" style={{ marginBottom: '24px', display: 'block' }}>LEGAL DOCUMENTATION</span>
    <h1 style={{ fontSize: '4.5rem', marginBottom: '40px' }}>Terms of <em>Service</em></h1>
    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>This document is currently being updated by our legal team. Please check back later.</p>
  </div>
);

const Conduct = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container" style={{ paddingTop: '80px' }}>
      <span className="mono-tag" style={{ marginBottom: '24px', display: 'block' }}>COMMUNITY GUIDELINES</span>
      <h1 style={{ fontSize: '4.5rem', marginBottom: '40px' }}>Rukh <em>Code of Conduct</em></h1>
      
      <div className="metadata-bar">
        <div className="meta-item"><span className="mono-tag">Version</span><span className="value">1.2</span></div>
        <div className="meta-item"><span className="mono-tag">Status</span><span className="value" style={{ color: 'var(--primary-accent)' }}>• Enforced</span></div>
        <div className="meta-item"><span className="mono-tag">Effective Date</span><span className="value">July 14, 2026</span></div>
      </div>

      <div className="doc-layout">
        <aside className="doc-sidebar">
          <ul>
            <li><a href="#section-1" onClick={(e) => { e.preventDefault(); scrollTo('section-1'); }}>1. Core Principles</a></li>
            <li><a href="#section-2" onClick={(e) => { e.preventDefault(); scrollTo('section-2'); }}>2. Academic Integrity</a></li>
            <li><a href="#section-3" onClick={(e) => { e.preventDefault(); scrollTo('section-3'); }}>3. Privacy</a></li>
            <li><a href="#section-4" onClick={(e) => { e.preventDefault(); scrollTo('section-4'); }}>4. Intellectual Property</a></li>
            <li><a href="#section-5" onClick={(e) => { e.preventDefault(); scrollTo('section-5'); }}>5. Violations</a></li>
            <li><a href="#section-6" onClick={(e) => { e.preventDefault(); scrollTo('section-6'); }}>6. Reporting</a></li>
          </ul>
        </aside>

        <main className="doc-content">
          <h2 id="section-1">1. Core Principles</h2>
          <p>Rukh is committed to providing a safe space for everyone, regardless of gender, race, nationality, religion, age, disability, or academic background. We have zero tolerance for harassment, discrimination, or offensive behavior of any kind.</p>

          <h2 id="section-2">2. Academic Integrity and Collaboration</h2>
          <h3>A. Original Work</h3>
          <p>Rukh is an elite program built on practical competence. All lab exercises, projects, and code submissions must be your own work.</p>
          <ul>
            <li><strong>Plagiarism:</strong> Copying another participant's code or submitting work that is not yours is strictly forbidden.</li>
            <li><strong>Collaboration:</strong> We encourage discussing concepts with peers, but you must write your own code.</li>
          </ul>
          <h3>B. Responsible AI Usage</h3>
          <p>We encourage the use of AI tools to aid your education, but using AI to copy-paste complete code solutions without understanding them violates academic integrity.</p>

          <h2 id="section-3">3. Privacy and Confidentiality</h2>
          <p>Participants must respect the privacy of others. You may not share personal contact details, CVs, or project solutions of other participants outside Rukh without their consent.</p>

          <h2 id="section-4">4. Intellectual Property</h2>
          <p>As outlined in our Terms of Service, all lectures, slides, and materials provided by Rukh are our intellectual property. Recording lectures or redistribution of materials is a violation of both our intellectual property rights and this Code of Conduct.</p>

          <h2 id="section-5">5. Consequences of Violations</h2>
          <p>We take violations of this Code of Conduct very seriously. Depending on severity, actions may include a written warning, assignment disqualification, or immediate expulsion from the program.</p>

          <h2 id="section-6">6. Reporting Violations</h2>
          <p>If you witness or experience harassment or academic dishonesty, please report it immediately to admission@rukh.tech. We will handle all reports with discretion.</p>
        </main>
      </div>
    </div>
  );
};

// --- Courses Component ---
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const categoryFilter = new URLSearchParams(location.search).get('category');

  useEffect(() => {
    fetch(`${API_URL}/courses`)
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error('Failed to fetch courses:', err));
  }, []);

  const filteredCourses = categoryFilter
    ? courses.filter(c => c.category.toLowerCase() === categoryFilter.toLowerCase())
    : courses;

  return (
    <div className="cards-section" style={{ minHeight: '80vh' }}>
      <div className="container">
        <span className="mono-tag" style={{ marginBottom: '16px', display: 'block' }}>DIRECTORY</span>
        <h1 style={{ fontSize: '4rem', marginBottom: '60px' }}>{categoryFilter ? `${categoryFilter} Programs` : 'All Programs'}</h1>
        
        <div className="card-grid">
          {filteredCourses.length > 0 ? filteredCourses.map(course => (
            <div key={course.id} className="dark-card">
              <span className="mono-tag">TRACK / {course.category.toUpperCase()}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to={`/courses/${course.id}`} style={{ color: 'var(--primary-accent)', fontWeight: '600', fontFamily: 'Outfit' }}>Enroll Now →</Link>
            </div>
          )) : (
            <p style={{ color: 'var(--text-muted)' }}>No programs found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Auth Components ---
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      localStorage.setItem('token', data.token);
      onLogin(data.user);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '400px', width: '100%', background: '#FFF', padding: '40px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Welcome <em>Back</em></h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Enter your credentials to access the portal.</p>
        
        {error && <div style={{ background: '#FEE', color: 'var(--primary-accent)', padding: '12px', borderRadius: '8px', marginBottom: '20px' }}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label className="mono-tag" style={{ display: 'block', marginBottom: '8px' }}>Email Address</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontFamily: 'Outfit', fontSize: '1rem' }} />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label className="mono-tag" style={{ display: 'block', marginBottom: '8px' }}>Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontFamily: 'Outfit', fontSize: '1rem' }} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Authenticate</button>
        </form>
        <p style={{ marginTop: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
          New applicant? <Link to="/register" style={{ color: 'var(--text-main)', fontWeight: '600' }}>Apply Here</Link>
        </p>
      </div>
    </div>
  );
};

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', university: '', track: '', password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => { e.preventDefault(); setStep(s => Math.min(s + 1, 3)); };
  const handlePrev = (e) => { e.preventDefault(); setStep(s => Math.max(s - 1, 1)); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 3) return handleNext(e);
    
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      setSuccess('Application submitted successfully. Redirecting to portal...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0' }}>
      <div style={{ maxWidth: '550px', width: '100%', background: '#FFF', padding: '50px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
        <span className="mono-tag" style={{ marginBottom: '16px', display: 'block' }}>ADMISSIONS — 2026</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Apply to <em>Rukh</em></h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Complete your application in about 3 minutes.</p>
        
        {/* Progress Bar */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{ height: '4px', flex: 1, background: s <= step ? 'var(--primary-accent)' : 'var(--border-subtle)', borderRadius: '2px', transition: 'all 0.3s' }} />
          ))}
        </div>
        
        {error && <div style={{ background: '#FEE', color: 'var(--primary-accent)', padding: '12px', borderRadius: '8px', marginBottom: '20px' }}>{error}</div>}
        {success && <div style={{ background: '#EFE', color: '#285e33', padding: '12px', borderRadius: '8px', marginBottom: '20px' }}>{success}</div>}
        
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <h3 style={{ marginBottom: '24px', fontFamily: 'Lora', fontSize: '1.4rem' }}>01 / 03: Personal Info</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label className="mono-tag" style={{ display: 'block', marginBottom: '8px' }}>First Name *</label>
                  <input type="text" required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontFamily: 'Outfit' }} />
                </div>
                <div>
                  <label className="mono-tag" style={{ display: 'block', marginBottom: '8px' }}>Last Name *</label>
                  <input type="text" required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontFamily: 'Outfit' }} />
                </div>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label className="mono-tag" style={{ display: 'block', marginBottom: '8px' }}>Email Address *</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontFamily: 'Outfit' }} />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 style={{ marginBottom: '24px', fontFamily: 'Lora', fontSize: '1.4rem' }}>02 / 03: Education & Track</h3>
              <div style={{ marginBottom: '20px' }}>
                <label className="mono-tag" style={{ display: 'block', marginBottom: '8px' }}>University / School *</label>
                <input type="text" required value={formData.university} onChange={e => setFormData({...formData, university: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontFamily: 'Outfit' }} />
              </div>
              <div style={{ marginBottom: '30px' }}>
                <label className="mono-tag" style={{ display: 'block', marginBottom: '8px' }}>Select Preferred Track *</label>
                <select required value={formData.track} onChange={e => setFormData({...formData, track: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', background: '#FFF', fontFamily: 'Outfit' }}>
                  <option value="">Choose a track...</option>
                  <option value="Kids">Kids Programming</option>
                  <option value="Campus">University Campus Track</option>
                  <option value="Projects">Academy Advanced Projects</option>
                </select>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3 style={{ marginBottom: '24px', fontFamily: 'Lora', fontSize: '1.4rem' }}>03 / 03: Account Security</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Create a secure password to access your application status and portal later.</p>
              <div style={{ marginBottom: '30px' }}>
                <label className="mono-tag" style={{ display: 'block', marginBottom: '8px' }}>Password *</label>
                <input type="password" required value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontFamily: 'Outfit' }} />
              </div>
            </>
          )}

          <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
            {step > 1 && (
              <button type="button" onClick={handlePrev} className="btn" style={{ background: '#EEE', color: 'var(--text-main)', flex: 1 }}>Back</button>
            )}
            <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>{step === 3 ? 'Submit Application' : 'Continue'}</button>
          </div>
        </form>
        <p style={{ marginTop: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
          Already applied? <Link to="/login" style={{ color: 'var(--text-main)', fontWeight: '600' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

// --- Main App ---
function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/conduct" element={<Conduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
