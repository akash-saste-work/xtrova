import React from "react";

const Footer = ({ style }) => {
  const footerStyle = {
    background: 'rgb(2, 31, 67)',
    color: "#ffffff", // Whitest color for text
    padding: "1.5rem 0 1rem", // Padding with reduced bottom padding
  };

  return (
    <footer style={{ ...footerStyle, ...style }}>
      <div className="container text-center">
        <p className="mb-0" style={{color:'#ffffff', fontWeight:'bold'}}>
          &copy; {new Date().getFullYear()} <span style={{color: '#7952f5'}}>Xtrova</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
