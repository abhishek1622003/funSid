import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const targetDate = new Date('2025-08-10T00:00:00')
    const now = new Date()
    const difference = targetDate - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      <div className="background-animation"></div>
      
      <div className="container">
        <div className="header">
          <h1 className="title">Bruce Wayne to BLR</h1>
          <p className="subtitle">The Dark Knight's journey begins in...</p>
        </div>
        
        <div className="countdown">
          <div className="time-unit">
            <div className="time-value">{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className="time-label">Days</div>
          </div>
          
          <div className="separator">:</div>
          
          <div className="time-unit">
            <div className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="time-label">Hours</div>
          </div>
          
          <div className="separator">:</div>
          
          <div className="time-unit">
            <div className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="time-label">Minutes</div>
          </div>
          
          <div className="separator">:</div>
          
          <div className="time-unit">
            <div className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="time-label">Seconds</div>
          </div>
        </div>
        
        <div className="destination">
          <h2>Gotham's Guardian Departs</h2>
          <p>August 10th, 2025</p>
        </div>
        
        <div className="farewell-message">
          <p>Your friends and family will miss you</p>
        </div>
        
        <div className="batman-symbols">
          <span className="symbol">⚫</span>
          <span className="symbol">⚫</span>
          <span className="symbol">⚫</span>
        </div>
      </div>
    </div>
  )
}

export default App
