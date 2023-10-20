import logo from './logo.svg';
import './App.css';

function Header(){
  return(
    <div className="head">
      <div className='logo'>
        <img src={logo} width={50}></img>
        <a>ReactFacts</a>
      </div>
      <div>
        <a>React Course-Project 1</a>
      </div>
    </div>
  )
}

function MainBody(){
  return(
    <div className='mainbody'>
      <div className='title'>Fun facts about React</div>
      <ul className='facts'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Wlalke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Meta, formerly known as Facebook</li>
        <li>Poweres thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <>
    <Header />
    <MainBody />
    </>
    
  );
}

export default App;
