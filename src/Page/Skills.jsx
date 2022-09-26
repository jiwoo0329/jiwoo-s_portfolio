import React from 'react'
import * as Styled from "../Style/Style";
import styled from "styled-components";



const Skills_ = styled.div`
  width: 100%;
  background-color: #9c94d0;
  display: flex;
  justify-content: center;
    .skills_container{
        width: 1000px;
        margin: 0 auto;
        padding-top: 1rem;

    }


`
const MySkills = styled.div`
  .skills{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    .used, .learn{
      background-color: #f8f8f8;
      border-radius: 30px;
      width: 48%;
      padding: 2rem;
      box-shadow: 1px 1px 2px #ffde59,
                   0 0 25px #ffde59,
                   0 0 5px #ffde59;
      
      h3{
        margin-bottom: 1rem;
        span{
          color: #800080;
        }
      }
      ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        li{
            margin:7px;
            .cont {
              width: 100px;
              height: 100px;
              perspective: 300px;
                .item{
                    border: none;
                    font-size: 35px;
                    backface-visibility: hidden;
                    transition: 1s;
                }
                    .item.front {
                      position: absolute;
                      transform: rotateY(0deg);
                    }
                    .item.back {
                      transform: rotateY(-180deg);
                      position: relative;
                      text-align: center;

                      img{
                          opacity: 0.5;
                          transform: scaleX(-1);
                      }
                      span{
                        position:absolute;
                        top: 50%;
                        left: 50%;
                        font-weight: bolder;
                        text-shadow: 2px 2px 6px gray;
                        
                      }
                      .a, .aa{
                          color: red;
                          transform: translate(-50%, -60%);
                      }
                      .b{
                          color: blue;
                          transform: translate(-35%, -60%);
                      }
                      .c{
                          color: yellow;
                          transform: translate(-50%, -80%);
                      }
                    }
            }
            .cont:hover{
              cursor: pointer;
            }
            .cont:hover .item.front {
              transform: rotateY(180deg);
            }
            .cont:hover .item.back {
              transform: rotateY(0deg);
            }
        }
      }
    }
  }
`


const Skills = () => {
  return (
    <Skills_>

      <div className="skills_container">

        <Styled.Title>
          <div className="title" style={{marginTop: "3rem"}}>
              <h4>I CAN DO IT</h4>
              <h2>My Skills 
                <button>?
                  <div className='comment'>
                   로고에 마우스 포인트를 가져다대면 각 언어의 능력 등급을 알 수 있습니다. (A ~ C 등급)<br/>
                   <span style={{color: "red"}}>A</span> : 가장 자신있고, 자주 사용함.<br/>
                   <span style={{color: "blue"}}>B</span> : 사용 경험이 있음.<br/>
                   <span style={{color: "yellow"}}>C</span> : 걸음마 단계.
                  </div>
                </button>
              </h2>
          </div>
        </Styled.Title>


          <MySkills>
              <div className='skills'>
                <div className='used'>
                  <h3><span>l</span> The most used</h3>
                  <ul>
                    <li>
                          <div className="cont">
                            <div class="item front">
                               <img src="../images/used1.png" alt="html_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/used1.png" alt="html_logo"></img><span className="a">A</span>
                            </div>
                          </div>
                    </li>
                    <li>
                          <div className="cont">
                            <div class="item front">
                               <img src="../images/used2.png" alt="css_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/used2.png" alt="css_logo"></img><span className="a">A</span>
                            </div>
                          </div>
                    </li>
                    <li>
                          <div className="cont">
                            <div class="item front">
                               <img src="../images/used3.png" alt="js_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/used3.png" alt="js_logo"></img><span className="a">A</span>
                            </div>
                          </div>
                    </li>
                    <li>
                          <div className="cont">
                            <div class="item front">
                               <img src="../images/used4.png" alt="jq_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/used4.png" alt="jq_logo"></img><span className="a">A</span>
                            </div>
                          </div>
                    </li>
                    <li>
                          <div className="cont">
                            <div class="item front">
                               <img src="../images/used5.png" alt="react_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/used5.png" alt="react_logo"></img><span className="a">A</span>
                            </div>
                          </div>
                    </li>
                    <li>
                          <div className="cont">
                            <div class="item front">
                               <img src="../images/used6.png" alt="bs_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/used6.png" alt="bs_logo"></img><span className="a" style={{transform: "translate(-20%, -80%)"}}>A</span>
                            </div>
                          </div>
                    </li>
                    <li>
                          <div className="cont">
                            <div class="item front">
                               <img src="../images/used7.png" alt="sc_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/used7.png" alt="sc_logo"></img><span className="a">A</span>
                            </div>
                          </div>
                    </li>
                  </ul>
                </div>
                <div className="learn">
                  <h3><span>l</span> Now I'm learning</h3>
                  <ul>
                    <li>
                      <div className="cont">
                        <div class="item front">
                            <img src="../images/learn3.png" alt="vue_logo"></img>
                        </div>
                        <div class="item back">
                          <img src="../images/learn3.png" alt="vue_logo"></img><span className="c">C</span>
                        </div>
                      </div>
                    </li>
                    <li><div className="cont">
                            <div class="item front">
                               <img src="../images/learn4.png" alt="ts_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/learn4.png" alt="ts_logo"></img><span className="b">B</span>
                            </div>
                          </div></li>
                    <li><div className="cont">
                            <div class="item front">
                               <img src="../images/learn5.png" alt="rn_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/learn5.png" alt="rn_logo"></img><span className="c">C</span>
                            </div>
                          </div></li>
                    <li><div className="cont">
                            <div class="item front">
                               <img src="../images/learn2.png" alt="mysql_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/learn2.png" alt="mysql_logo"></img><span className="b">B</span>
                            </div>
                          </div></li>
                    <li>
                      <div className="cont">
                            <div class="item front">
                               <img src="../images/learn1.png" alt="node_logo"></img>
                            </div>
                            <div class="item back">
                              <img src="../images/learn1.png" alt="node_logo"></img><span className="b">B</span>
                            </div>
                          </div>
                      </li>
                  </ul>
                </div>
              </div>
          </MySkills>
      </div>
    </Skills_>
  )
}

export default Skills