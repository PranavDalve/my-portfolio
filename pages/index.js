import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import { useState, useRef } from 'react';
import parse from 'html-react-parser';
import { style } from 'framer-motion/client';
import emailjs from '@emailjs/browser';

// const form = useRef();

export default function Home({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => {
    setIsModalOpen(false);  // or whatever state you're using to control the modal
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_t37at9q',
      'template_cv6q7wd',
      form.current,
      'PmraW1QRrbJ76_sTM'
    ).then(
      () => {
        alert('Message sent!');
        setIsModalOpen(false);
      },
      () => {
        alert('Failed to send message.');
      }
    );
  };

  const clearForm = () => {
    if (form.current) {
      form.current.reset();
    }
  };


  return (
    <>
      <Head>
        <title>{data.myname}</title>
        <link rel="icon" href="/skills/title-logo.png"/>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu|Lora"></link>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Head>

      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">
          <img src={data.logo} alt="logo" className="nav-logo" />
        </div>

        {/* Hoverable Menu Wrapper */}
        <div
          className="menu-wrapper"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <div className="hamburger">
            <i className="fas fa-bars"></i>
          </div>

          <div className={`nav-icons ${menuOpen ? 'open' : ''}`}>
            <a href="#skills" className="icon-with-label">
              <i className="fa-solid fa-code icon-animated"></i>
              <span className="icon-label">Tech Stack</span>
            </a>
            <a href="#projects" className="icon-with-label">
              <i className="fa-solid fa-diagram-project icon-animated"></i>
              <span className="icon-label">My Projects</span>
            </a>
            <a href="#connect" className="icon-with-label">
              <i className="fa-solid fa-user-group icon-animated"></i>
              <span className="icon-label">Let's Connect</span>
            </a>
            <a
              href="Pranav_Dalve_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-with-label"
            >
              <i className="fa-solid fa-file icon-animated"></i>
              <span className="icon-label">Resume</span>
            </a>
          </div>
        </div>
      </div>


      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-content">
          <img src="/me.jpg" alt={data.name} className="hero-image" />
          
          <div className="hero-text">
            <h1 className="hero-title">
              Hey there<br></br> I'm <span className="highlight">{data.name}</span><br />
              A {data.role}
            </h1>
            <p className="hero-bio">"{data.bio}"</p>
          </div>
          <a className="hero-icon">
             <i class="fa-solid fa-angle-down fa-flip"></i>
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section" id="skills">
        <h2 className="section-title">Me & My Stack</h2>

        <div className="skills-wrapper">
          {/* Left - Skills Cards */}
          <div className="skills-left">
            <h2 className="section-subs">My Skills</h2>
            <div className="mini-cards-container">
              {data.skills.map((skill, index) => (
                <div className="mini-skill-card" key={index}>
                  <img src={skill.image} alt={skill.name} className="mini-skill-image" />
                  <p className="mini-skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - About Me */}
          <div className="skills-right">
            <h2 className="section-subs">About Me</h2>
            <div className="section-summary">
                <p>
                Hi, I’m Pranav Dalve a passionate and focused <strong> Back-End Developer </strong> who loves solving real-world problems through efficient code and clean architecture.
                </p>
                <p>
                My journey began with a deep interest in how systems work behind the scenes. I've honed my skills in building RESTful APIs, managing databases, and developing scalable backend systems using technologies like<strong>  Node.js, MongoDB, and Express</strong>. I also enjoy learning new tools and frameworks that enhance productivity and performance.
                </p>
                <p>
                Beyond just coding, I believe in writing maintainable, well-documented code and collaborating effectively with teams. Whether it’s integrating third-party APIs, designing data models, or debugging performance issues, I thrive on challenges that push me to grow.
                </p>
                <p>
                I'm actively looking for opportunities where I can contribute to innovative solutions and continue building impactful software.
                </p>
                <p>
                  Feel free to connect with me on{' '}
                  <a
                    href="https://linkedin.com/in/pranavdalve"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#6210bf', textDecoration: 'underline' }}
                  >
                    LinkedIn
                  </a>{' '}
                  or check out my projects on{' '}
                  <a
                    href="https://github.com/PranavDalve"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#6210bf', textDecoration: 'underline' }}
                  >
                    GitHub
                  </a>.
                </p>
              </div>
              <button className="contact-button" onClick={() => setIsModalOpen(true)}>Contact Me</button>

              {isModalOpen && (
                
                <div className="contact-modal">
                  <img src={data.logo} alt="Logo" className="contact-logo" />
                  <button className="close-icon" onClick={closeModal}>
                    <i className="fas fa-times"></i>
                  </button>
                  <p className="contact-title">Thanks for reaching me <br /> I'm excited to hear from you!</p>
                  <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" name="user_name" placeholder="Your Name" required />
                    <input type="email" name="user_email" placeholder="Your Email" required />
                    <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Expierence Section */}
      <div className="experience-section" id="experience">
        <h2 className="experience-title">Work Experience</h2>
        <div className="experience-timeline">
          {data.experience.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="experience-duration">{item.duration}</span>
                <h3 className="experience-role">{item.role}</h3>
                <h4 className="experience-company">{item.company}</h4>
                <div className="experience-desc">
                  {item.description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projet Section */}

      <div className="projects-section" id="projects">
        <h2 className="projects-title">My Work Journey</h2>
        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.titleImage} alt={project.title} className="project-thumbnail" />
              <h3 className="project-name">{project.title}</h3>
              <button className="see-more-button" onClick={() => setSelectedProject(project)}>
                See More
              </button>
            </div>
          ))}
        </div>

        {/* Modal or Tab-like Project Detail View */}
        {selectedProject && (
        <div className="project-full-modal">
          <div className="modal-header">
            {/* <img src={data.logo} alt="Logo" className="modal-logo" /> */}
            <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
          </div>
          <div className="modal-body">
            <h2 className="modal-title">{selectedProject.title}</h2>
            <div className="modal-content-area">
              <div className="modal-left">
                <h4>Technologies Used</h4>
                <div className="modal-images">
                  {selectedProject.images?.map((img, i) => (
                    <img key={i} src={img} alt={`Tech ${i}`} className="modal-tech-image" />
                  ))}
                </div>
              </div>
              <div className="modal-details paragraph-block">
                <h4>More about the Project</h4>
                <div className="modal-description">
                  {selectedProject.description.map((para, index) => (
                    <p key={index}>
                      {para}
                    </p>
                  ))}

                  {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button"
                      >
                        <i className="fab fa-github fa-beat --fa-animation-duration: 2s"></i>
                      </a>
                    )}
                </div>             
                {/* <ul>
                  {selectedProject.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="download-cv-wrapper">
      <a href="/Pranav_Dalve_resume.pdf" download className="download-cv-button">
        <i className="fas fa-download" style={{ marginRight: '8px' }}></i>
        Download CV
      </a>
    </div>
      </div>


      {/* Connect Section */}
      <div className="contact-page-section" id="connect">
        <h2 className="contact-title">Let's Connect</h2>

        <div className="contact-page-container">

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="contact-input"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="contact-textarea"
            ></textarea>
            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="button-group">
                <button type="button" className='clear-button' onClick={clearForm}>Clear Text</button>
        </div>
      </div>

        {/* Resume Section */}
        <footer className="footer">
          <div className="footer-content">
            <h3 className="footer-name">Pranav Dalve</h3>
            <p className="footer-tagline">Always building, always learning.</p>
            <div className="footer-icons">
              <a href="https://github.com/PranavDalve" target="_blank"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/pranavdalve" target="_blank"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com/dalvepranav" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="mailto:pranavudalve@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Pranav Dalve. All rights reserved.</p>
          </div>
        </footer>
    </>
  );
}


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  return {
    props: {
      data
    }
  };
}

