import React from 'react';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Emoji from '../../assets/emoji.png'
import Button from '../../components/Button/Button';
import Arrow from '../../assets/arrow.png'

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/register');
  }

  return (
    <div className="homepage-wrapper">
      <Card title="Welcome to Coderhouse!" icon={Emoji}>
        <div className="text-wrapper">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <Button buttonText="Get your username" icon={Arrow} handleClick={handleNavigate} />
        <div className="homepage-signin-link">
          <span className="hasInvite">Have an invite text?</span>
          <Link to="/signin" className="homepage-link">
            Signin
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default HomePage