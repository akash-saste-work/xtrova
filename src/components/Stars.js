import { useEffect, useState } from "react";

const createStar = () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  return { x, y };
}

const Stars = () => {
  const [starPositions, setStarPositions] = useState([]);

  useEffect(() => {
    // Initialize some stars when component mounts
    const initialStars = Array.from({ length: 100 }, createStar);
    setStarPositions(initialStars);

    const starInterval = setInterval(() => {
      // Create a new star position
      const newStarPosition = createStar();
      
      // Check if the length of starPositions is greater than 99
      if (starPositions.length > 50) {
        // Remove the oldest position by slicing the array
        setStarPositions(prevPositions => prevPositions.slice(1));
      }
      
      // Add the new star position
      setStarPositions(prevPositions => [...prevPositions, newStarPosition]);
    }, 3000);

    return () => clearInterval(starInterval);
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <div className="star-container">
      {starPositions.map((position, index) => (
        <div
          key={index}
          className="star"
          style={{ left: `${position.x}vw`, top: `${position.y}vh` }}
        />
      ))}
    </div>
  );
}

export default Stars;
