import { useState, useEffect } from 'react'
import './styles/Portfolio.scss'

import bostonImg from '/images/boston.jpg'
import pompImg from '/images/pomp.jpg'
import memorialImg from '/images/memorial.jpg'

import githubImge from '/images/github.svg'
import spatulaGif from '/images/spatula.gif'
import spatulaWebsiteImg from '/images/swebsite.png'

import loonImg from '/images/loon.png'


export default function Portfolio() {
  const [displayState, setDisplayState] = useState('projects');
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    if(displayState === 'projects') {
      setDisplay(
        <div className='projects'>
            <div className="hydra">
              <div className="titleContainer">
                <h3>Hydra</h3>
                <h4>Advanced NLU with Tensorflow</h4>
              </div>
              <p>Named after the second of Hercules' impossible labors due to its 7 headed loss function, this Natural Language Understanding model is perhaps my greatest feat. It can perform joint classification of intents and slots, with six slot classifications for each token. Equipped with a three sentence memory and a near infinite reservoir of randomly generated synthetic data, Hydra is a force to be reckoned with.</p>
              <div className="buttonContainer">
                <p>Public Inference Coming Soon...</p>
                <a className='github' target='_blank' href="https://github.com/FalsettoAI/Hydra"><img src={githubImge} alt="GitHub" />Repository</a>
              </div>
            </div>
            <div className="pSpatula">
              <img src={spatulaGif} alt="Spatula Software GIF" />
              <div className="pSpatulaContent">
                <div className="titleContainer">
                  <h3>Spatula Software</h3>
                  <h4>Complex Web Scraping</h4>
                </div>
                <p>Spatula Software is a complex application using Node JS, Puppeteer, and MongoDB to scape, store, and serve web data. This application navigated the most advanced website in the world, finding and parsing valuable data based on user requests. Not only could it scrape data, but also manipulate browsers to send generic Facebook messages for you, although that feature was never opened to users. <br /><br /> Check out this blog post, or the experiences tab for more information.</p>
                <div className="buttonContainer">
                  <a className='github' target='_blank' href="https://github.com/falktravis/Spatula-Software"><img src={githubImge} alt="GitHub" />Repository</a>
                </div>
              </div>
            </div>
            <div className="portfolioSite">
              <div className="titleContainer">
                <h3>Personal Website</h3>
                <h4>Check out my blog!</h4>
              </div>
              <p>I designed and then developed this entire website from scratch with React and SCSS. In fact, I built 98% of it in only three days, including full blog functionality and animations. Speed is key, over the years I have been experiencing with the fastest ways to build projects. Check out this blog post for the full story.</p>
              <div className="buttonContainer">
                <a className='github' target='_blank' href="https://github.com/falktravis/falktravis.github.io"><img src={githubImge} alt="GitHub" />Repository</a>
              </div>
            </div>
            <div className="spatulaWebsite">
              <img src={spatulaWebsiteImg} alt="Spatula Software Website Hero Page" />
              <div className="spatulaWebsiteContent">
                <div className="titleContainer">
                  <h3>Software Website</h3>
                  <h4>Simple Web Development</h4>
                </div>
                <p>Designed and developed the front and backend of this website from scratch with React, Node JS, Express and SCSS. You could login to a customer portal using different authentication providers through Supabase. There, you would be able to view and manage your current plan.</p>
                <div className="buttonContainer">
                  <a className='github' target='_blank' href="https://github.com/falktravis/Spatula-Software-Website"><img src={githubImge} alt="GitHub" />Repository</a>
                </div>
              </div>
            </div>
            <div className="loonLookout">
              <img src={loonImg} alt="Loon Lookout Website" />
              <div className="loonLookoutContent">
                <div className="titleContainer">
                  <h3>Loon Lookout</h3>
                  <h4>Web Dev Commission</h4>
                </div>
                <p>I was commissioned to make this simple website for a rental property. The development was rather easy, but this was the first time I really had to communicate with a customer and create something to fix someone elses problem. The real challenge with this was breaking into the world of customer conversations.</p>
                <div className="buttonContainer">
                  <a className='github' target='_blank' href="https://github.com/falktravis/Loon-Lookout-Gatsby"><img src={githubImge} alt="GitHub" />Repository</a>
                </div>
              </div>
            </div>
            <div className="fragment">
              <div className="titleContainer">
                <h3>Fragment</h3>
                <h4>Web Scraping Commission</h4>
              </div>
              <p>Upon the development of Spatula Software, I was becoming a somewhat notable figure for web scraping in online communities. This was one of a couple commissions for someone who had reached out. It would scrape fragment.com for valuable usernames and notify the customer if it detected any. Taking less than a day to complete.</p>
              <div className="buttonContainer">
                <a className='github' target='_blank' href="https://github.com/falktravis/Fragment"><img src={githubImge} alt="GitHub" />Repository</a>
              </div>
            </div>
            <div className="webpack">
              <div className="titleContainer">
                <h3>Webpack Starter</h3>
                <h4>Community Boiler Plate</h4>
              </div>
              <p>When I started creating websites with react, solutions like Vite were far less popular. This was very annoying for me because create-react-app was a terrible solution. I created this Webpack starter file as a boiler plate for new websites. Although I never tried to push it into the community, I used this religiously throughout my web development journey.</p>
              <div className="buttonContainer">
                <a className='github' target='_blank' href="https://github.com/falktravis/WebpackStarter"><img src={githubImge} alt="GitHub" />Repository</a>
              </div>
            </div>
            <div className="spatulaWebInterface">
              <div className="titleContainer">
                <h3>Fullstack Website</h3>
                <h4>Real Time Web App</h4>
              </div>
              <p>Customer facing website displaying data from my backend application in real time through MongoDB applications. Built in React with NodeJS backend. Deployed on A2 hosting with Cpannel.</p>
              <div className="buttonContainer">
                <a className='github' target='_blank' href="https://github.com/falktravis/Spatula-Software-Web-Interface"><img src={githubImge} alt="GitHub" />Repository</a>
              </div>
            </div>
        </div>
      );
    } else if(displayState === 'experiences') {
      setDisplay(
        <div className='experiences'>
          <div className="falsetto">
            <h2>Falsetto</h2>
            <div className="experienceInfo">
              <p>Co-Founder | Product Lead</p>
              <p>June 2024 - Present</p>
            </div>
            <p>B2B software company focused on making Restaurants more labour efficient with advanced natural language understanding and actionable, conversational AI.</p>
            <h3>Achievements</h3>
            <ul>
              <li>Running customer conversations and product discovery</li>
              <li>Building advanced natural language understanding model using Tensorflow</li>
            </ul>
          </div>
          <div className="spatula">
            <h2>Spatula Software</h2>
            <div className="experienceInfo">
              <p>Sole Proprietorship</p>
              <p>February 2023 - March 2024</p>
            </div>
            <p>Small, software as a service company that helped the flipping community and used car/machinery dealerships to find products on Facebook Marketplace. This was a great experience to get my foot in the product world. I have since shut it down due to the small scale and certain legal liabilities.</p>
            <h3>Achievements</h3>
            <ul>
              <li>Built the web scraping software</li>
              <li>Built the customer interaction backend</li>
              <li>Built a Front, and Back-end website to facilitate customers</li>
              <li>Ran customer conversations and product discovery</li>
            </ul>
          </div>
          <div className="webDesign">
            <h2>Falk Web Design</h2>
            <div className="experienceInfo">
              <p>Sole Proprietorship</p>
              <p>August 2022 - February 2023</p>
            </div>
            <p>The first time I tried to turn my coding work into a business. I successfully contracted one website, paying around $250, with another contract in the works, before realizing this was just a job, and finding my next big idea.</p>
            <h3>Achievements</h3>
            <ul>
              <li>Taught myself web design and development technologies</li>
              <li>Learned to talk with customers and understand them on a basic level</li>
              <li>Used guerilla marking to attract customers</li>
            </ul>
          </div>
        </div>
      );
    } else if(displayState === 'education') {
      setDisplay(
        <div className='education'>
          <div className="boston">
            <div className="educationInfo">
              <div className="head">
                <h2>Boston University</h2>
                <p>August 2023 - Present</p>
              </div>
              <div className="mainContent">
                <div className="paragraph">
                  <p>Attending Boston University as an Undergraduate with a focus on improving my computer science, product management, and general life skills. I have found a great community with the innovation pathway and spend most of my time at the pathway headquarters.</p>
                </div>
                <div className="bullets">
                  <h3>Achievements</h3>
                  <ul>
                    <li>Computer Science Major</li>
                    <li>Club Ski Racing Team - 1 year</li>
                    <li>Innovation Pathway Resident - 1 year</li>
                    <li>Expected Date of Graduation - 2026</li>
                  </ul>
                  <div className="gpa"><p>GPA: 3.79</p></div>
                </div>
              </div>
            </div>
            <img src={bostonImg} alt="Boston University" />
          </div>
          <div className="pomp">
            <img src={pompImg} alt="Pomperaug High School" />
            <div className="educationInfo">
              <div className="head">
                <h2>Pomperaug High School</h2>
                <p>September 2019 - May 2023</p>
              </div>
              <div className="mainContent">
                <div className="paragraph">
                  <p>Regional High-School in Middlebury, CT. I took advantage of a wide range of Advanced Placement and Computer science classes that were offered. Greatly increasing my interest in coding with amazing, self-paced, game design courses, as well a basic Java class.</p>
                </div>
                <div className="bullets">
                  <h3>Achievements</h3>
                  <ul>
                    <li>High Honors - All Four Years</li>
                    <li>Advanced Computer Classes - All Four Years</li>
                    <li>Varsity Soccer - Three Years</li>
                    <li>Varsity Ski Racing Team - 1 year</li>
                    <li>Founder & President of Spikeball Club - 1 year</li>
                  </ul>
                  <div className="gpa"><p>Unweighted GPA: 4.031</p><p>Weighted GPA: 7.10</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className="memorial">
            <div className="educationInfo">
              <div className="head">
                <h2>Memorial Middle School</h2>
                <p>September 2016 - May 2019</p>
              </div>
              <div className="mainContent">
                <div className="paragraph">
                  <p>Regional Middle School in Middlebury, CT. Unfortunately, they offer very little computer science coverage, but through my time here I took on programming projects by myself. It was here that my interest really peaked.</p>
                </div>
                <div className="bullets">
                  <h3>Achievements</h3>
                  <ul>
                    <li>High Honors - All Four Years</li>
                    <li>Youth Soccer Team - All Four Years</li>
                    <li>Computer Programming Class - One Year</li>
                  </ul>
                  <div className="gpa"><p>GPA: 3.91</p></div>
                </div>
              </div>
            </div>
            <img src={memorialImg} alt="Memorial Middle School" />
          </div>
        </div>
      );
    }

  }, [displayState]);

  return (
    <main className='Portfolio'>
      <header>
        <h1>Portfolio</h1>
        <p>Explore my Projects, Experiences, and Education</p>
      </header>
      <div className="portfolioContentContainer">
        <div className={"buttons " + displayState}>
          <button id='projects' onClick={() => setDisplayState('projects')}>Projects</button>
          <button id='experiences' onClick={() => setDisplayState('experiences')}>Experiences</button>
          <button id='education' onClick={() => setDisplayState('education')}>Education</button>
        </div>
        <div className="portfolioContent">
          {display}
        </div>
      </div>
    </main>
  )
}
