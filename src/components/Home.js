// src/components/Home.js

import React from 'react';
import BlurText from '../BlurText';
import TrueFocus from '../TrueFocus';

function Home() {
  const handleAnimationComplete = () => {
    console.log('All text has finished animating!');
  };

  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        fontFamily: "'DM Sans', sans-serif",
        padding: '1rem',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          margin: '0',
          padding: '0',
        }}
      >
        {/* Welcome Section */}
        <BlurText
  style={{
    fontSize: 'clamp(1.5rem, 6vw, 3rem)',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '25px',
  }}
  className="hero-text"
  delay={100}
  animateBy="words"
  direction="top"
  threshold={0.25}
  onAnimationComplete={handleAnimationComplete}
>
  Welcome to
  <div style={{ 
    display: 'block', 
    marginTop: '25px', // Increased from 10px to 25px
    lineHeight: '1.2'
  }}>
    <TrueFocus 
      sentence="BioID Connect"
      manualMode={false}
      blurAmount={5}
      borderColor="red"
      animationDuration={0.5}
      pauseBetweenAnimations={1}
    />
  </div>
</BlurText>

        {/* Tightly spaced description group */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '2' }}>
          <BlurText
            style={{
              fontSize: 'clamp(1rem, 4vw, 2rem)',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              margin: 0,
            }}
            className="hero-text"
            delay={100}
            animateBy="words"
            direction="top"
            threshold={0.25}
            onAnimationComplete={handleAnimationComplete}
          >
            A simple, secure, and privacy-focused way to
          </BlurText>

          <BlurText
            style={{
              fontSize: 'clamp(1rem, 4vw, 2rem)',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              margin: 0,
            }}
            className="hero-text"
            delay={100}
            animateBy="words"
            direction="top"
            threshold={0.25}
            onAnimationComplete={handleAnimationComplete}
          >
            mark attendance and manage for your organization.
          </BlurText>
        </div>
      </div>
    </div>
  );
}

export default Home;