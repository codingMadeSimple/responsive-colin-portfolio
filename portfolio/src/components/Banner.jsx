import React from 'react';
import '../scss/App.scss';
import { useState, useEffect } from 'react';
// require("../../public/hero-image.jpg");

const Banner = () => {

  //Loop through words on screen
  const [loopNum, setLoopNum] = useState(0);
  //DIs the word being deleted or typed out
  const [isDeleting, setIsDeleting] = useState(false);
  //Words on screen
  const toRotate = ['Web Developer', 'Web Design', 'UI-UX Design'];
  //Which text is being shown
  const [text, setText] = useState('');
  //Time for letters appearing
  const period = 2000;
  //Randomize time for letters appearing
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  //Index of the word being shown
  const [index, setIndex] = useState(0);


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    //Cool effect for typing out words
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          The Journey from Climbing to Coding
        </h1>
        <h2 className="hero-subtitle">And everything in between</h2>
        {text.length >= 0 ? <h4 className="hero-subtitle">{text}</h4> : <h4 className="hero-subtitle-2"> </h4>}


        <button type="button" class="btn btn-primary btn-lg" className="hero-button">Large button</button>

      </div>
      {/* width and height need to be set to 100vw  */}
      {/* put resume in contact me */}
    </section>
  );
};

export default Banner;