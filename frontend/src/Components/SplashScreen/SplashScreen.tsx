import { useEffect, useState } from 'react';
import './splash.css'

const SplashScreen = ({ onAnimationEnd }:{ onAnimationEnd: () => void }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 1;
        return prev;
      });
    }, 3000); // Will take 3 seconds to reach 100%

    const timer = setTimeout(() => {
      setIsClosing(true);
    }, 2500);

    const unmountTimer = setTimeout(() => {
      onAnimationEnd();
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div className={`w-full h-screen flex items-center justify-center bg-black fixed top-0 left-0 transition-opacity duration-3000 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <h2 className="text-xl font-light tracking-wider mb-8 text-white animate-fadeIn">
          Under Development
        </h2>
        <div className="w-48 h-1 bg-white/10 mx-auto rounded overflow-hidden">
          <div 
            className="h-full bg-white rounded transition-all duration-3000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;