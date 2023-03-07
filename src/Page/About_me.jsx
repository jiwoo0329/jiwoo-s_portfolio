import React, {useRef, useState} from 'react'
import {Link } from 'react-router-dom';
import * as Styled from "../Style/Style";
import styled, {keyframes} from "styled-components";
import GoTop from '../Style/GoTop'
import Education from "../Page/Education"
import Skills from "../Page/Skills"
import TopNav from "../Style/TopNav"

const ding = keyframes`
  0% {transform: translateX(3px);}
  25%{transform: translateX(-3px);}
  50% {transform: translateX(3px);}
  75% {transform: translateX(-3px);}
  100% {transform: translateX(3px);}
`

const AboutMe_ = styled.div`
    width: 100%;
    background-color: #9c94d0; 
    display: flex;
    justify-content: center;
    .aboutMe_container{
        width: 1000px;
        margin: 5rem 0 auto;
        
        
        button{
            width: 30px;
            margin-left: 10px;
            border: none;
            border-radius: 50%;
            background-color: #9ac1e2;
            color: white;
            font-weight: bold;
            cursor: pointer;
            .comment{
                display: none;
                position: absolute;
                text-align: left;
                background-color:#9ac1e2;
                padding: 15px;
                width: 350px;
                border-radius: 10px;
                color: white;
                margin-top: -90px;
                margin-left: 60px;
            }
            .comment:before{
                position: absolute;
                content: '';
                width:0;
                height: 0;
                border:15px solid transparent;
                transform: rotate(270deg);
                border-bottom-color:#9ac1e2;
                left: -30px;
                bottom: 60px;
            }
        }
        button:hover{
            background-color: #9dd84b;
        }
        button:hover .comment{
            display:block;
        }
                
    }
    
 
`
const Introduce = styled.div`
    color: #fff;
    .about_left {
      float: left;
      width: 50%;
      padding-bottom: 4rem;
      .tape{
        width: 10rem;
        position: absolute;
        transform: rotate(315deg);

      }
      .tape1{
        margin-left: -60px;
      }
      .myphoto{
        width: 100%;
        border-radius: 10px;
      } 
      .tape2{
        transform: rotate(315deg);
        margin-top: 450px;
        margin-left: -100px;
      }
      
    }
    .about_right{
      float: left;
      width: 50%;
      padding: 1rem;
          .name{
            color: #ffde59;
            font-weight: 500;
            font-size: 2rem;
            position: relative; 
            display: inline-block; 
            text-shadow:2px 4px 2px gray ;
            background: linear-gradient(to top, #6e006e 30%, transparent 30%);
          }
          .btn{
            box-shadow:2px 4px 2px gray ;
          }
          .btn:hover{
            animation-name: ${ding};
            animation-duration: 1s;
          }
          .btn1{
            background-color: #ffde59;
          }
          .btn2{
            background-color: #afc5db;
          }
          .introduce p{
            text-shadow:2px 4px 2px gray ;
          }
          .character{
            border: 4px solid #ffde59;
            margin: 1rem 1.5rem;
            border-top: none;
            border-right: none;
            border-bottom: none;
            text-shadow:2px 4px 2px gray ;
            li{
                list-style-type: '-';
                padding-inline-start: 1ch;
                margin-left: 1rem;
                padding-bottom: 10px;
            }
        }
        .info_me{
        margin-top: 5rem;
        padding-left: 2rem;
        /* border: 1px solid black; */
        li{
          padding-bottom: 20px;
          text-shadow:2px 4px 2px gray ;
          i{
            color: #ffde59;
            margin-right: 10px;
          }
          a{
            color: #fff;
            text-decoration: underline;
            text-underline-position: under;
          }
          a:hover{
            color: #ffde59;
          }
        }
      }

  }
`

