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

// 카드효과


// Import Swiper styles
import "swiper/css/effect-cards";

import "../Style/card.css";

// import required modules
import { EffectCards } from "swiper";

const TeamProject_ = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #9c94d0;
    display: flex;
    justify-content: center;
    .Team_container{
      width: 1300px;
      margin: 5rem 0 auto;
          
        .Team_left {
          float: left;
          width: 50%;
          .swiper {   //info 가장 밖에 의미
            width: 500px;
            height: 450px;
          }
          .swiper-slide {  //info 하나를 의미
            align-items: center;
            justify-content: center;
            border-radius: 18px;
            background-color: #fff;
          } 
          .Team_slide_top{
              width: 100%;
              background-color: #800080;
              height: 8%;
              .colorBtn{
                  width: 10px;
                  height: 10px;
                  position: relative;
                  margin-top: 2.5%;
                  margin-left: 8px;
                  display: flex;
                  float: left;
                  border-radius: 50%;
              }
              .btn1{
                  background-color: #ece37a;
                  margin-left: 20px;
              }
              .btn2{
                  background-color: #dd7eb2;
              }
              .btn3{
                  background-color: #82acd6;
              }
          }
          .Team_slideBottom{
            padding: 1rem;
            h3{
              display: flex;
              margin-bottom: 1rem;
              span{
                color: #9c94d0;
              }
              .goGit{
                margin-left: 10px;
                cursor: pointer;
                .fa-github{
                  color: #9c94d0;
                  font-size: 1.5rem;
                }
              }
            }
            ul li {
              font-size: .9rem;
              margin-bottom: 0.5rem;
              .Team_useSkills{
                display: flex;
                justify-content: space-around;
                margin-top: 0.5rem;
                li img{
                   width: 70%;
                }
               
              }
            }
            ul .Team_hash{
                color: #999;
            }
            
            
          }


        }

        .Team_right{
          float: left;
          width: 50%;
          text-align: center;
            img{
              width: 88.5%;
              z-index: 1;
            }
        }
    }
