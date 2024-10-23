import { useState, useEffect } from 'react'
import './styles/Home.scss'
import profileImg from '../public/images/profile.jpg'
import { Link } from 'react-router-dom'

//tech stack logos
import gastbyLogo from '../public/images/gatsbyLogo.svg'
import gcpLogo from '../public/images/gcpLogo.svg'
import JSLogo from '../public/images/JSLogo.svg'
import kerasLogo from '../public/images/KerasLogo.svg'
import mongoLogo from '../public/images/mongoDBLogo.svg'
import nodeLogo from '../public/images/nodeJSLogo.svg'
import puppeteerLogo from '../public/images/puppeteerLogo.svg'
import pythonLogo from '../public/images/pythonLogo.png'
import reactLogo from '../public/images/reactLogo.svg'
import sassLogo from '../public/images/sassLogo.svg'
import tensorflowLogo from '../public/images/TensorFlowLogo.svg'
const images = [gastbyLogo, gcpLogo, JSLogo, kerasLogo, mongoLogo, nodeLogo, puppeteerLogo, pythonLogo, reactLogo, sassLogo, tensorflowLogo];

// swiper stuff
import { Swiper, SwiperSlide } from "swiper/react";
import "../node_modules/swiper/swiper-bundle.min.css";
import { Autoplay } from 'swiper/modules';

// social logos
import githubLogo from '../public/images/githubLogo2.svg'
import linkedinLogo from '../public/images/linkedinLogo.svg'
import xLogo from '../public/images/xLogo.svg'
import instagramLogo from '../public/images/instagramLogo.svg'

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
  const words = ["Codes", "Innovates", "Designs", "Develops", "Builds", "Leads"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState(generateRandomString(words[wordIndex].length));
  const [timeLeft, setTimeLeft] = useState(1);
  const [wordSwitch, setIsWordSwitch] = useState(false);
  const [flip, setFlip] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  const onTimeout = () => {
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
      setTimeLeft(100);
    }
    else if(charIndex <= 0 && !isFirst) {
      setFlip(false);
      if(wordSwitch){
        if(wordIndex >= words.length - 1) {
          console.log(wordIndex)
          setWordIndex(0);
        }else{
          console.log(wordIndex)
          setWordIndex(wordIndex + 1);
        }
        setIsWordSwitch(false);
      }
      setTimeLeft(6);
    }
    else{
      setTimeLeft(6);
    }
  }

  useEffect(() => {
    if (timeLeft == 0) {
      onTimeout();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 10);

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
    // Check if the URL hash is '#contact' and scroll into view if so
    if (window.location.hash === '#contact') {
      window.addEventListener("load", () => {
        const contactElement = document.getElementById('contact');
        contactElement.scrollIntoView({ behavior: 'smooth', block: "center", inline: "center" });
      });
    }

    const interval = setInterval(() => {
      createSnowflake();
    }, 150); // Create a new snowflake every 300ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  
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
          <img src={profileImg} alt="Profile Photo" />
          <div className="aboutContent">
            <div className="head">
              <h2>About Me</h2>
            </div>
            <p>Nice to meet you! My name is Travis Falk. I am a 19 year old software developer&#40;among other things&#41; living in Boston. I have been passionate about building products and software development for years, starting my coding journey around 10 years old. This website is a collection of my previous experiences and projects, as well as my current interests and knowledge. Enjoy!</p>
          </div>
        </div>
        <div className="techStack">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1000, // Time delay between auto scroll (3 seconds)
              disableOnInteraction: false, // Keep autoplay active after user interaction
            }}
            spaceBetween={50}
            slidesPerView={7}
            loop={true} // Infinite loop
            speed={3000}
            breakpoints={{
              1024: {
                slidesPerView: 6,
              },
              600: {
                slidesPerView: 4,
              },
              300: {
                slidesPerView: 3,
              },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`tech stack ${index}`} style={{ width: "100%" }} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fade-overlay fade-left"></div>
          <div className="fade-overlay fade-right"></div>
        </div>
        <div id='contact' className="contact">
          <div className="contacts">
            <div className="head">
              <h2>Contact</h2>
              <p>Want to chat? Feel free to reach out for any reason, besides spam...</p>
            </div>
            <div className="contactContainer">
              <p>travisf@bu.edu</p>
              <p>&#40;203&#41; 610-5471</p>
            </div>
          </div>
          <div className="links">
            <div className="head">
              <h2>Links</h2>
            </div>
            <div className="linkContainer">
              <ul>
                <li><a target="_blank" href="https://github.com/falktravis"><img src={githubLogo} alt="Git Hub" /></a></li>
                <li><a target="_blank" href="https://x.com/falktravis12"><img src={xLogo} alt="X" /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/travis-falk/"><img src={linkedinLogo} alt="LinkedIn" /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/falk.travis18/"><img src={instagramLogo} alt="Instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
