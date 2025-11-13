import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  const projects = [
    {
      title: "E MediCare - A Modern Hospital Management System",
      description:
        "A comprehensive web-based hospital management system designed to streamline patient, doctor, and admin operations. It includes appointment scheduling, pharmacy management, ambulance service, and medicine home delivery.",
      technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "AI-based Personal Health Tracking System",
      description:
        "An intelligent health tracking platform that predicts potential health risks using machine learning algorithms and provides personalized health insights and visualization.",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Matplotlib"]
    },
    {
      title: "Lung Cancer Prediction Model",
      description:
        "A predictive model for early detection of lung cancer using medical data with binary attributes. It applies classification algorithms such as Random Forest and Logistic Regression to achieve accurate results.",
      technologies: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      title: "Railway Management System for Bangladesh",
      description:
        "A proposed system aimed at improving Bangladesh Railway’s peak-hour ticket purchasing process and enhancing efficiency using digital solutions.",
      technologies: ["Python", "Django", "MySQL"]
    },
    {
      title: "Automation Platform using RAG and LLM",
      description:
        "An automation workflow system developed during AI/ML internship at 9 AM Solutions. It integrates Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs) using n8n to automate website data pipelines.",
      technologies: ["Python", "LLM", "n8n", "API Integration", "Automation"]
    },
    {
      title: "Stock Price Prediction Project",
      description:
        "A machine learning project to predict stock prices using historical market data. It leverages regression models, feature engineering, and data visualization to forecast future stock trends and support investment decisions.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Data Analysis"]
    },
    {
      title: "NeuroGPT",
      description:
        "An AI/ML project using Python to explore neural network-based text generation and conversational AI applications.",
      technologies: ["Python", "Machine Learning", "Deep Learning"]
    },
    {
      title: "IEEEWebsite",
      description:
        "The official website for IEEE Student Branch at Green University of Bangladesh, showcasing members, events, and activities to promote innovation and professional growth.",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"]
    },
    {
      title: "Python Programming GUB EDGE Project",
      description:
        "A programming project completed as part of the GUB EDGE initiative, focusing on Python development and applied problem-solving skills.",
      technologies: ["Python"]
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and professional information using modern web development technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "DataCom Project",
      description:
        "3rd Year Data Communication Project involving networking concepts and practical implementation of communication protocols.",
      technologies: ["C++"]
    },
    {
      title: "Smart Society Application using IoT",
      description:
        "A computer networking and IoT-based project focused on smart home and smart community solutions using Cisco networking labs.",
      technologies: ["IoT", "Networking", "Cisco"]
    },
    {
      title: "Datacom CSE308",
      description:
        "Data Communication Lab project completed for CSE 308, involving hands-on exercises in network protocols and communication systems.",
      technologies: ["Networking", "Lab Exercises"]
    }
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">Imran's Portfolio</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#academics">Academic</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#activities">Extracurricular Activities</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/md-abu-rayhan-imran-6262b61b6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/imranbd23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.facebook.com/rafsan.rudro.75" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/_ar_imran/?fbclid=IwY2xjawOCcepleHRuA2FlbQIxMABicmlkETFCaUFUZDVsWWtEbEVhZk52c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhgUntnYK2hhrMpVlEA-HNzQU9pENZxqNRj3P5ti7Dm_Z0ve7DdDiZRLwKay_aem_6wEnEorA8qCKMEZUsgIi_Q#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>

            <div className="intro">
         <h1>ML Engineer | Data Scientist | AI Engineer | Researcher</h1>
         <h2>Md. Abu Rayhan Imran</h2>
  <p>
    I'm an AI/ML enthusiast and researcher, currently interning at 9 AM Solutions,
    where I work on automation, RAG, LLMs, and AI-driven web platforms. My current
    focus is in the healthcare domain, building intelligent solutions, and I am
    looking to expand my expertise into broader domains to create impactful,
    data-driven applications.
  </p>
  <div className="button-group">
    <a href="#about" className="learn-btn">Learn more</a>
    <a href="#contact" className="hire-btn">Hire Me</a>
  </div>
