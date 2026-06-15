import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-icon">🕉️</div>
      <p style={{ color: "var(--saffron)", marginTop: "10px", fontWeight: 600 }}>
        Loading divine grace...
      </p>
    </div>
  );
};

export default LoadingSpinner;