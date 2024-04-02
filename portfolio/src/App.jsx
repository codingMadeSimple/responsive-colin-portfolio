import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ProjectListItem from './components/ProjectListItem';
import './scss/App.scss';

const projectObject = [
  {
    projectName: "Charcoal & Cabernet",
    projectDescription: "A web application for restaurants that allows users to reserve specific seating while booking a reservation. A user can register and log in. A user is able to store their favorites between sessions. A user will also receive texts that update their delivery status.",
    projectLink: "https://github.com/codingMadeSimple/Charcoal-Cabernet",
    projectScreenshot: "https://raw.githubusercontent.com/NeonWaffles222/Charcoal-Cabernet/master/docs/Top%20of%20Homepage.png",
    screenshotAlt: "Charcoal and Cabernet Screenshot Placeholder",
    frontendStack: "React JS, CSS, SCSS",
    backendStack: "Ruby and Rails Backend",
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


  return (
    <div className="App">
      <NavBar />
      <ProjectListItem projectObject={projectObject}/>
    </div>
  );
}

export default App;