</div>


            <div className="hero-image">
              <img src="Imran_Formal_Pic_Final.jpg" alt="Md. Abu Rayhan Imran" />
            </div>
          </div>
        </section>

<section id="about" className="section about-section">
  <h2 className="section-title">About Me</h2>

  <div className="about-content">

    {/* About Text */}
    <div className="about-text">
      <p>
        Hi! I'm Md. Abu Rayhan Imran, a Computer Science and Engineering student at 
        Green University of Bangladesh and an aspiring AI/ML engineer. 
        I’m passionate about developing intelligent systems that combine technology and data 
        to solve real-world problems, especially in the healthcare domain.
      </p>

      <p>
        Currently, I’m working as an AI/ML Intern at 9 AM Solutions, where I explore 
        automation workflows, RAG pipelines, and LLM-based applications using platforms 
        like n8n and other modern AI frameworks. This experience has helped me understand 
        how to build scalable, AI-driven web platforms that enhance automation and efficiency.
      </p>

      <p>
        My technical expertise includes Python, Java, React.js, Machine Learning, and Data Science. 
        I have developed projects such as an AI-based Health Tracking System and a Proposed Railway 
        Management System for Bangladesh, aiming to address real-life challenges through innovation 
        and practical research.
      </p>

      <p>
        I have maintained a strong academic record, achieving a GPA of 5.00 in both SSC and HSC. 
        I believe in continuous learning, teamwork, and research. My goal is to pursue a Master’s 
        degree in a top-tier country and contribute globally as an AI researcher, with a focus on 
        intelligent healthcare and automation technologies.
      </p>
{/* CV Buttons */}
<div className="cv-button">
  <a href="Md_Abu_Rayhan_Imran_CV.pdf" download className="download-cv-btn">
    Download My CV
  </a>
  <a href="Md_Abu_Rayhan_Imran_CV.pdf" target="_blank" rel="noopener noreferrer" className="view-cv-btn">
    View My CV
  </a>
</div>
    </div>

    {/* Skills Section */}
    <div className="skills">
      <h3>My Skills</h3>

      <div className="skills-grid">

        <div className="skill-category">
          <h4>Programming Languages</h4>
          <p>Python, Java, C, PHP, JavaScript, HTML, CSS, Bash, Assembly Language</p>
        </div>

        <div className="skill-category">
          <h4>Frameworks & Libraries</h4>
          <p>React, Flutter (Dart), NumPy, Pandas, Matplotlib, Scikit-learn, Hugging Face, ML Models</p>
        </div>

        <div className="skill-category">
          <h4>Software Development</h4>
          <p>Odoo (Entry Level), Web Application Development, Automation, AI Integration, RAG & LLM Workflows</p>
        </div>

        <div className="skill-category">
          <h4>Database</h4>
          <p>MySQL, Data Handling, RESTful APIs, HTTP Protocol Knowledge</p>
        </div>

        <div className="skill-category">
          <h4>Technical Skills</h4>
          <p>Machine Learning, Data Science, NLP, Predictive Analytics, Problem Solving, Research</p>
        </div>

      </div>
    </div>
  </div>
</section>

