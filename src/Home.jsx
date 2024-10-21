import { useState, useEffect } from 'react'
import './styles/Home.scss'

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

export default function Home() {
  const words = ["Codes", "Innovates", "Designs", "Develops", "Leads"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState(generateRandomString(words[wordIndex].length));
  const [timeLeft, setTimeLeft] = useState(1);
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
      setTimeLeft(100);
    }
    else if(charIndex <= 0 && !isFirst) {
      setFlip(false);
      if(wordIndex >= words.length - 1) {
        setWordIndex(0);
      }else{
        setWordIndex((prevIndex) => prevIndex + 1);
      }
      setTimeLeft(6);
    }
    else{
      setTimeLeft(6);
    }
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout(); // Call the action when the timer goes off
      return; // Stop the effect if the timer is finished
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Decrease the time left by 1 second
    }, 10); // Update every second

    return () => clearInterval(timerId); // Cleanup the interval on component unmount or time change
  }, [timeLeft, onTimeout]);

  useEffect(() => {
    // Check if the URL hash is '#contact' and scroll into view if so
    if (window.location.hash === '#contact') {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  
  return (
    <>  
      <main>
        <div className="hero">
          <div className="heroText">
            <h2>Travis <span>{text}</span></h2>
          </div>
        </div>
      </main>
    </>
  )
}
