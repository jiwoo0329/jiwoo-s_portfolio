import React from 'react'
import { Link } from 'react-router-dom';
import * as Styled from "../Style/Style";
import styled, {keyframes} from "styled-components";


const bounce = keyframes`
  100% {
    top: -7px;        
  }
`

const Home_ = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #9c94d0;
  display : flex;
  align-items : center;
      .home_in{
        background-color: #fff;
        border-radius: 20px;
        width: 92%;
        height: 85%;
        margin: 0 auto;

        .home_right{
          width: 55%;
          height: 100%;
          padding: 10px 30px;
          z-index: 8;
          .home_title{
            height: 65%;
            color: #800080;
            font-weight: bold;
            font-size: 65px;
            text-shadow: #9c94d0 1px 0 10px;
            .home_titleTop{
            }
            .home_titleBottom{
              margin: 0;
            }

          span{
            position: relative;
            animation: ${bounce} .3s ease infinite alternate;
          }
          span:nth-child(2) { animation-delay: .1s; }
          span:nth-child(3) { animation-delay: .2s; }
          span:nth-child(4) { animation-delay: .3s; }
          span:nth-child(5) { animation-delay: .4s; }
          span:nth-child(6) { animation-delay: .5s; }
          span:nth-child(7) { animation-delay: .6s; }
          span:nth-child(8) { animation-delay: .7s; }
          span:nth-child(9) { animation-delay: .8s; }
          span:nth-child(10) { animation-delay: .9s; }
          span:nth-child(11) { animation-delay: 1s; }
          span:nth-child(12) { animation-delay: 1.1s; }
          span:nth-child(13) { animation-delay: 1.2s; }
          span:nth-child(14) { animation-delay: 1.3s; }
        }
      }

        .home_text{
            font-weight: bold;
            color: #222;
            height: 35%;
        }   
        
      }  .home_deco{
          width: 60%;
          height: 80vh;
          display: flex;
          position: absolute;
          top: 19%;
          left: 40%;
        }
`
const StyledLink = styled(Link)`
  .home_nextButton{
    border: 2px solid #ffde59;
    background-color: #ffde59;
    color: #fff;
    border-radius: 30px;
    padding: 1%;
    font-weight: bold;
    width: 200px;
    cursor: pointer;
    box-shadow: 1px 1px 2px #9c94d0,
                   0 0 25px #9c94d0,
                   0 0 5px #9c94d0;
    .home_nextButtonIn{
      border: 2px solid #fff;
      border-radius: 30px;
      padding: 3%;
      font-size:1.2rem;
      
      opacity: 0.6;
      i{
        color: #fff;
      }
      span{
        margin-left: 20px;
      }
    }
    
  }
  .home_nextButton:hover .home_nextButtonIn{
    opacity: 1;
  }
`




const Home = () => {
  return (
    <>
  
        <Home_>
          <div className='home_in'>
            <div className='home_right'>
                  {/* 제목 */}
                  <div className="home_title">
                    <div className="home_titleTop">
                      <span>H</span><span>J</span><span>W</span><span>'</span><span>s</span>
                    </div>
                    <div className="home_titleBottom">
                      <span>p</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span> 
                    </div>
                  </div>
                  {/* 명언 */}
                <div className="home_text">        
                  인생은 흘러가는 것이 아니라 채워지는 것입니다.
                  <br/>
                  우리는 하루하루를 보내는 것이 아니라<br/> 내가 가진 무엇으로 채워가는 것입니다.
                  <br/>
                  그래서 저는 오늘도 개발자라는 꿈을 위해 하루하루 최선을 다합니다.
                  <br/><br/>
                  <StyledLink to = "/bignav" >
                    <button className='home_nextButton'>
                      <div className='home_nextButtonIn'>
                         <i className="fa-solid fa-arrow-right"></i><span>Next</span>
                      </div>
                     
                    </button>
                  </StyledLink>  
                </div>
            </div>

            <img className="home_deco" src="images/home_deco.png" alt="home_deco"></img>


          </div>
        </Home_>
    </>
  )
}

export default Home