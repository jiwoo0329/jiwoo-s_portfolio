import React,{useRef, useState} from 'react'
import {Link } from 'react-router-dom';
import * as Styled from "../Style/Style";
import styled from "styled-components";
import GoTop from '../Style/GoTop'


import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const TeamProject_ = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #9c94d0;
    display: flex;
    justify-content: center;
    .Team_container{
      border: 1px solid red;
      width: 1300px;
      margin: 5rem 0 auto;
          
          .Team_left {
            float: left;
            width: 45%;
            border: 1px solid red;

            .project_name{
              width: 100%;
              display: flex;
              .name1, .name2{
                width: 50%;
                padding: 0.5rem 0;
                text-align: center;
                background-color: white;
                border: none;
                border-radius: 20px 20px 0 0 ;
                box-shadow: 1px 1px 2px #e34ea0,
                          0 0 25px #e34ea0,
                          0 0 5px #e34ea0;
                
                h2{
                  font-size: 1.2rem;
                }
              }
              .name1{
                background-color: #ffc4e4;
                color: #e34ea0;
              }
              .name1:hover, .name2:hover{
                background-color: #ffc4e4;
                color: #e34ea0;
                cursor: pointer;
              }
            }
           
            .project_info{
              padding: 2rem;
              color: #fff;
              background-color: #800080; 
              box-shadow: 1px 1px 2px #e34ea0,
                          0 0 25px #e34ea0,
                          0 0 5px #e34ea0;
              
              .first, .second{
                ul li{
                    padding-bottom: .5rem;
                    .pj_useSkills{
                      display: flex;
                      justify-content: space-around;
                        li img{
                            text-align: center;
                            padding-top:2rem;
                        }
                    }
                }
              }
            
          }
        }
          .Team_right{border: 1px solid red;
            float: left;
            width: 55%;
                img{
                  width: 100%;
                  z-index: 1;
                }
          }
          
    }
`
const MiniProject_ = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #9c94d0;
    display: flex;
    justify-content: center;
    .container{
      border: 1px solid black;
      width: 1500px;
      margin: 0 auto;
       padding-top: 2rem;
         padding: 2rem 0 ;
        .title{
            margin-bottom: 2rem;
            padding-left: 1rem;
                h4{
                    font-size: 1rem;
                    color: #e3adcb;
                }
                h2{
                font-size: 2.5rem;
                }
              }
            }
            `

