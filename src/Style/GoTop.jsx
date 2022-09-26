import React from 'react'
import styled from "styled-components"

const GoGO = styled.div`
    button{
        color: #fff;
        border-radius: 50%;
        border: 3px solid #800080;
        background-color: #800080;
        width: 70px;
        height: 70px;
        text-align: center;
        vertical-align: middle;
        position: fixed; 
        bottom: 100px;
        right: 70px; 
        z-index: 99;
    }
    button:hover{
        cursor: pointer;
        color: #fff;
        background: linear-gradient(to bottom right,  #800080 ,#afa5da, #ffde59);
        border: 2px solid #800080;
    }
    button>i{
        font-size: 30px;
        color: #fff;
    }
    button:hover>i{
        color: #fff;
    }
    
        
    `
const GoTop = () => {

    const up =()=>{
        window.scrollTo({top:0, behavior:'smooth'});
    }
    
  return (
    <GoGO>
        <button onClick={up}>
            <i class="fa-solid fa-chevron-up"></i>
            <p>Top</p>
        </button>
    </GoGO>
  )
}

export default GoTop