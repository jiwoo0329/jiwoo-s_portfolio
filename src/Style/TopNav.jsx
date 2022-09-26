import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import * as Styled from "./Style";
import styled, {keyframes} from "styled-components";

const TopNav = () => {


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

    

  return (
  <>
    <Styled.TopBar>
        
        <div className="topNav_">
            <img src="images/topNav.png" alt="topNav"></img>

            <div className='topNav_in'>
                <Link to="/bignav">
                    <button title='홈으로 이동' className='goHome'><i class="fa-solid fa-house"></i> Home</button>
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

</>
  )
}

export default TopNav