import { useState, useEffect } from 'react'
import './styles/Home.scss'
import profileImg from '/images/profile.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'

//tech stack logos
import gastbyLogo from '/images/gatsbyLogo.svg'
import gcpLogo from '/images/gcpLogo.svg'
import JSLogo from '/images/JSLogo.svg'
import kerasLogo from '/images/KerasLogo.svg'
import mongoLogo from '/images/mongoDBLogo.svg'
import nodeLogo from '/images/nodeJSLogo.svg'
import puppeteerLogo from '/images/puppeteerLogo.svg'
import pythonLogo from '/images/pythonLogo.png'
import reactLogo from '/images/reactLogo.svg'
import sassLogo from '/images/sassLogo.svg'
import tensorflowLogo from '/images/TensorFlowLogo.svg'
import unityLogo from '/images/unityLogo.svg'
import CSharpLogo from '/images/CSharpLogo.svg'
const images = [gastbyLogo, gcpLogo, JSLogo, kerasLogo, mongoLogo, nodeLogo, puppeteerLogo, pythonLogo, reactLogo, sassLogo, tensorflowLogo, unityLogo, CSharpLogo];

// swiper stuff
import { Swiper, SwiperSlide } from "swiper/react";
import "../node_modules/swiper/swiper-bundle.min.css";
import { Autoplay } from 'swiper/modules';

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
    }, 5);

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
            <p>Nice to meet you! My name is Travis Falk. I am a 19 year old college student and product developer&#40;among other things&#41; living in Boston. I have been obsessed with building products for years, starting my development journey at 10 years old. This website is a collection of my previous experiences and projects, as well as my current interests and knowledge. Enjoy!</p>
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
      </main>
    </>
  )
}