`
const MiniProject_ = styled.div`
    width: 100%;
    height: 100%;
    background-color: #9c94d0;
    display: flex;
    justify-content: center;
    .Mini_container{
      width: 1300px;
      padding-bottom: 2rem;
      .swiper-button-prev, .swiper-button-next{
        background-color: #800080;
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
      .swiper-button-prev::after, .swiper-button-next::after{
        font-size: 30px;
        font-weight: 800;
        color: #ffde59;
      }
      .swiper-pagination{
        bottom: -5px;
      }
      .swiper-pagination-bullet{
        background-color: #800080;
      }
      .swiper-pagination-bullet-active{
        background-color: #800080;
      }
      //큰 슬라이드 전체  
      .Mini_slide{
        height: 500px;
        display: flex;
        padding: 0 100px;
        .Mini_left { //왼쪽 큰 상자
          border: 2px dashed #800080;
          border-right: 2px dashed #800080;
          width: 500px;
          background-color: #ffde59; 
          display:flex;
          align-items:center;
          border-radius:20px 0 0 20px;
          padding: 2%;
          .image_box{   //왼쪽 실직적인 이미지 박스
              width: 470px;    
              height: 470px;
              border: 2px solid #542e92;
              overflow: hidden;
              position: relative;
              .image_box_hover{

                .Mini_photo{
                  width: 470px;
                  height: 470px;
                  transition: 0.5s all;
                }
                .Mini_moveBtn {
                  position:absolute;
                  left: 0;
                  right: 0;
                  top: 0;
                  bottom: 0;
                  background-color: rgb(0,0,0,0.8);
                  text-align: center;
                  line-height: 470px;
                  opacity: 0;
                  transition: 0.5s all;
                  button{
                    border: 4px solid #9c94d0;
                    z-index: 1;
                    border-radius: 15px;
                    padding: .3rem 1.5rem;
                    font-size: 1.2rem;
                    background-color:transparent;
                    color: #fff;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    display: inline-block;
                    margin-left: 30px;
                    margin-right: 20px;
                  }
                  button a{
                    color: #fff;
                  }
                  button::after {
                    position: absolute;
                    content: "";
                    width: 0;
                    height: 100%;
                    top: 0;
                    right: 0;
                    border-radius: 10px;
                    z-index: -1;
                    background: linear-gradient(to bottom right,   #ffde59,#9c94d0,#800080);
                    transition: all 0.3s ease;
                  }
                  button a:hover {
                    color: #fff;
                  }
                  button:hover:after {
                    left: 0;
                    width: 100%;
                  }
                }
              }
              .image_box_hover:hover .Mini_photo{
                transform:scale(1.1);
                
              }
              .Mini_moveBtn:hover {
                opacity: 1;
              } 
          }
      } 
            
        .Mini_right{
          width: 500px;
          background-color: #ffde59;
          position: relative;
          border-radius:0 20px 20px 0;
          border: 2px dashed #800080;
          border-left: none;
          img{
            width: 500px;    
            height: 500px;
            padding: 2%;
            position: absolute;
          
          }
          
          .Mini_text{
            position: absolute;
            margin: 6%;
            .Mini_title{
              text-align: center;
              
              li:first-child{
                font-size: 1.5rem;
                font-weight: bold;
              }
              .Mini_period{
                margin-bottom: 0.5rem;
              }
            }
            .Mini_info{
              li{
                margin-bottom: 0.5rem;

                .Mini_useSkills {
                  margin-top: 0.5rem;
                  display: flex;
                  justify-content: space-around;
                  li img{
                    position: relative;
                    width: 70px;
                    height: 70px;
                  
                  }
                }
              }
            }
          }
          li:last-child{
            color:#888
          }
        }
      }



        
  }
`

const My_project = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  
      const MovePoint1 = useRef();
      const [open, setOpen] = useState(false);
      const [computer, setComputer] = useState(<img src="images/computer-1.png" alt="컴퓨터"></img>);
     
        
      
      const onClickEnter = () => {
        setComputer(<img src="images/computer-1.png" alt="컴퓨터"></img>);
      }
      const onClickLeave = () => {
        setComputer(<img src="images/computer-2.png" alt="컴퓨터"></img>);
      }
      const toggle = () => {
        setOpen(open => !open); // on,off 개념 boolean
      }
      const etc = () => {
        MovePoint1.current?.scrollIntoView({ behavior: 'smooth'});
      };
      
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
          <div className="title">
              <h4>MY PROJECT</h4>
              <h2>Team Project</h2>
          </div>
        </Styled.Title>

        <div>
          <div className="Team_left">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='Team_slide_top'>
                <div className="colorBtn btn1"></div>
                  <div className="colorBtn btn2"></div>
                  <div className="colorBtn btn3"></div>
                </div>
                <div className='Team_slideBottom first'>
                  <h3><span>l</span>Ⅰ. Movie Project
                  <div className="goGit"><i className="fa-brands fa-github"></i><a target="_blank" href="https://github.com/HHeeW/CHK_Movie"></a></div>
                  </h3>
                    <ul>
                      <li>- 참가 인원: 4명</li>
                      <li>- 제작 기간: 1개월</li>
                      <li>- 주요 기능: React를 사용하여 영화의 정보 검색과 예매, 스낵과 굿즈, 진행중인 이벤트 확인 가능 페이지</li>
                      <li>- 나의 사용 기술 (Feat. 스토어)
                        <ul className="Team_useSkills">
                          <li> <img src="../images/round_icon5.png" alt="rn_logo"></img></li>
                          <li><img src="images/round_icon2.png" alt="css_logo"></img></li>
                          <li><img src="images/round_icon3.png" alt="js_logo"></img></li>
                          <li><img src="images/round_icon4.png" alt="jquery_logo"></img></li>
                        </ul>
                      </li>
                      <li className='Team_hash'>#영화예매 #첫_React프로젝트 #~~계기 #뿌듯</li>
                      
                    </ul>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className='Team_slide_top'>
                  <div className="colorBtn btn1"></div>
                  <div className="colorBtn btn2"></div>
                  <div className="colorBtn btn3"></div>
                </div>
                <div className='slide_in'>
                <div className='Team_slideBottom first'>
                  <h3><span>l</span>Ⅱ. Cafe Project
                  <div className="goGit"><i className="fa-brands fa-github"></i><a target="_blank" href="https://github.com/libby0322/Cafe_Lib_ver"></a></div></h3>
                    <ul>
                      <li>- 참가인원: 3명</li>
                      <li>- 제작기간: 3개월</li>
                      <li>- 주요 기능: React와 Json을 이용해 판매 제품 리스트 관리, 제품을 장바구니에 담고 수량 변경과 그에 따른 총 가격 변동의 장바구니 기능 구현한 카페 음료 구매 페이지</li>
                      <li>- 나의 사용 기술 (Feat. Coffee)
                        <ul className="Team_useSkills">
                          <li><img src="../images/round_icon5.png" alt="rn_logo"></img></li>
                          <li><img src="images/round_icon2.png" alt="css_logo"></img></li>
                          <li><img src="images/round_icon3.png" alt="js_logo"></img></li>
                          <li><img src="images/round_icon4.png" alt="js_logo"></img></li>
                          <li><img src="images/round_icon7.png" alt="jquery_logo"></img></li>
                        </ul>
                      </li>
                      <li className='Team_hash'>#음료 구매 #장바구니기능 #제품리스트화 #React #보람</li>
                    </ul>
                </div>
                </div>

              </SwiperSlide>
            </Swiper>
          </div>
            
          <div className="Team_right">{computer}</div>
            
            </div>
        </div>

    </TeamProject_>



    {/* 여기부터가 미니 프로젝트임~ */}
    <MiniProject_ ref={MovePoint1}>
      <div className="Mini_container">

        <Styled.Title>
          <div className="title">
              <h4>MY PROJECT</h4>
              <h2>Mini Project</h2>
          </div>
        </Styled.Title>


        <div>
            <Swiper
              // direction= 'vertical' 세로로
              style={{width:'1200px', height:'530px'}}
              spaceBetween={30} //SwiperSlide 사이에 간격
              slidesPerView={1}  //한번에 보일 갯수
              onSlideChange={() => console.log('slide change')}
              navigation //navigation bar '.swiper-button-next', // 다음 버튼 클래스명 '.swiper-button-prev', // 이번 버튼 클래스명            
              pagination={{ clickable: true }} //이전/다음 
              loop={true} //반복해 보여짐
              autoplay={false} //자동으로 넘어감
              speed ={1500}
            >
              <SwiperSlide className="Mini_slide slide1">
                <div className="Mini_left">
                  <div className='image_box'>
                    <div className="image_box_hover">
                      <img className="Mini_photo" src="../images/mini1.png" alt="미니프로젝트 사진"/>

                      <div className='Mini_moveBtn'>
                        <button>Live</button>
                        <button>Code</button>
                      </div>

                    </div>
                </div>

                </div>
                <div className="Mini_right">
                  <img src="./images/slide_deco.png"></img>
                  <div className='Mini_text'>
                    
                      <ul className='Mini_title'>
                        <li>Daum 카페</li>
                        <li className='Mini_period'>제작기간: 3일</li>
                      </ul>
                    <ul className="Mini_info">

                      <li>- 주요 기능
                        <br/>: 실제페이지와의 유사성, 슬라이딩 구현
                      </li>
                      <li>- 에피소드
                        <br/>
                        : 이걸 만들 때까지만해도 새벽에 끝나는 아르바이트를 병행하고 있어서 부족한 점이 많았다. 클론 코딩을 통해 하나하나 코드 입력을 통해 변화하는 모습에 흥미를 느꼈다. 
                      </li>
                      <li>- 나의 사용 기술
                        
                          <ul className="Mini_useSkills">
                            <li><img src="../images/round_icon5.png" alt="react_logo"></img></li>
                            <li><img src="images/round_icon2.png" alt="css_logo"></img></li>
                            <li><img src="images/round_icon3.png" alt="js_logo"></img></li>
                          </ul>
                      </li>
                      
                      <li>
                        #클론코딩 #다시는 안만들고 싶다 #다마음에안든다
                      </li>
                    </ul>
                    
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide className="Mini_slide slide2">
                <div className="Mini_left">
                  <div className='image_box'>
                    <div className="image_box_hover">
                      <img className="Mini_photo" src="../images/mini2.png" alt="미니프로젝트 사진"/>

                      <div className='Mini_moveBtn'>
                        <button><a target="_blank" href="https://jiwoo0329.github.io/moonbucks/">Live</a></button>
                        <button>Code</button>
                      </div>

                    </div>
                </div>

                </div>
                <div className="Mini_right">
                  <img src="./images/slide_deco.png"></img>
                  <div className='Mini_text'>
                    
                      <ul className='Mini_title'>
                        <li>문벅스</li>
                        <li className='Mini_period'>제작기간: 7일</li>
                      </ul>
                    <ul className="Mini_info">

                      <li>- 주요 기능
                        <br/>: 실제페이지와의 유사성, 슬라이딩 구현
                      </li>
                      <li>- 에피소드
                        <br/>
                        : 이걸 만들 때까지만해도 새벽에 끝나는 아르바이트를 병행하고 있어서 부족한 점이 많았다. 클론 코딩을 통해 하나하나 코드 입력을 통해 변화하는 모습에 흥미를 느꼈다. 
                      </li>
                      <li>- 나의 사용 기술
                        
                          <ul className="Mini_useSkills">
                            <li><img src="images/round_icon1.png" alt="html_logo"></img></li>
                            <li><img src="images/round_icon2.png" alt="css_logo"></img></li>
                            <li><img src="images/round_icon3.png" alt="js_logo"></img></li>
                          </ul>
                      </li>
                      
                      <li>
                        #클론코딩 #다시는 안만들고 싶다 #다마음에안든다
                      </li>
                    </ul>
                    
                  </div>
                  
                </div>
              </SwiperSlide>
              {/* 헬스장 페이지 */}
              <SwiperSlide className="Mini_slide slide1">
                <div className="Mini_left">
                  <div className='image_box'>
                    <div className="image_box_hover">
                      <img className="Mini_photo" src="../images/mini3.png" alt="미니프로젝트 사진"/>

                      <div className='Mini_moveBtn'>
                        <button><a target="_blank" href="https://jiwoo0329.github.io/HealthPage/">Live</a></button>
                        <button><a target="_blank" href="https://github.com/jiwoo0329/HealthPage">Code</a></button>
                      </div>

                    </div>
                </div>

                </div>
                <div className="Mini_right">
                  <img src="./images/slide_deco.png"></img>
                  <div className='Mini_text'>
                    
                      <ul className='Mini_title'>
                        <li>헬스장 페이지</li>
                        <li className='Mini_period'>제작기간: 7일</li>
                      </ul>
                    <ul className="Mini_info">

                      <li>- 주요 기능
                        <br/>: 메뉴바, 슬라이드
                      </li>
                      <li>- 에피소드
                        <br/>
                        : 상상해서 무언가를 만드는 것은 정말 어려운 일이라는 것을 알 수 있었다. 사이트에 어울리는 색과 이미지를 찾고 조화롭게 보이게 하는 능력을 키울 수 있었다.
                      </li>
                      <li>- 나의 사용 기술
                        
                          <ul className="Mini_useSkills">
                            <li><img src="images/round_icon1.png" alt="html_logo"></img></li>
                            <li><img src="images/round_icon2.png" alt="css_logo"></img></li>
                            <li><img src="images/round_icon3.png" alt="js_logo"></img></li>
                          </ul>
                      </li>
                      
                      <li>
                        #디자인제작 
                      </li>
                    </ul>
                    
                  </div>
                  
                </div>
              </SwiperSlide>
              {/* 경기도김포시Blog */}
              <SwiperSlide className="Mini_slide slide1">
                <div className="Mini_left">
                  <div className='image_box'>
                    <div className="image_box_hover">
                      <img className="Mini_photo" src="../images/mini4.png" alt="미니프로젝트 사진"/>

                      <div className='Mini_moveBtn'>
                        <button>Live</button>
                        <button>Code</button>
                      </div>

                    </div>
                </div>

                </div>
                <div className="Mini_right">
                  <img src="./images/slide_deco.png"></img>
                  <div className='Mini_text'>
                    
                      <ul className='Mini_title'>
                        <li>경기도 김포시 Blog</li>
                        <li className='Mini_period'>제작기간: 5일</li>
                      </ul>
                    <ul className="Mini_info">

                      <li>- 주요 기능
                        <br/>: 디자인
                      </li>
                      <li>- 에피소드
                        <br/>
                        : 배경에 동영상이 들어가니 훨씬 재미있는 페이지를 구현할 수 있었다. 내가 살고있는 김포시에 대한 blog를 만들기위해 검색을 통해서 알지 못했던 우리 지역 소식을 알 수 있었다.
                      </li>
                      <li>- 나의 사용 기술
                        
                          <ul className="Mini_useSkills">
                            <li><img src="../images/round_icon5.png" alt="react_logo"></img></li>
                            <li><img src="images/round_icon2.png" alt="css_logo"></img></li>
                            <li><img src="images/round_icon3.png" alt="js_logo"></img></li>
                          </ul>
                      </li>
                      
                      <li>
                        #디자인 #블로그
                      </li>
                    </ul>
                    
                  </div>
                  
                </div>
              </SwiperSlide>
              {/* 나의여행블로그 */}
              <SwiperSlide className="Mini_slide slide1">
                <div className="Mini_left">
                  <div className='image_box'>
                    <div className="image_box_hover">
                      <img className="Mini_photo" src="../images/mini5.png" alt="미니프로젝트 사진"/>

                      <div className='Mini_moveBtn'>
                        <button>Live</button>
                        <button>Code</button>
                      </div>

                    </div>
                </div>

                </div>
                <div className="Mini_right">
                  <img src="./images/slide_deco.png"></img>
                  <div className='Mini_text'>
                    
                      <ul className='Mini_title'>
                        <li>Travel & Challenge Blog</li>
                        <li className='Mini_period'>제작기간: 1개월</li>
                      </ul>
                    <ul className="Mini_info">

                      <li>- 주요 기능
                        <br/>: 메뉴바, 로그인
                      </li>
                      <li>- 에피소드
                        <br/>
                        : 이걸 만들 때까지만해도 새벽에 끝나는 아르바이트를 병행하고 있어서 부족한 점이 많았다. 클론 코딩을 통해 하나하나 코드 입력을 통해 변화하는 모습에 흥미를 느꼈다. 
                      </li>
                      <li>- 나의 사용 기술
                        
                          <ul className="Mini_useSkills">
                            <li><img src="../images/round_icon5.png" alt="react_logo"></img></li>
                            <li><img src="images/round_icon2.png" alt="css_logo"></img></li>
                            <li><img src="images/round_icon3.png" alt="js_logo"></img></li>
                            <li><img src="images/round_icon6.png" alt="bootstrap_logo"></img></li>
                          </ul>
                      </li>
                      
                      <li>
                        #디자인 #블로그 #React
                      </li>
                    </ul>
                    
                  </div>
                  
                </div>
              </SwiperSlide>
              {/* 가위바위보게임 */}
              <SwiperSlide className="Mini_slide slide1">
                <div className="Mini_left">
                  <div className='image_box'>
                    <div className="image_box_hover">
                      <img className="Mini_photo" src="../images/mini6.png" alt="미니프로젝트 사진"/>

                      <div className='Mini_moveBtn'>
                        <button><a target="_blank" href="https://jiwoo0329.github.io/RockScissorsPaper/">Live</a></button>
                        <button><a target="_blank" href="https://github.com/jiwoo0329/RockScissorsPaper">Code</a></button>
                      </div>

                    </div>
                </div>

                </div>
                <div className="Mini_right">
                  <img src="./images/slide_deco.png"></img>
                  <div className='Mini_text'>
                    
                      <ul className='Mini_title'>
                        <li>가위바위보 게임</li>
                        <li className='Mini_period'>제작기간: 3일</li>
                      </ul>
                    <ul className="Mini_info">

                      <li>- 주요 기능
                        <br/>: 실제페이지와의 유사성, 슬라이딩 구현
                      </li>
                      <li>- 에피소드
                        <br/>
                        : 이걸 만들 때까지만해도 새벽에 끝나는 아르바이트를 병행하고 있어서 부족한 점이 많았다. 클론 코딩을 통해 하나하나 코드 입력을 통해 변화하는 모습에 흥미를 느꼈다. 
                      </li>
                      <li>- 나의 사용 기술
                        
                          <ul className="Mini_useSkills">
                            <li><img src="../images/round_icon1.png" alt="html_logo"></img></li>
                            <li><img src="images/round_icon2.png" alt="css_logo"></img></li>
                            <li><img src="images/round_icon3.png" alt="js_logo"></img></li>
                          </ul>
                      </li>
                      
                      <li>
                        #클론코딩 #다시는 안만들고 싶다 #다마음에안든다
                      </li>
                    </ul>
                    
                  </div>
                  
                </div>
              </SwiperSlide>
              {/* 나의포트폴리오 */}
              <SwiperSlide className="Mini_slide slide1">
                <div className="Mini_left">
                  <div className='image_box'>
                    <div className="image_box_hover">
                      <img className="Mini_photo" src="../images/mini_last.png" alt="미니프로젝트 사진"/>

                      <div className='Mini_moveBtn'>
                        <button>Live</button>
                        <button>Code</button>
                      </div>

                    </div>
                </div>

                </div>
                <div className="Mini_right">
                  <img src="./images/slide_deco.png"></img>
                  <div className='Mini_text'>
                    
                      <ul className='Mini_title'>
                        <li>My Portfolio</li>
                        <li className='Mini_period'>제작기간: 1개월</li>
                      </ul>
                    <ul className="Mini_info">

                      <li>- 주요 기능
                        <br/>: 디자인, 애니메이션, 지도
                      </li>
                      <li>- 에피소드
                        <br/>
                        : 다른 사람들의 도움없이 순전히 내가 혼자 만들어낸 React페이지이다. 그만큼 React에 대해서도 더 잘 알 수 있었고, 코딩의 재미를 느낄 수 있었다. 
                      </li>
                      <li>- 나의 사용 기술
                        
                          <ul className="Mini_useSkills">
                            <li><img src="../images/round_icon5.png" alt="react_logo"></img></li>
                            <li><img src="images/round_icon2.png" alt="css_logo"></img></li>
                            <li><img src="images/round_icon3.png" alt="js_logo"></img></li>
                          </ul>
                      </li>
                      
                      <li>
                        #포트폴리오 #React #지도
                      </li>
                    </ul>
                    
                  </div>
                  
                </div>
              </SwiperSlide>
              

            </Swiper>
          </div>
      </div>
      </MiniProject_>
      {/* 맨위로 이동해주랑 */}
      <GoTop/>
    </>
  )
}

export default My_project