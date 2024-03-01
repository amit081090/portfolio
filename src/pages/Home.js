
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../Styles/Home.css";
//import { Link } from "react-router-dom";



function Home() {


  return (
    <>
    <div className="home">
      <div className="about">
        <marquee><h2> Hi, My Name is Amit</h2></marquee>
        <div className="prompt">
          <p>"As a software developer, I have a passion for learning and creating driven by curiosity."</p>
          <p>Contact me:<b>+917895746078</b> or <b> bahugunaamit8@gmail.com</b></p>
          <a href="https://www.linkedin.com/in/amit-bahuguna-9578905a"> <LinkedInIcon /> </a>
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Next.js,Redux, HTML, CSS, NPM,Typescript
              GSAP, BootStrap, MaterialUI, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MongoDB, 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
    </>
  );
}

export default Home;