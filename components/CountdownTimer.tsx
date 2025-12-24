import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2026-02-01T00:00:00') - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => {
    return String(value).padStart(2, '0');
  };

  return (
    <div className="countdown-container">
      <h3 className="countdown-title">Official Launch In</h3>
      <div className="timer-wrapper">
        <div className="timer-segment">
          <span className="timer-value">{formatTime(timeLeft.days)}</span>
          <span className="timer-label">DAYS</span>
        </div>
        <div className="timer-segment">
          <span className="timer-value">{formatTime(timeLeft.hours)}</span>
          <span className="timer-label">HOURS</span>
        </div>
        <div className="timer-segment">
          <span className="timer-value">{formatTime(timeLeft.minutes)}</span>
          <span className="timer-label">MINUTES</span>
        </div>
        <div className="timer-segment">
          <span className="timer-value">{formatTime(timeLeft.seconds)}</span>
          <span className="timer-label">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;