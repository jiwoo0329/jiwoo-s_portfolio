import React from 'react'
import * as Styled from "../Style/Style";
import styled from "styled-components";



const Education_ = styled.div`
    width: 100%;
    background-color: #fff;
    .edu_container{
        width: 1000px;
        margin: 0  auto;
        
        .school{
            .school_{
              position: relative;
              display: table;
              table-layout: fixed;
              width: 100%;
              padding-bottom: 15px;
              .school_left{
                width: 25%;
                display: table-cell;
                padding-right: 25px;
                min-height: 100%;
                text-align: right;
                vertical-align: top;
                color: #888;
              }
              .timeLine{
                position: absolute;
                top: 0;
                left: 25%;
                bottom: 0;
                width: 2px;
                background-color: #c6bbff;

              }
              .timeLine:before{
                content: '';
                display: block;
                position: absolute;
                margin-top: 4px;
                width: 17px;
                height: 17px;
                position: absolute;
                margin-left: -8px;
                border-radius: 10px;
                background-color: #800080;
                opacity: .2;
                z-index: 0;
              }
              .timeLine:after{
                content: '';
                display: block;
                position: absolute;
                margin-top: 7px;
                width: 6px;
                height: 6px;
                margin-left: -5px;
                background-color: #fff;
                border-radius: 5px;
                border: 2.5px solid #800080;
                z-index: 1;
              }
              .school_right{
                width: 75%;
                display: table-cell;
                padding-left: 25px;
                padding-right: 15px;
                .school_company{
                  font-weight: bold;
                  text-shadow:2px 4px 2px #ddd ;
                }
                p{
                  font-size: 0.9rem;
                  color: #666;
                }
              }

            }
            .shool_lastItem{
              padding-bottom: 35px;
            }
    
  }
  .ezen_class>img{
    width:40%;
    float: right;
    opacity: 0.3;
    z-index: -1;
    margin-top: -17%;
  }
}
`

const Education = () => {
  return (
    
  <>
  {/* TimeLine ?????? ?????? */}

    <Education_>
      <div className="edu_container" >

          <Styled.Title>
            <div className="title">
                <h4>I'M STUDING</h4>
                <h2>TimeLine</h2>
            </div>
          </Styled.Title>
          <div className="school">

            <div className="school_">
              <div className="school_left">15.03 ~ 18.02</div>
              <div className="timeLine"></div>
              <div className="school_right">
                <div className="school_company">?????? ????????????</div>
              </div>
            </div>
            <div className="school_">
              <div className="school_left">18.03 ~ 22.08</div>
              <div className="timeLine"></div>
              <div className="school_right">
                <div className="school_company">?????? ????????? ?????????</div>
                <p>???? ??????????????? ?????? (4.01/4.5)</p>
              </div>
            </div>
            <div className="school_">
              <div className="school_left">19.09 ~ 20.06</div>
              <div className="timeLine"></div>
              <div className="school_right">
                <div className="school_company">????????? ?????? ?????????</div>
                <p>???? ????????? ???????????? ??????????????? ??????</p>
              </div>
            </div>
            <div className="school_">
              <div className="school_left">22.01 ~ 22.07</div>
              <div className="timeLine"></div>
              <div className="school_right">
                <div className="school_company">?????? ????????? ????????????</div>
                <p>???? Full stack(?????????)????????? with react &#38; node.js ???????????? ??????</p>
              </div>
            </div>
            <div className="school_">
              <div className="school_left">22. 06. 29</div>
              <div className="timeLine"></div>
              <div className="school_right">
                <div className="school_company">????????????????????????</div>
                <p>???? '?????????????????????' ?????? ??????</p>
              </div>
            </div>
            <div className="school_">
              <div className="school_left">22.08 ~ current</div>
              <div className="timeLine"></div>
              <div className="school_right">
                <div className="school_company">(???)??????????????????????????? x ??????IT?????????????????? x ?????? ????????? ????????????</div>
                <p>???? ????????? ????????????(React Native) ????????? ????????????_????????? ??????</p>
              </div>
            </div>
            <div className="school_ shool_lastItem">
              <div className="school_left">22. 09. 16</div>
              <div className="timeLine"></div>
              <div className="school_right">
                <div className="school_company">????????????????????????</div>
                <p>???? '?????????????????????' ?????? ??????</p>
              </div>
            </div>
            
          </div>
          <div className="ezen_class">
            <img src="images/about_deco.png" alt="??????"
            ></img>

          </div>
      </div>
    </Education_>
  </>
  )
}

export default Education