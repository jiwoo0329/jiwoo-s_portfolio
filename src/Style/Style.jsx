import styled from "styled-components";



// 페이지 최상단에 위치하는 네브바
export const TopBar = styled.div`
    position: absolute;
    width: 100%;
    background-color: transparent;
    z-index: 1;
    .topNav_{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        img{
            position: absolute;
            z-index: -1;
            top: 0;
            width: 100%;
            opacity: 1;
        }

        .topNav_in{
            padding: 0 30px;
            
            width: 100%;
            button{
                background-color: transparent;
                border: none;
                cursor: pointer;
                padding: 10px;
            }

            .goHome{ 
                font-size: 2rem;
                font-weight: bold;
                color:#800080;
                float: left;
                i{
                    color: #800080;
                }
            }
            ul{
                display: flex;
                float: right;
                li{
                    font-size: 2rem;
                    button{
                        font-size: 2rem;
                    }
                    button:hover, .fa-bars:hover{
                        color:#800080;
                        cursor: pointer;
                    }
                }
                .line::after{
                    content: 'l';
                }
                .show-menu{
                    display: block;
                    position: absolute;
                    
                    .dd{
                        position: absolute;
                        width:170px;
                        margin-left: -130px;
                        margin-top: -70px;
                    }
                    li {
                        border-top: 1px solid #afa5da;
                        color: #afa5da;
                        margin-left: -115px;
                        font-size: 1.2rem;
                        
                    }
                    li:hover{
                        color: #800080;
                    }
                }
                .hide-menu{
                    display:none;
                }


            }
    }
    
    
        
    }
`

// 여기는 짜잘하거 css하는 란이야 절대 삭제 노노노노노노

export const Title = styled.div`
    .title{
        margin-top: 5rem;
        margin-bottom: 2rem;
        h4{
            font-size: 1rem;
            color:#fff;
            text-shadow:2px 4px 2px gray ;
        }
        h2{
            font-size: 2rem;
            color: #ffde59;
            text-shadow:2px 4px 2px gray ;
            /* position: relative; 
            display: inline-block; 
            background: linear-gradient(to top, #800080 30%, transparent 30%); */

            button{
                width: 30px;
                height: 30px;
                margin-left: 10px;
                border: none;
                border-radius: 50%;
                background-color: #800080;
                color: #fff;
                font-weight: bold;
                cursor: pointer;
                        .comment{
                            display: none;
                            position: absolute;
                            text-align: left;
                            background-color:#800080;
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
                            border-bottom-color:#800080;
                            left: -30px;
                            bottom: 60px;
                        }
                    }
                    button:hover{
                        color: #fff;
                        background: linear-gradient(to bottom right, #800080, #afa5da, #ffde59);
                        border: 2px solid #800080;
                    }
                    button:hover .comment{
                        display:block;
                    }
        }

    }
`