{/*Research Section*/}
 <section id="research" className="section research-section">
  <h2 className="section-title">Research</h2>

  <div className="research-items">

    {/* Thesis Project */}
    <div className="research-item">
      <h3>Predictive Model for Early Detection of Cardiovascular Diseases Using Machine Learning</h3>
      <p>
        This research focuses on developing a machine learning-based predictive model 
        for the early detection of cardiovascular diseases. The study integrates 
        feature selection, supervised learning algorithms, and medical data analytics 
        to improve diagnostic accuracy. It also explores the use of explainable AI 
        (XAI) for transparency in clinical decision support, enabling better 
        interpretation of model outputs for healthcare professionals.
      </p>
      <div className="details">
        <p><strong>Status:</strong> Ongoing (Thesis Project)</p>
        <p><strong>Domain:</strong> AI in Healthcare | Predictive Analytics | Explainable AI</p>
        <p><strong>Tools & Technologies:</strong> Python, Scikit-learn, Pandas, NumPy, Matplotlib</p>
      </div>
    </div>

    {/* Lung Cancer Project */}
    <div className="research-item">
      <h3>Lung Cancer Prediction Using Machine Learning</h3>
      <p>
        A classification-based study for predicting lung cancer risk using 
        binary-featured datasets. The research applies machine learning algorithms 
        such as Random Forest and Logistic Regression to achieve high accuracy 
        and reliability. It emphasizes medical data preprocessing, feature analysis, 
        and evaluation metrics to enhance real-world healthcare outcomes.
      </p>
      <div className="details">
        <p><strong>Status:</strong> Completed (Research Project)</p>
        <p><strong>Domain:</strong> Medical AI | Data Mining | Health Informatics</p>
        <p><strong>Tools & Technologies:</strong> Python, Pandas, NumPy, Matplotlib, Scikit-learn</p>
      </div>
    </div>

    {/* IEEE Paper 1 */}
    <div className="research-item">
      <h3>Web-based Explainable Machine Learning Model for Early-Stage Heart Disease Detection</h3>
      <p>
        This paper presents a web-integrated explainable machine learning model 
        for early-stage heart disease detection. The system leverages XAI techniques 
        to provide transparent, interpretable predictions, helping clinicians 
        understand model decisions. The proposed model was developed using 
        Scikit-learn and deployed through a web platform for real-time accessibility.
      </p>
      <div className="details">
        <p><strong>Conference:</strong> IEEE i-COSTE 2025</p>
        <p><strong>Status:</strong> Accepted, 20 October 2025</p>
        <p><strong>Domain:</strong> Explainable AI | Web-based ML | Health Informatics</p>
        <p><strong>Tools & Technologies:</strong> Python, Scikit-learn, Flask/Django, SHAP, HTML/CSS</p>
      </div>
    </div>

    {/* IEEE Paper 2 */}
    <div className="research-item">
      <h3>SHAP-Based Explainable AI Model for Early Detection of Cardiovascular Disease</h3>
      <p>
        This study introduces a SHAP-based explainable AI framework that enhances 
        interpretability in cardiovascular disease prediction. It focuses on feature 
        attribution methods to help medical professionals gain insights into how 
        model decisions are made. The approach improves diagnostic trust and supports 
        clinical adoption of AI models.
      </p>
      <div className="details">
        <p><strong>Conference:</strong> IEEE WIE CONECE 2025</p>
        <p><strong>Status:</strong> Accepted (2025)</p>
        <p><strong>Domain:</strong> Explainable AI | Healthcare Analytics | Predictive Modeling</p>
        <p><strong>Tools & Technologies:</strong> Python, SHAP, Scikit-learn, Pandas, Matplotlib</p>
      </div>
    </div>

  </div>
</section>

<section id="academics" className="section academics-section">
  <h2 className="section-title">Academics</h2>

  <div className="academic-items">

    {/* University */}
    <div className="academic-item">
      <h3>B.Sc. in Computer Science & Engineering</h3>
      <p><strong>Institution:</strong> Green University of Bangladesh</p>
      <p><strong>Duration:</strong> 2022 - 2026 (expected)</p>
      <p><strong>CGPA:</strong> 3.13 (current)</p>
      <p>
        Studying core Computer Science subjects, including Machine Learning, Data Science, Web Development, DSA, Programimng and Database Systems. 
        Actively engaged in research projects and hands-on applications, such as AI-based Health Tracking and Railway Management System proposals.
      </p>
    </div>

    {/* HSC */}
    <div className="academic-item">
      <h3>Higher Secondary Certificate (HSC)</h3>
      <p><strong>Institution:</strong> Science Department, Kabi Nazrul Govt. College</p>
      <p><strong>Year:</strong> 2020</p>
      <p><strong>GPA:</strong> 5.00</p>
      <p>
        Completed Science stream with top grades, focusing on Mathematics, Physics, Chemistry, and Computer Science.
      </p>
    </div>

    {/* SSC */}
    <div className="academic-item">
      <h3>Secondary School Certificate (SSC)</h3>
      <p><strong>Institution:</strong> Science Department, Jatrabari Ideal School and College</p>
      <p><strong>Year:</strong> 2018</p>
      <p><strong>GPA:</strong> 5.00</p>
      <p>
        Completed secondary education with excellent results, laying a strong foundation in science and analytical problem-solving.
      </p>
    </div>

    {/* Achievements / Certifications */}
    <div className="academic-item">
      <h3>Academic Achievements & Certifications</h3>
      <ul>
        <li>Maintained perfect GPA in both SSC and HSC.</li>
        <li>Published research papers in IEEE conferences (i-COSTE 2025, WIE CONECE 2025).</li>
        <li>Completed internships and projects related to AI/ML, healthcare, and web development.</li>
        <li>Active participation in university clubs and technical communities.</li>
      </ul>
    </div>

  </div>
