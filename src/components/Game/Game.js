import React, {useState, useEffect} from 'react'
import { UserContext } from '../../providers/UserProvider';
import "./Game.css";


export default function Game() {
    const [score, setScore] = useState(0);
  const [ballInBasket, setBallInBasket] = useState(false);
  const [isShooting, setIsShooting] = useState(false);

  // Function to handle shooting the ball
  const shootBall = () => {
    setIsShooting(prev => !prev);
    if (!ballInBasket) {
      const isSuccess = Math.random() < 0.5; // Adjust the success rate as needed
      if (isSuccess) {
        setScore(score + 1);
        setBallInBasket(true);
      } else {
        // alert("Miss")
      }

      // Reset the ball position after a delay
      setTimeout(() => {
        setBallInBasket(false);
        setIsShooting(prev => !prev);

      }, 1000); // 1 second delay
    }
  };

  useEffect(() => {
    // Add event listener for the spacebar to shoot the ball
    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        shootBall();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [ballInBasket, score]);  
  
  return (
    <div className="App">
      <h1>Shooting Ball into Basket Game</h1>
      <h2>Score: {score}</h2>
      <div className="court">
        <Basket ballInBasket={ballInBasket} isShooting={isShooting} />
        <Ball ballInBasket={ballInBasket} isShooting={isShooting} />
      </div>
      <button onClick={shootBall}>Shoot Ball (Press Spacebar)</button>
    </div>
  )
}

function Basket({ ballInBasket }) {
    return (
      <div className={`basket ${ballInBasket ? 'ball-in' : ''}`}>
        <div className="backboard"></div>
        <div className="rim"></div>
        {/* <i className="fa fa-basketball-hoop fa-4x"></i> */}
      </div>
    );
  }
  
  function Ball({ ballInBasket, isShooting }) {
    // return <i className={`fa fa-basketball-ball fa-2x ${ballInBasket ? 'in-basket' : ''}`}></i>;
    const checkIfShooting = () => {
        if(isShooting) {
            return "miss-basket"
        }
        return "";
    }
    return <div className={`ball ${ballInBasket ? 'in-basket' : checkIfShooting()}`}></div>;
  }