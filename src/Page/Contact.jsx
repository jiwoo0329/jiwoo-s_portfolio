import React, {useState} from 'react'
import {Link } from 'react-router-dom';
import * as Styled from "../Style/Style";
import styled, {keyframes} from "styled-components";
import Location from "./Location";


const flash = keyframes`
  0% { opacity: 1; } 20% { opacity: 1; } 40% { opacity: 1; }
  10% { opacity: 0; } 30% { opacity: 0; } 
`
const Contact_ = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #9c94d0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 6rem;
    .contact_container{
        width: 550px;
        height: 550px;
        margin: 0 auto;
        background-color: #800880;
        border-radius: 50%;
    }
`

const Round = styled.div`
  .info{
    margin: 0 auto;
    .infoItems{
      padding: .5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon i{
          color: #ffde59;
          font-size: 1.5rem;
          margin-right: 15px;
      }
      .info-text{
        color: #fff;
        float: left;
        p{
          font-size: 1.2rem;
          a{
            color: #fff;
            text-decoration: underline;
            text-underline-position: under;
          }
        }
      }

    }
    .address{
      .bright{
        animation: ${flash} 2.5s infinite;
      }
      .map{
            display: none;
            position: absolute;
            background-color: #ffde59;
            padding: 15px;
            border-radius: 10px;
            margin-top: -300px;
            margin-left: -40px; transition: all 1.5s ease-out;
        transform: translateY(-80px);
      }
    }
    .address:hover {
      
      cursor: pointer;
      .bright{
        animation-play-state: paused;
        
      }
      
      .icon, .info-text .bright{
          transition: all 1.5s ease-out;
          transform: translateY(120px);
      }
      .info-text .map{
        display: block;
       
      }
      
    }
    .address:hover + .hide{
      visibility: hidden;
    }
  }
`


const Contect = () => {

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(open => !open); // on,off 개념 boolean
  }

  const changeColor1 = setInterval(change1, 500);
  function change1() {
    let here1 = document.getElementById("bright1");
    // here1.style.color = here1.style.color == "green" ? "red" : "green";
  }
  const changeColor2 = setInterval(change2, 500);
  function change2() {
    let here2 = document.getElementById("bright2");
    // here2.style.color = here2.style.color == "green" ? "red" : "green";
  }

  
  return (

    
    <>
    {/* 네비게이션 */}
    <Styled.TopBar>
        
        <div className="topNav_">
            <img src="images/topNav.png" alt="topNav"></img>

            <div className='topNav_in'>
                <Link to="/bignav">
                    <button title='홈으로 이동' className='goHome'><i className="fa-solid fa-house"></i> Home</button>
                </Link>
                <ul className={open ? "show-menu" : "hide-menu"}>
                  <li><button>Contant</button></li>
                  <li>
                      <button><i className="fa-solid fa-bars" onClick={()=>toggle()}></i></button>
                       
                      <ul className={open ? "show-menu" : "hide-menu"}>
                          <img src="images/topNavSub.png" className="dd" alt="dd"></img>
                          <Link to = "/"><li style={{borderTop: "none"}}>Home</li></Link>
                          <Link to = "/about_me"><li >About Me</li></Link>
                          <Link to="/my_project"><li>My Project</li></Link>
                          <Link to="/contact"><li>Contact</li></Link>
                      </ul>
                  </li>
                </ul>
            </div>
        </div>
    </Styled.TopBar>


    {/* Contact me 바로 시자아아악*/}
      <Contact_>
        <div className="contact_container">

        <Styled.Title>
            <div className="title">
                <h4>Contact</h4>
                <h2>Contact Me</h2>
            </div>
        </Styled.Title>

            <Round>
            <div className="contact-me">
                <div className="info">
                     <div className="infoItems"> {/*전화번호 */}
                        <div className="icon"><i className="fa-solid fa-mobile-screen"></i></div>
                        <div className="info-text">
                            <p>+82 10-7541-6944</p>
                        </div>
                    </div>
                    <div className="infoItems"> {/* 이메일 */}
                        <div className="icon "><i className="fa-solid fa-paper-plane"></i></div>
                        <div className="info-text ">
                            <p>hjw0329@naver.com</p>
                        </div>
                    </div>
                     <div className="infoItems address"> {/*주소 */}
                        <div className="icon bright" ><i className="fa-solid fa-address-card" ></i></div>
                        <div className="info-text"> 
                        {/* 인라인태그인 p태그 안에 블럭태그인 div태그 들어갈 수 없음. -수정 */}
                            <p className="bright">경기도 김포시 김포한강1로 309
                              <div className='map'>
                                <Location style={{width:"300px", height:"300px"}}/>
                              </div>
                            </p>
                        </div>
                    </div>
                     <div className="infoItems hide"> {/*깃허브주소 */}
                        <div className="icon"><i className="fa-brands fa-github"></i></div>
                        <div className="info-text">
                            <p><a target="_blank" href="https://github.com/jiwoo0329"> https://github.com/jiwoo0329</a></p>
                        </div>
                    </div>
                </div>
                
            </div>
            </Round>
          </div>
      </Contact_>
    
    </>
  )
}

export default Contect