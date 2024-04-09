import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Statistics from './components/Statistics';
import ProjectListItem2 from './components/ProjectListItem2';
import Profile from './components/Profile';
import Footer from './components/Footer';
import './scss/App.scss';


const projectObject = [
  {
    projectName: "Charcoal & Cabernet",
    projectDescription: "A restaurant-focused web app where a user can register, log in/out and store their favorite dishes. They can also create, view, and edit orders and receive delivery status updates via text. A user that wishes to dine in will need to select a date, time and party size. An interactive map will then appear showing availability in blue and unavailable/booked seats in red.",
    projectLink: "https://github.com/codingMadeSimple/Charcoal-Cabernet",
    projectScreenshot: "https://raw.githubusercontent.com/NeonWaffles222/Charcoal-Cabernet/master/docs/Top%20of%20Homepage.png",
    screenshotAlt: "Charcoal and Cabernet Screenshot Placeholder",
    frontendStack: "React JS, CSS, SCSS",
    backendStack: "Ruby on Rails Backend, MVC architecture",
    apis: "Stripe, Twilio, Material-UI, React Router",
    partners: {
      Noah: {
        name: "Noah McMillan",
        github: "https://github.com/NeonWaffles222",
        linkedIn: "https://www.linkedin.com/in/noah-mcmillan-622756292/"
      }
      ,
      Steven: {
        name: "Steven Serruya",
        github: "https://github.com/steven-serruya",
        linkedIn: "https://www.linkedin.com/in/steven-serruya-b52425282/"
      }
    }
  },
];

function App() {
  const [currentSection, setCurrentSection] = useState('');

  return (
    <div className="App">
      <Banner />
      <NavBar handleNavLinkClick={(section) => setCurrentSection(section)} />
      <Statistics />
      <div className="profile-skills">
        <Profile />
        <Skills />
      </div>
      <ProjectListItem2 projectObject={projectObject} />
      <Footer />
    </div>
  );
}

export default App;


