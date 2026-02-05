// Import CSS file to apply styling for this page
import "./Classes.css";

// Create an array of numbers from 1 to 10
// This represents school classes from Class 1 to Class 10
const classes = Array.from({ length: 10 }, (_, i) => i + 1);

function Classes() {
  return (
    // Main container for the classes page
    <div className="classes-page">

      {/* Page heading */}
      <h2>Choose Your Class</h2>

      {/* Grid layout that holds all class cards */}
      <div className="class-grid">

        {/* Loop through the classes array and create a card for each class */}
        {classes.map((cls) => (

          // Each class card shows a clickable-looking box for that class
          // "key" is required by React to optimize rendering
          <div key={cls} className="class-card">
            {/* Display class number */}
            Class {cls}
          </div>

        ))}
      </div>
    </div>
  );
}

// Export component so it can be used in other files like App.js
export default Classes;
