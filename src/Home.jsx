import { useState, useEffect } from 'react'
import './styles/Home.scss'
import profileImg from '/images/profile.jpg'
import { Link } from 'react-router-dom'

//tech stack logos
import pythonLogo from '/images/pythonLogo.png'
import tensorflowLogo from '/images/TensorFlowLogo.svg'
import gcpLogo from '/images/gcpLogo.svg'
import kerasLogo from '/images/KerasLogo.svg'

import reactLogo from '/images/reactLogo.svg'
import sassLogo from '/images/sassLogo.svg'
import nodeLogo from '/images/nodeJSLogo.svg'
import mongoLogo from '/images/mongoDBLogo.svg'
import gastbyLogo from '/images/gatsbyLogo.svg'
import JSLogo from '/images/JSLogo.svg'
import figmaLogo from '/images/FigmaLogo.svg'

import puppeteerLogo from '/images/puppeteerLogo.svg'
//node
//js

import unityLogo from '/images/unityLogo.svg'
import CSharpLogo from '/images/CSharpLogo.svg'

const techDict = {
  'Python': pythonLogo,
  'React': reactLogo,
  'Node': nodeLogo,
  'CSharp': CSharpLogo,
  'Gastby': gastbyLogo,
  'JS': JSLogo,
  'Keras': kerasLogo,
  'SASS': sassLogo,
  'MongoDB': mongoLogo,
  'Puppeteer': puppeteerLogo,
  'Tensorflow': tensorflowLogo,
  'Unity': unityLogo,
  'GCP': gcpLogo,
  'Figma': figmaLogo,
}

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+}{][/<>';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

export default function Home() {
  // Text animation
  const words = ["Codes", "Innovates", "Designs", "Develops", "Builds", "Leads", "Hacks"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState(generateRandomString(words[wordIndex].length));
  const [timeLeft, setTimeLeft] = useState(1);
  const [ticker, setTicker] = useState(0);
  const [wordSwitch, setIsWordSwitch] = useState(false);
  const [flip, setFlip] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  const onTimeout = () => {
    if(ticker == 0){
      setTicker(3);

      if(!flip) {
        setCharIndex((prevIndex) => prevIndex + 1);
      }else{
        setCharIndex((prevIndex) => prevIndex - 1);
      }
  
      setText(words[wordIndex].substring(0, charIndex) + generateRandomString(words[wordIndex].length - charIndex));
  
      if(charIndex >= words[wordIndex].length) {
        setFlip(true);
        setIsFirst(false);
        setIsWordSwitch(true);
        setTimeLeft(150);
      }
      else if(charIndex <= 0 && !isFirst) {
        setFlip(false);
        if(wordSwitch){
          if(wordIndex >= words.length - 1) {
            setWordIndex(0);
          }else{
            setWordIndex(wordIndex + 1);
          }
          setIsWordSwitch(false);
        }
        setTimeLeft(4);
      }
      else{
        setTimeLeft(4);
      }
    }
    else{
      setText(words[wordIndex].substring(0, charIndex) + generateRandomString(words[wordIndex].length - charIndex));
      setTicker((prev) => prev - 1);
      setTimeLeft(4);
    }
  }

  useEffect(() => {
    if (timeLeft == 0) {
      onTimeout();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 7);

    return () => clearInterval(timerId);
  }, [onTimeout]);

  // Snowflake animation
  const [snowflakes, setSnowflakes] = useState([]);

  const createSnowflake = () => {
    const size = Math.random() * 30 + 8;
    const drift = Math.random() * 50 + size;
    const animationDuration = Math.random() * 4 + 2;
    const spinDuration = Math.random() * 3 + 1; 

    const newSnowflake = {
      id: Math.random(), 
      size,
      drift,
      left: Math.random() * 100,
      animationDuration,
      spinDuration,
    };

    setSnowflakes((prev) => [...prev, newSnowflake]);

    // Remove snowflake after it's done falling
    setTimeout(() => {
      setSnowflakes((prev) => prev.filter((flake) => flake.id !== newSnowflake.id));
    }, animationDuration * 1000); // Convert seconds to milliseconds
  };

  const handleAnimationEnd = (flakeId) => {
    setSnowflakes((prev) => prev.filter((flake) => flake.id !== flakeId));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      createSnowflake();
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // tech stack
  const [isGame, setIsGame] = useState(null);

  // no game - cards animation
  const cardClick = (e) => {
    e.preventDefault();
    const card = e.currentTarget;
    console.log(card);
    card.classList.toggle('flipped');
  }

  // game stuff
  const [currentSelection, setCurrentSelection] = useState([]);
  const correctMatching = {
    'Machine Learning': ['Python', 'Tensorflow', 'GCP', 'Keras'],
    'Fullstack Web Development': ['React', 'SASS', 'Node', 'MongoDB', 'Gastby', 'JS', 'Figma'],
    'Web Scraping': ['Puppeteer', 'Node', 'JS'],
    'Game Development': ['Unity', 'CSharp']
  }
  const [currentStack, setCurrentStack] = useState('Machine Learning');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFinal, setIsFinal] = useState(false);

  useEffect(() => {
    console.log(currentSelection);
    if(correctMatching[currentStack].length == currentSelection.length){
      let correct = true;
      correctMatching[currentStack].forEach((tech) => {
        if(!currentSelection.includes(tech)){
          correct = false;
        }
      });

      if(correct){
        let stackIndex = Object.keys(correctMatching).indexOf(currentStack);
        if(stackIndex >= Object.keys(correctMatching).length - 1){ //end of stacks
          setIsFinal(true);
        }else{ //move to next stack
          setIsSuccess(true);
          setCurrentStack(Object.keys(correctMatching)[stackIndex + 1]);
        }
        setCurrentSelection([]);
        document.querySelectorAll('.tech').forEach((tech) => {
          tech.classList.remove('selected');
        });
      }
    }
  }, [currentSelection]);

  useEffect(() => {
    if(isSuccess){
      setTimeout(() => {
        setIsSuccess(false);
      }, 1500);
    }else if(isFinal){
      setTimeout(() => {
        setIsFinal(false);
        setIsGame(false);
        setCurrentStack('Machine Learning');
      }, 3000);
    }
  }, [isSuccess, isFinal]);

  //scroll animation
  
  return (
    <>  
      <main className='Home'>
        <div className="hero">
          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="snowflake"
              style={{
                height: `${flake.drift}px`,
                left: `${flake.left}%`,
                fontSize: `${flake.size}px`,
                animationDuration: `${flake.animationDuration}s`,
                animationName: `fall`,
                animationTimingFunction: "linear",
                animationIterationCount: "1",
                animationFillMode: "forwards",
                transformOrigin: "center",
                animation: `fall ${flake.animationDuration}s linear forwards, spin ${flake.spinDuration}s linear infinite`,
              }}
              onAnimationEnd={() => handleAnimationEnd(flake.id)}
            >
              *
            </div>
          ))}
          <div className="heroText">
            <h2>Travis <span>{text}</span></h2>
            <div className="heroContent">
              <p>Welcome to my website! I'm excited to show you around. Here are some good places to get started:</p>
              <div className="heroButtons">
                <Link id='portfolio' to="/portfolio">Portfolio</Link>
                <Link id='blog' to="/blog">Blog</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="head">
            <p className="pre-head">
              Why should you care?
            </p>
            <h2>About Me</h2>
            <p className="sub-head">
              Quick overview of who I am and what I do.
            </p>
          </div>
          <div className="aboutContent">
            <img src={profileImg} alt="Profile Photo" />
            <p>Nice to meet you! My name is Travis Falk. I am a 19 year old college student and product developer&#40;among other things&#41; living in Boston. I have been obsessed with building products for years, starting my development journey at 10 years old. This website is a collection of my previous experiences and projects, as well as my current interests and knowledge. Enjoy!</p>
          </div>
        </div>
        <div className="techStackContainer">
          <div className="head">
            <p className="pre-head">
              What can I do?
            </p>
            <h2>Tech Stacks</h2>
            <p className="sub-head">
              {isGame == null ? "Want to test your knowledge? Play a game to learn about my tech stacks or just skip to the information." : (isGame == true ? "Click on technologies to match them to the stack. When you get the correct match you will move to the next stack. Good luck!" : "Click on a card to learn more about my stacks!")}
            </p>
          </div>
          <div className="techStack">
            {isGame == null ? 
              <div className="gameDecision">
                <button id='no' onClick={() => setIsGame(false)}>No Games</button>
                <button id='yes' onClick={() => setIsGame(true)}>Play Game!</button> 
              </div> : (isGame ?
                  <div className="game">
                    <button id='switch' onClick={() => setIsGame(false)}>Skip the Game</button>
                    {isFinal ? <div className="win"><p id='success'>You Win!</p></div> : 
                      <>{isSuccess ? <p id='success'>Correct!</p> : 
                      <div className="instructions">
                        <p id="instruction">Find technologies used for:</p>
                        <p id='currentStack'>{currentStack}</p>
                      </div>}
                      <div className="options">
                        {Object.entries(techDict).map(([tech, logo]) => (
                          <button className="tech" key={tech} onClick={(e) => {
                            e.preventDefault();
                            if(!e.currentTarget.classList.contains('selected')){
                              setCurrentSelection([...currentSelection, tech]);
                            }else{
                              setCurrentSelection(currentSelection.filter((selected) => selected !== tech));
                            }
                            e.currentTarget.classList.toggle('selected');
                          }}>
                            <img src={logo} alt={`${tech} logo`} />
                            <p>{tech}</p>
                          </button>
                        ))}
                      </div></>
                    }
                  </div> : 
                  <div className="noGame">
                    <button id='switch' onClick={() => setIsGame(true)}>Play the Game</button>
                    <div onClick={cardClick} className="machineLearning">
                      <div className="flipContainer">
                        <div className="front">
                          <h3>Machine Learning</h3>
                          <p>Data manipulation, synthesis, retrieval, and analysis/prediction using machine learning and cloud computing platforms. There is a reason this complex tech stack is so popular.</p>
                        </div>
                        <div className="back">
                          <div className="sectionContainer">
                            <p>Language&#40;s&#41;:</p>
                            <div className="language">
                              <div className="tech">
                                <img src={pythonLogo} alt="Python logo" />
                                <p>Python</p>
                              </div>
                            </div>
                          </div>
                          <div className="sectionContainer">
                            <p>'Framework'&#40;s&#41;:</p>
                            <div className="framework">
                              <div className="tech">
                                <img src={tensorflowLogo} alt="Tensorflow logo" />
                                <p>Tensorflow</p>
                              </div>
                              <div className="tech">
                                <img src={kerasLogo} alt="Keras logo" />
                                <p>Keras</p>
                              </div>
                            </div>
                          </div>
                          <div className="sectionContainer">
                            <p>Other:</p>
                            <div className="other">
                              <div className="tech">
                                <img src={gcpLogo} alt="GCP logo" />
                                <p>GCP</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div onClick={cardClick} className="webDevelopment">
                      <div className="flipContainer">
                        <div className="front">
                          <h3>Fullstack Website Development</h3>
                          <p>A Classic, industry standard, fullstack development toolkit. I can do everything from beautiful design, to real time data updates, payment processing, and other integrations.</p>
                        </div>
                        <div className="back">
                          <div className="sectionContainer">
                            <p>Language&#40;s&#41;:</p>
                            <div className="language">
                              <div className="tech">
                                <img src={JSLogo} alt="JavaScript logo" />
                                <p>JavaScript</p>
                              </div>
                              <div className="tech">
                                <img src={sassLogo} alt="SAAS logo" />
                                <p>SAAS</p>
                              </div>
                            </div>
                          </div>
                          <div className="sectionContainer">
                            <p>'Framework'&#40;s&#41;:</p>
                            <div className="framework">
                              <div className="tech">
                                <img src={nodeLogo} alt="NodeJS logo" />
                                <p>NodeJS</p>
                              </div>
                              <div className="tech">
                                <img src={reactLogo} alt="React logo" />
                                <p>React</p>
                              </div>
                              <div className="tech">
                                <img src={gastbyLogo} alt="Gatsby logo" />
                                <p>Gatsby</p>
                              </div>
                            </div>
                          </div>
                          <div className="sectionContainer">
                            <p>Other:</p>
                            <div className="other">
                              <div className="tech">
                                <img src={figmaLogo} alt="Figma logo" />
                                <p>Figma</p>
                              </div>
                              <div className="tech">
                                <img src={mongoLogo} alt="MongoDB logo" />
                                <p>MongoDB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div onClick={cardClick} className="webScraping">
                      <div className="flipContainer">
                        <div className="front">
                          <h3>Web Scraping</h3>
                          <p>Dissecting and reverse engineering websites to extract data with headless browser manipulation. This niche and extremely fun tech stack was my pet project through highschool.</p>
                        </div>
                        <div className="back">
                          <div className="sectionContainer">
                            <p>Language&#40;s&#41;:</p>
                            <div className="language">
                              <div className="tech">
                                <img src={JSLogo} alt="JavaScript logo" />
                                <p>JavaScript</p>
                              </div>
                            </div>
                          </div>
                          <div className="sectionContainer">
                            <p>'Framework'&#40;s&#41;:</p>
                            <div className="framework">
                              <div className="tech">
                                <img src={nodeLogo} alt="NodeJS logo" />
                                <p>NodeJS</p>
                              </div>
                              <div className="tech">
                                <img src={puppeteerLogo} alt="Puppeteer logo" />
                                <p>Puppeteer</p>
                              </div>
                            </div>
                          </div>
                          <div className="sectionContainer">
                            <p>Other:</p>
                            <div className="other">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div onClick={cardClick} className="gameDevelopment">
                      <div className="flipContainer">
                        <div className="front">
                          <h3>Game Development</h3>
                          <p>Dreaming up games using Unity and C#. A really basic tech stack, yet it remains one of my favorites to date.</p>
                        </div>
                        <div className="back">
                          <div className="sectionContainer">
                            <p>Language&#40;s&#41;:</p>
                            <div className="language">
                              <div className="tech">
                                <img src={CSharpLogo} alt="CSharp logo" />
                                <p>C#</p>
                              </div>
                            </div>
                          </div>
                          <div className="sectionContainer">
                            <p>'Framework'&#40;s&#41;:</p>
                            <div className="framework">

                            </div>
                          </div>
                          <div className="sectionContainer">
                            <p>Other:</p>
                            <div className="other">
                              <div className="tech">
                                <img src={unityLogo} alt="Unity logo" />
                                <p>Unity</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              )
            }
          </div>
        </div>
      </main>
    </>
  )
}
