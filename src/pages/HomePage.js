import Header from '../components/Header.js';
import '../pages/HomePage.css';

function HomePage() {
    return (
        <div>
            <Header />
  
            <div className='main'>
            <h1>Welcome!</h1>
        </div>
  
        <div className='section'>
  
          <div className='about'>
            <div className='abouttext'>
              <h2>About Me</h2>
              <p>Hello! My name is Alexie Gordon and I use this site to showcase
                what I am able to do with programming.
              </p>
              <p>
                I typically use Java as that language is the focus 
                of my computer science degree. However, I am also learning SQL,
                HTML, CSS, and Javascript. You can find examples of my work in the
                the section marked "projects." I have also taken the majority of coursework
                for Cybersecurity, but switched to Computer Science to align more with
                my coding interests.
              </p>
              <p>
                I am based in San Francisco where you can typically find me hiking, cycling,
                crocheting, or cooking. I have two cute cats that keep me busy. I am looking
                for work as a front-end or back-end developer! Thank you for visiting my page!
              </p>
            </div>
          </div>
  
          <div className='education'>
            <h2>Education</h2>
            <h3>Computer Science</h3>
            <h4>Western Governors University</h4>
            <p>August 2023 - May 2025</p>
            <h3>Sociology</h3>
            <h4>CSU Fullerton</h4>
            <p>August 2016 - May 2020</p>
          </div>
  
          <div className='certifications'>
            <h2>Certifications</h2>
            <h3>CompTIA</h3>
            <h4><li>Network+</li>  <li>Security+</li>  <li>A+</li></h4>
            <h3>Linux Essentials</h3>
            <h3>ITIL Foundations</h3>
          </div>
  
          <div className='projects'>
            <h2>Projects</h2>
            <a href="https://github.com/alexieg"> Github
            </a>
          </div>
  
        </div>
      </div>
    )
}

export default HomePage;