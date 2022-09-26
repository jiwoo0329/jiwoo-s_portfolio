import React from 'react'
import {Link } from 'react-router-dom';
import styled, {keyframes} from "styled-components";


const rotate = keyframes`
    from { transform: rotate(0deg);}
    from { transform: rotate(360deg);}
`;

const BigNav_ = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #9c94d0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bolder;
    font-size: 30px;
    img{
      position: fixed;
      width: 100%;
      top: 0;
    }
    .BigNav_box{
        margin: 20px; 
        display: flex;
        .BigNav_boxx{
          height: 300px;
            .wave{
                width: 300px;
                height: 300px;
                border: none;
                margin: 0 20px;
                border-radius: 43%;
                transform-origin: 50% 48%;
                transition-duration: 0.75s;
                transition-property: margin-bottom;
                transition-timing-function: ease; 
                animation: ${rotate} 9000ms infinite linear;
                cursor: pointer; 
                z-index: -1;
            }
            .box1{
              background-color:#eee8ac;
            }
            .box2{
              background-color:#e3adcb;
            }
            .box3{
              background-color:#afc5db;
            }
            .wave_text{
              width: 100%;
              cursor: pointer;
              text-align: center;
              margin-top: -55%;
              
              position: relative;
            }
        }
        .BigNav_boxx:hover .wave{
              background-color: #ffde59;
        }
        .wave:hover, li:nth-child(2n):hover .wave{
              animation-play-state: paused;
        }
          
          
          
      }
`


const BigNav = () => {
  return (
    <>
    <BigNav_>
      <img src="./images/roundLine.png" alt="line"></img>
      <div className='BigNav_box'>
        <Link to = "/about_me" >
          <ul className='BigNav_boxx'>
            <li className="wave box1"></li>
            <li className="wave_text">About Me</li>
          </ul>
        </Link>
        <Link to="/my_project">
          <ul className='BigNav_boxx'>
            <li className="wave box2"></li>
            <li className="wave_text">My Project</li>
          </ul>
        </Link>
         <Link to="/contact">
          <ul className='BigNav_boxx'>
            <li className="wave box3"></li>
            <li className="wave_text">Contact</li>
          </ul>
        </Link> 
      </div>
    </BigNav_>

    </>
  )
}

export default BigNav