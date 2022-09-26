import React, { useEffect } from 'react'

const { kakao } = window;

const Location=()=>{

  useEffect(()=>{

    var container = document.getElementById('map');

    var options = {
      center: new kakao.maps.LatLng(37.65157992226731, 126.69328810199637),
      level: 3
    };


    var map = new kakao.maps.Map(container, options);


    var markerPosition  = new kakao.maps.LatLng(37.65157992226731, 126.69328810199637); 
    
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });

  
  setTimeout(function(){ 
    var container = document.getElementById('map');
    container.style.width = "300px"
    container.style.height = "300px"
    map.setLevel(2);  //중심좌표 보이지 않아서 임의로 변경 뒤 보이게 함.
    map.relayout();
    map.setLevel(4);
    map.relayout(); }, 2000);
    marker.setMap(map);
    }, [])

    
    return (
        <div>
        	<div id="map" style={{width:"300px", height:"300px"}}></div> 
        </div>
    )
}

export default Location;
