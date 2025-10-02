import React from 'react';

const ParallaxBackground = ({ scrollY }) => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -10,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        opacity: 0.2,
        top: '10%',
        left: '5%',
        background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
        transform: `translate(${scrollY * 0.4}px, ${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`
      }} />
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        opacity: 0.2,
        top: '40%',
        right: '10%',
        background: 'linear-gradient(135deg, #FFE66D, #A8E6CF)',
        transform: `translate(${-scrollY * 0.3}px, ${scrollY * 0.4}px) rotate(${-scrollY * 0.1}deg)`
      }} />
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        opacity: 0.2,
        bottom: '20%',
        left: '50%',
        background: 'linear-gradient(135deg, #FF8B94, #B4A7D6)',
        transform: `translate(${scrollY * 0.2}px, ${-scrollY * 0.2}px) rotate(${scrollY * 0.15}deg)`
      }} />
    </div>
  );
};

export default ParallaxBackground;