const Slide = styled.div`
  //버튼스타일
  .swiper-button-prev, .swiper-button-next{
    background-color: #fff;
    border: 2px solid #ffc4e4;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .swiper-button-prev::after, .swiper-button-next::after{
    font-size: 30px;
    font-weight: 800;
    color: #ffc4e4;
  }
  .swiper-pagination-bullet{
    background-color: #fba4b3;
  }
  .swiper-pagination-bullet-active{
    background-color: #fd9cee;
  }
  //큰 슬라이드 전체  
  .slide{
    height: 600px;
    display: flex;
    padding: 0 100px;
    .left {
      border: 2px dashed #542e92;
      border-right: none;
      width: 600px;
      background-color: #ffc4e4; 
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius:20px 0 0 20px;
      padding: 2%;
      .image_box{
          width: 570px;    
          height: 570px;
          border: 2px solid #542e92;
          overflow: hidden;
          position: relative;
          .etc_photo{
            width: 100%;
            height: 100%;
            
          }
          
           .etc_button {
            position:absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgb(0,0,0,0.8);
            text-align: center;
            line-height: 570px;
            opacity: 0;
            transition: 0.5s all;
              span{
                border: 4px solid #e3adcb;
                padding: .5rem 2rem;
                font-size: 1.5rem;
                background-color: #fff;
                border-radius: 15px;
                margin-left: 20px;
                margin-right: 10px;
                
              }
          }.aa:hover .etc_photo{
            transform:scale(1.1);
            transition: 0.5s all;
          }
        .etc_button:hover {
          opacity: 1;
          
        } span:hover{
            background: linear-gradient(to bottom right, #b1ade3, #e3adcb, #f1f188);
            color: #fff; 
          }
         
      }
        } 
        
    .right{
      width: 600px;
      background-color: #ffc4e4;
      position: relative;
      border-radius:0 20px 20px 0;
      border: 2px dashed #542e92;
      border-left: none;
      img{
        width: 600px;    
        height: 600px;
        padding: 2%;
        position: absolute;
       
      }
      
      .etc_text{
        position: absolute;
        margin: 6%;
        
        height: 450px;
        .etc_pj_title{
          text-align: center;
          li:first-child{
            font-size: 2rem;
          }
        }
        .explanation{
          margin-top: 1rem;
        }
        .etc_button{
          display: flex;
          justify-content: space-around;
          
          li{
            border: 2px solid #e3adcb;
            border-radius: 15px;
            padding: .5rem 1rem;
            position: relative;
            bottom: -120px;
  
          }
        }
      }
        
    }
  }
  .slide1{
    
  }
  .slide2{
    background-color: blue;
    border:'1px solid black'
  }
  .slide3{
    background-color: yellow;
    border:'1px solid black'
  }
  .slide4{
    background-color: green;
    border:'1px solid black'
  }
  
`
const My_project = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  
      const MovePoint1 = useRef();
      const [open, setOpen] = useState(false);
      const [computer, setComputer] = useState(<img src="images/computer-1.png" alt="컴퓨터"></img>);
      const [message, setMessage] = useState(
        <div className="first">
          <ul>
            <li>- 참가인원: 4명</li>
            <li>- 제작기간: 1개월</li>
            <li>- 설 명: 설 명: CGV, 롯데시네마 등과 같은 영화 예매 페이지이다. 사용자가 영화의 정보와 예매하기, 스낵과 굿즈, 진행중인 이벤트를 알 수 있다. 총 4개의 카테고리로 나누어져 내가 맡은 부분은 Store이다. 영화관에서 판매하는 스낵과 굿즈로 카테고리를 나누어 사용자가 이용하기 편리한 화면을 구현하였다.</li>
            <li>- 내가 사용한 기술
                <ul className="pj_useSkills">
                  <li><img src="../images/learn5.png" alt="rn_logo"></img></li>
                  <li><img src="images/used2.png" alt="css_logo"></img></li>
                  <li><img src="images/used3.png" alt="js_logo"></img></li>
                </ul>
            </li>
            <li className="goGit">- <i className="fa-brands fa-github"></i><a target="_blank" href="https://github.com/HHeeW/CHK_Movie"> 바로 가기</a>
            </li>
          </ul>
          
        </div>
      )
      
      const onClickEnter = () => {
        setMessage(yyy);
        let backgr2 = document.getElementById("backgr2");
        let backgr1 = document.getElementById("backgr1");
        backgr1.style.backgroundColor = "#ffc4e4";
        backgr1.style.color = "#e34ea0";
        backgr2.style.backgroundColor = "white";
        backgr2.style.color = "black";
        setComputer(<img src="images/computer-1.png" alt="컴퓨터"></img>);
      }
      const onClickLeave = () => {
        setMessage(xxx);
        let backgr2 = document.getElementById("backgr2");
        let backgr1 = document.getElementById("backgr1");
        backgr1.style.backgroundColor = "white";
        backgr1.style.color = "black";
        backgr2.style.backgroundColor = "#ffc4e4";
        backgr2.style.color = "#e34ea0";
        setComputer(<img src="images/computer-2.png" alt="컴퓨터"></img>);
      }
      const toggle = () => {
        setOpen(open => !open); // on,off 개념 boolean
      }
      const etc = () => {
        MovePoint1.current?.scrollIntoView({ behavior: 'smooth'});
      };
     
      
      //만약에 00을 클릭하면 1. 00보이기 2. 백색상변하기 3.텍스트색변하기
      let yyy = [];  
      let xxx = [];  

      yyy.push(
        <>
            <div className="first">
              <ul>
                <li>- 참가인원: 4명</li>
                <li>- 제작기간: 1개월</li>
                <li>- 설 명: CGV, 롯데시네마 등과 같은 영화 예매 페이지이다. 사용자가 영화의 정보와 예매하기, 스낵과 굿즈, 진행중인 이벤트를 알 수 있다. 총 4개의 카테고리로 나누어져 내가 맡은 부분은 Store이다. 영화관에서 판매하는 스낵과 굿즈로 카테고리를 나누어 사용자가 이용하기 편리한 화면을 구현하였다.</li>
                <li>- 내가 사용한 기술
                  <ul className="pj_useSkills">
                    <li> <img src="../images/learn5.png" alt="rn_logo"></img></li>
                    <li><img src="images/used2.png" alt="css_logo"></img></li>
                    <li><img src="images/used3.png" alt="js_logo"></img></li>
                  </ul>
                </li>
                <li className="goGit"><i className="fa-brands fa-github"></i><a target="_blank" href="https://github.com/HHeeW/CHK_Movie"> 바로 가기</a>
                </li>
              </ul>
            </div>
        </>
      )
      xxx.push(
        <>
            <div className="second">
                <ul>
                  <li>- 참가인원: 3명</li>
                  <li>- 제작기간: 3개월</li>
                  <li>- 설 명: 스타벅스, 투썸과 같은 카페 음료를 구매할 수 있는 페이지다. 팬매하는 모든 제품을 json을 이용해 리스트화해서 제품 리스트를 수정하기 편리하게 구성화하였다. 제품을 장바구니에 담고 수량 변경과 그에 따른 총 가격 변동의 기능을 확인할 수 있다.</li>
                  <li>- 내가 사용한 기술
                    <ul className="pj_useSkills">
                      <li> <img src="../images/learn5.png" alt="rn_logo"></img></li>
                      <li><img src="images/used2.png" alt="css_logo"></img></li>
                      <li><img src="images/used3.png" alt="js_logo"></img></li>
                      <li><img src="../images/used4.png" alt="jq_logo"></img></li>
                      <li><img src="../images/used7.png" alt="sc_logo"></img></li>
                    </ul>
                  </li>
                  <li><i className="fa-brands fa-github"></i><a target="_blank" href="https://github.com/libby0322/Cafe_Lib_ver"> 바로 가기</a></li>
                </ul>
            </div>
        </>
      )
      
  return (
    <>
    {/* 네비게이션 */}
    <Styled.TopBar>
        
        <div className="topNav_">
            <img src="images/topNav.png" alt="topNav"></img>

            <div className='topNav_in'>
                <Link to="/bignav">
                    <button title='홈으로 이동' className='goHome'><i class="fa-solid fa-house"></i> Home</button>
                </Link>
                <ul>
                    <li className='line'><button>Team Project</button></li>
                    <li><button onClick={etc}>Mini Project</button></li>
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
    
    {/* Portfolio */}
    
      <TeamProject_>
        <div className="Team_container">

          <Styled.Title>
            <div  className="title" style={{marginTop: "5rem"}}>
                <h4>MY PROJECT</h4>
                <h2>Team Project</h2>
            </div>
          </Styled.Title>




          <div>
            <div className="Team_left">
              <div className='project_name'>
                <div className='name1' id="backgr1" onClick={onClickEnter}>
                  <h2 >Ⅰ. Movie Project</h2>
                </div>
                <div className='name2' id="backgr2" onClick={onClickLeave}>
                  <h2>Ⅱ. Cafe Project</h2>
                </div>       
            </div>

            <div className='project_info'>
              {message}
            </div>
          </div>


            <div className="Team_right">{computer}</div>
            
          </div>
        </div>

      </TeamProject_>




      <MiniProject_ ref={MovePoint1}>
      <div className="container">

        <Styled.Title>
          <div  className="title" style={{marginTop: "5rem"}}>
              <h4>MY PROJECT</h4>
              <h2>Mini Project</h2>
          </div>
        </Styled.Title>
          <div>
          <Slide>
            <Swiper
              // direction= 'vertical' 세로로
              style={{width:'1400px', height:'650px'}}
              spaceBetween={50} //SwiperSlide 사이에 간격
              slidesPerView={1}  //한번에 보일 갯수
              onSlideChange={() => console.log('slide change')}
              navigation //navigation bar '.swiper-button-next', // 다음 버튼 클래스명 '.swiper-button-prev', // 이번 버튼 클래스명            
              pagination={{ clickable: true }} //이전/다음 
              loop={true} //반복해 보여짐
              autoplay={false} //자동으로 넘어감
              speed ={1500}
            >
              <SwiperSlide className="slide slide1">
                <div className="left">


                  <div className='image_box'>
                    <div className="aa">
                      <img className="etc_photo" src="../images/etc1.png" alt="영화"/>


                      <div className='etc_button'>
                        <span>Live</span>
                        <span>Code</span>
                      </div>
                     </div>
                  </div>



                </div>
                <div className="right">
                  <img src="./images/slide_deco.png"></img>
                  <ul className='etc_text'>
                    <li>
                      <ul className='etc_pj_title'>
                        <li>(프로젝트 이름)</li>
                        <li>(제작기간)</li>
                      </ul>
                    </li>
                    <li className='explanation'># 설명
                      <br/>
                    것은 끓는 같이 위하여서 더운지라 부패를 없으면, 봄바람이다. 작고 얼마나 튼튼하며, 사랑의 곧 심장은 찾아다녀도, 것이다. 곧 전인 평화스러운 아니한 속에서 거선의 있는 인생을 보라. 그러므로 청춘은 이상 보이는 대중을 소리다.이것은 이 봄바람이다. </li>
                    <li className='explanation'># 스킬
                      <br/>
                    풍부하게 충분히 과실이 위하여 뜨고, 피어나는 피에 우리는 청춘이 철환하였는가? 뛰노는 간에 얼마나 피고, 사랑의 스며들어 소리다.</li>
                    <li className='explanation'># 후기
                      <br/>
                    풍부하게 충분히 과실이 위하여 뜨고, 피어나는 피에 우리는 청춘이 철환하였는가? 뛰노는 간에 얼마나 피고, 사랑의 스며들어 소리다.</li>
                    {/* <li>
                      <ul className='etc_button'>
                        <li>Live</li>
                        <li>Code</li>
                   </ul>
                    </li> */}
                  </ul>
                  
                </div>
              </SwiperSlide>
              
            </Swiper>
          </Slide>
          </div>
      </div>
      </MiniProject_>
      {/* 맨위로 이동해주랑 */}
      <GoTop/>
    </>
  )
}

export default My_project