const About_me = (props) => {

  const [open, setOpen] = useState(false);

    const MovePoint1 = useRef();
    const MovePoint2 = useRef();
    
    const edu = () => {
      MovePoint1.current?.scrollIntoView({ behavior: 'smooth'});
    };
    const ski = () => {
      MovePoint2.current?.scrollIntoView({ behavior: 'smooth'});
    };
  
  
    const toggle = () => {
      setOpen(open => !open); // on,off 개념 boolean
    }
  
  const [message, setMessage] = useState(<div><br/>
  <p>반갑습니다.˙ᵕ˙<br/>저는 크리에이터이자 신입 개발자입니다. 주로 웹 프론트엔드 개발을 공부하고 있으며, 사용자를 즐겁게 하는 창의적인 작업을 하는 모든 것들을 즐깁니다.<br/>또한, 지금보다 더 나은 결과를 위해서 새로운 것을 배우는 것을 마다하지 않으며, 항상 개발자와 사용자에게 최상의 경험을 전달해주기 위해서 노력하고 있습니다.</p>
  <ul className="character">
    <li>목표지향적인 성격으로 업무의 몰입도가 높습니다.</li>
    <li>결과물을 만들어 내는 것을 좋아합니다.</li>
    <li>맡은 일에 책임감이 강합니다.</li>
    <li>새로운 언어를 배우는 것을 즐깁니다.</li>
  </ul></div>)
  

  const intro = () => {
    setMessage(intro_text);
    let btn1 = document.getElementById("btn1");
    let btn2= document.getElementById("btn2");
    btn1.style.backgroundColor = "#ffde59";
    btn2.style.backgroundColor = "#9ac1e2";
  }
  const info = () => {
    setMessage(info_text);
    let btn1 = document.getElementById("btn1");
    let btn2= document.getElementById("btn2");
    btn1.style.backgroundColor = "#9ac1e2";
    btn2.style.backgroundColor = "#ffde59";
  }
    let intro_text = [];
    let info_text = [];

    intro_text.push(
      <div className='introduce'><br/>
      <p >반갑습니다.˙ᵕ˙<br/>저는 크리에이터이자 신입 개발자입니다. 주로 웹 프론트엔드 개발을 공부하고 있으며, 사용자를 즐겁게 하는 창의적인 작업을 하는 모든 것들을 즐깁니다.<br/>또한, 지금보다 더 나은 결과를 위해서 새로운 것을 배우는 것을 마다하지 않으며, 항상 개발자와 사용자에게 최상의 경험을 전달해주기 위해서 노력하고 있습니다.</p>
      <ul className="character">
        <li>목표지향적인 성격으로 업무의 몰입도가 높습니다.</li>
        <li>결과물을 만들어 내는 것을 좋아합니다.</li>
        <li>맡은 일에 책임감이 강합니다.</li>
        <li>새로운 언어를 배우는 것을 즐깁니다.</li>
      </ul>
      
      </div>
    )
    info_text.push(
      <ul className="info_me">
        <li><i className="fa-solid fa-cake-candles"></i> 1999. 03. 29 (만 23세)</li>
        <li><i className="fa-solid fa-mobile-screen"></i> +82 10-7541-6944</li>
        <li><i className="fa-solid fa-graduation-cap"></i> 부산 외국어 대학교 / 러시아 학과 (4.01/4.5)</li>
        <li><i className="fa-solid fa-paper-plane"></i> hjw0329@naver.com</li>
        <li><i className="fa-brands fa-github"></i><a target="_blank" href="https://github.com/jiwoo0329"> https://github.com/jiwoo0329</a></li>
      </ul>
    )

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
                <ul>
                    <li className='line'><button>About</button></li>
                    <li className='line'><button onClick={edu}>TimeLine</button></li>
                    <li><button onClick={ski}>Skills</button></li>
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
    
    {/* about me 본문 내용 시작*/}

        <AboutMe_>
          <div className="aboutMe_container">
              <Styled.Title>
                <div  className="title" >
                    <h4>WHO AM I</h4>
                    <h2>About Me</h2>
                </div>
              </Styled.Title>

              <Introduce>
                
                    <div className="about_left">

                      <img src="images/tape.png" className="tape tape1" alt="tape"/>
                      <img src="images/jiwoo.jpg" className="myphoto" alt="내 사진"/>
                      <img src="images/tape.png" className="tape tape2" alt="tape"/>

                    </div>
                    <div className="about_right">
                        <p className="name">
                          홍지우(Hong Jiwoo)
                        </p>
                        <button className='btn btn1' id="btn1" onClick={intro}>1</button>
                        <button className='btn btn2' id="btn2" onClick={info}>2</button>
                        {message}
                    </div>
              </Introduce>
          </div>            
        </AboutMe_> 

        
        <div ref={MovePoint1} >
          <Education/>
        </div> 


        <div ref={MovePoint2}>
            <Skills/>
        </div>

    {/* 맨위로이동해줘~! */}
      <GoTop/>
    </>
  )
}

export default About_me