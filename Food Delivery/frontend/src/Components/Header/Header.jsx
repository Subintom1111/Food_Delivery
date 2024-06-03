import React from 'react';
import './Header.css';
import backgroundImage from '../../assets/header_img.png';  // Adjust the path if necessary

const Header = () => {
  return (
    <div className='header'>
      <img src={backgroundImage} alt="Background" className="header-background" />
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>"Order your favorite food here and immerse yourself in a delightful culinary journey, where every dish is meticulously crafted with love, bringing unparalleled joy, comfort, and the heartwarming taste of home right to your table." </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header;
