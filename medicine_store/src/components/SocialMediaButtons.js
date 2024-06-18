import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SocialMediaButtons = () => {
  return (
    <StyledUl>
      <li>
        <a href="#">
          <i className="fab fa-facebook-f icon"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-twitter icon"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-linkedin-in icon"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-google-plus-g icon"></i>
        </a>
      </li>
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: flex;
  position: absolute;
  top: 93%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  li {
    list-style: none;
  }
  
  li a {
    width: 60px;
    height: 60px;
    background-color: #fff;
    text-align: center;
    line-height: 80px;
    font-size: 35px;
    margin: 0 10px;
    display: block;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: 3px solid #fff;
    z-index: 1;
    
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: #262626;
      transition: .5s;
      z-index: 3;
      /* Add some padding/margin to move the icons down */
      margin-top: 7px; /* Adjust this value as needed */
    }
    
    &:hover .icon {
      color: #fff;
      transform: rotateY(360deg);
    }
    
    &:before {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      background: #f00;
      transition: .5s;
      z-index: 2;
    }
    
    &:hover:before {
      top: 0;
    }
  }
  
  li:nth-child(1) a:before{
    background: #3b5999;
  }
  
  li:nth-child(2) a:before{
    background: #55acee;
  }
  
  li:nth-child(3) a:before {
    background: #0077b5;
  }
  
  li:nth-child(4) a:before {
    background: #dd4b39;
  }
`;

export default SocialMediaButtons;
