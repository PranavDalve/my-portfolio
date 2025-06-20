// import Head from 'next/head';
// import fs from 'fs';
// import path from 'path';

// export default function Home({ data }) {
//   return (
//     <>
//       <Head>
//         <title>{data.name} | {data.role}</title>
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
//           integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
//           rel="stylesheet"
//         />
//       </Head>

//       {/* Navbar */}
//       <div className="navbar">
//         <div className="nav-left">My Porfolio</div>
//         <div className="nav-icons">
//           <div className="icon-with-label">
//             <i className="fa-solid fa-code icon-animated"></i>
//             <span className="icon-label">Skills</span>
//           </div>
//           <div className="icon-with-label">
//             <i className="fa-solid fa-diagram-project icon-animated"></i>
//             <span className="icon-label">Projects</span>
//           </div>
//           <div className="icon-with-label">
//             <i className="fa-solid fa-user-group icon-animated"></i>
//             <span className="icon-label">Let's Connect</span>
//           </div>
//           <div className="icon-with-label">
//             <i className="fa-solid fa-file icon-animated"></i>
//             <span className="icon-label">Resume</span>
//           </div>
//         </div>
//       </div>


//       {/* Hero Section */}
//       <div className="hero-container">
//         <div className="hero-left-wrapper">
//           <div className="hero-left">
//             <img src="/me.jpg" alt={data.name} className="hero-image" />
//           </div>
//         </div>
//         <div className="hero-right">
//           <h1 className="hero-title">
//             I'm <span className="highlight">{data.name}</span><br />
//             A {data.role}
//           </h1>
//           <p className="hero-bio">"{data.bio}"</p>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="skills-section">
//         <h2 className="section-title">Skills</h2>
//         <div className="skills-grid">
//           {data.skills.map((skill, index) => (
//             <div className="skill-card" key={index}>
//               <img src={skill.image} alt={skill.name} className="skill-image" />
//               <p className="skill-name">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'data.json');
//   const jsonData = fs.readFileSync(filePath, 'utf8');
//   const data = JSON.parse(jsonData);

//   return {
//     props: {
//       data
//     }
//   };
// }


import Head from 'next/head';
import fs from 'fs';
import path from 'path';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>{data.name} | {data.role}</title>
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
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Head>

      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">My Portfolio</div>
        <div className="nav-icons">
          <a href="#skills" className="icon-with-label">
            <i className="fa-solid fa-code icon-animated"></i>
            <span className="icon-label">Skills</span>
          </a>
          <a href="#education" className="icon-with-label">
            <i class="fa-solid fa-book"></i>
            <span className="icon-label">Education</span>
          </a>
          <a href="#projects" className="icon-with-label">
            <i className="fa-solid fa-diagram-project icon-animated"></i>
            <span className="icon-label">Projects</span>
          </a>
          <a href="#connect" className="icon-with-label">
            <i className="fa-solid fa-user-group icon-animated"></i>
            <span className="icon-label">Let's Connect</span>
          </a>
          <a href="#resume" className="icon-with-label">
            <i className="fa-solid fa-file icon-animated"></i>
            <span className="icon-label">Resume</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-left-wrapper">
          <div className="hero-left">
            <img src="/me.jpg" alt={data.name} className="hero-image" />
          </div>
        </div>
        <div className="hero-right">
          <h1 className="hero-title">
            I'm <span className="highlight">{data.name}</span><br />
            A {data.role}
          </h1>
          <p className="hero-bio">"{data.bio}"</p>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section" id="education">
        <h2 className="education-title">My Academic Journey</h2>
        <div className="education-grid">
          {data.education.map((edu, index) => {
            const icons = [
              "fa-user-graduate",    // For B.Tech
              "fa-building-columns", // For Junior College
              "fa-school"            // For School
            ];

            return (
              <div className="education-card" key={index}>
                <i className={`fa-solid ${icons[index]} education-icon`}></i>
                <p className="education-degree">{edu.degree}</p>
                <p className="education-institute">{edu.institution}</p>
                <p className="education-dates">{edu.duration} | {edu.location}</p>
              </div>
            );
          })}
        </div>
      </div>


      {/* Skills Section */}
      <div className="skills-section" id="skills">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I've worked with</p>
        <div className="skills-grid">
          {data.skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      
      {/* Projects Section */}
       <div className="projects-section" id="projects">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <div className={`project-card ${index === 0 ? 'internship' : ''}`} key={index}>
              <span className="project-tag">{index === 0 ? 'Internship' : 'College Project'}</span>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-points">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Placeholder Cards */}
          {/* {[...Array(5 - data.projects.length)].map((_, idx) => (
            <div className="project-card placeholder-card" key={`placeholder-${idx}`}>
              <h3 className="project-name">Coming Soon</h3>
            </div>
          ))} */}
        </div>
      </div>


      {/* Connect Section */}
      <div className="connect-section" id="connect">
        <h2 className="connect-title">Let's Connect</h2>
        <div className="connect-grid">
          
          {/* Email Card */}
          <div className="connect-card">
            <img src="/skills/email.png" alt="Email" className="connect-image" />
            <p className="connect-info">{data.email}</p>
            <button className="copy-btn" onClick={() => copyToClipboard(data.email)}>
              <i class="fa-solid fa-copy"></i>
            </button>
          </div>

    {/* LinkedIn Card */}
    <div className="connect-card">
      <img src="/skills/linkedin.png" alt="LinkedIn" className="connect-image" />
      <p className="connect-info">
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
          pranavdalve
        </a>
      </p>
      {/* <button className="copy-btn" onClick={() => copyToClipboard(data.linkedin)}>
        Click on the link
      </button> */}
    </div>

    {/* Phone Card */}
    <div className="connect-card">
      <img src="/skills/phone.png" alt="Phone" className="connect-image" />
      <p className="connect-info">{data.phone}</p>
      <button className="copy-btn" onClick={() => copyToClipboard(data.phone)}>
        <i class="fa-solid fa-copy"></i>
      </button>
    </div>

    

  </div>
</div>
        {/* Resume Section */}
        <div className="resume-section" id="resume">
          <h2 className="section-title resume-title">Resume</h2>
          <div className="resume-content">
            <div className="resume-preview">
              <img src="/resume-icon.jpg" alt="Resume Preview" className="resume-image" />
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="download-button">
                Download Resume
              </a>
              <p className="resume-text">You can view or download my resume using the button above.</p>
            </div>
          </div>
        </div>

    </>
  );
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard: " + text);
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