</section>


        <section id="portfolio" className="section portfolio-section">
          <h2 className="section-title">Portfolio</h2>
          <div className="portfolio-items">
            {projects.map((project, index) => (
              <div key={index} className="portfolio-item">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

<section id="activities" className="section activities-section">
  <h2 className="section-title">Extracurricular Activities</h2>

  <div className="activities-items">
    {[
      {
        title: "IEEE Student Branch, Green University of Bangladesh",
        role: "Treasurer (2025 – 2026)",
        description:
          "Responsible for managing financial records, event budgeting, and funding coordination for IEEE SB. Ensuring transparency and supporting academic and technical events across the campus."
      },
      {
        title: "International Activity Club, GUB",
        role: "General Secretary (2025 – 2026)",
        description:
          "Leads and coordinates international collaboration, cultural exchange events, and global awareness programs for students, strengthening university representation internationally."
      },
      {
        title: "Green University Research & Publication Community (GURPC)",
        role: "Active Member",
        description:
          "Engages in academic research discussions, manuscript preparation, and publication mentorship to promote a culture of innovation and scientific contribution among students."
      },
      {
        title: "Research Innovation & Thesis Center (RITC)",
        role: "Campus Ambassador (2025)",
        description:
          "Serves as the liaison between RITC and the university community, promoting research initiatives, conferences, and thesis development opportunities."
      },
      {
        title: "People’s Open Rover Scout Group",
        role: "Assistant Rover Mate (ARM) – 2025",
        description:
          "Actively contributes to social development, leadership training, and community volunteering under the Bangladesh Scouts program."
      },
      {
        title: "IEEE Computer Society, Student Branch Chapter – GUB",
        role: "Former Executive Member (2024 – 2025)",
        description:
          "Organized coding challenges, tech seminars, and knowledge-sharing sessions to foster interest in AI, software development, and research."
      },
      {
        title: "Volunteer – STI 2024 & CSE Carnival 2024",
        role: "Event Volunteer",
        description:
          "Supported event management, participant coordination, and technical arrangements during major departmental tech events at Green University of Bangladesh."
      },
      {
        title: "International Congress on Recent Trends in Computer Science (ICRTCS)",
        role: "Former Ambassador",
        description:
          "Represented Green University in international research discussions, facilitating collaboration and participation in global computer science research initiatives."
      },
      {
        title: "WICE Bangladesh Official",
        role: "Campus Representative (CR)",
        description:
          "Acts as a bridge between WICE Bangladesh and GUB students, encouraging women empowerment, innovation, and technical leadership initiatives."
      },
      {
        title: "BD Clean",
        role: "Former Member (2024)",
        description:
          "Contributed to national cleanliness and awareness campaigns under the BD Clean movement, promoting environmental responsibility."
      }
    ].map((activity, index) => (
      <div key={index} className="activity-item">
        <h3>{activity.title}</h3>
        <h4>{activity.role}</h4>
        <p>{activity.description}</p>
      </div>
    ))}
  </div>
</section>


        
        <section id="contact" className="section contact-section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p><strong>Email:</strong> aburayhan2550@gmail.com</p>
              <p><strong>Phone:</strong> +880 1628171665</p>
              <p><strong>Location:</strong> Dhaka, Bangladesh</p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Md. Abu Rayhan Imran. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;