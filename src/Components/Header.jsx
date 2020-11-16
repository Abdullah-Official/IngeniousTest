import React from 'react'
import logo from '../logo.png'
import './header.css'
// import {message} from  '../message.svg'
function Header() {
    const message = <svg id="Speech_Bubble_48_" xmlns="http://www.w3.org/2000/svg" width="31.8" height="28" viewBox="0 0 31.8 28">
    <path id="Path_176" data-name="Path 176" d="M21.459,23.806s-9.673,4.62-16.577-2.65S3.728,5.52,3.728,5.52s9.394-7.1,18.164-3.361,8.443,10.074,8.443,10.074.493,7.051-5.673,10.407L25.31,26.5Z" fill="#e7c68e"/>
    <g id="Group_114" data-name="Group 114" transform="translate(0 0)">
      <path id="Path_168" data-name="Path 168" d="M27.171,58.536h2.253l-1.593-1.593a5.392,5.392,0,0,1-1.54-3.189,12.143,12.143,0,0,0,4.759-5.626,11.02,11.02,0,0,0,.319-7.061,13.824,13.824,0,0,0-5.3-7.4,17.308,17.308,0,0,0-10.225-3.135c-4.849,0-8.936,1.393-11.819,4.029A12.093,12.093,0,0,0,1.011,48.417a12.439,12.439,0,0,0,3.024,4.207c2.887,2.646,6.971,4.044,11.812,4.044a21.492,21.492,0,0,0,5.346-.68,8.349,8.349,0,0,0,5.979,2.547ZM15.847,32.4c7.718,0,12.454,4.6,13.723,9.164,1.2,4.311-.569,8.384-4.732,10.9l-.465.281.014.543a7.35,7.35,0,0,0,.743,3.046,6.612,6.612,0,0,1-2.924-2l-.395-.466-.585.175a19.306,19.306,0,0,1-5.381.762c-9.605,0-13.98-5.816-13.98-11.22a10.265,10.265,0,0,1,3.421-7.64c2.533-2.316,6.185-3.54,10.559-3.54Z" transform="translate(0 -30.536)" fill="#e7c68e"/>
      <line id="Line_14" data-name="Line 14" x1="12.444" transform="translate(9.483 10.889)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1.5"/>
      <line id="Line_15" data-name="Line 15" x1="12.444" transform="translate(9.483 16.074)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1.5"/>
    </g>
  </svg>
  const notif = <svg xmlns="http://www.w3.org/2000/svg" width="33.297" height="34.347" viewBox="0 0 33.297 34.347">
  <g id="bell_1_" data-name="bell(1)" transform="translate(-31.951 -25.747) rotate(30)">
    <g id="Group_294" data-name="Group 294" transform="translate(51.493)">
      <g id="Group_293" data-name="Group 293" transform="translate(0)">
        <path id="Path_174" data-name="Path 174" d="M175.208,404.514c0,.008,0,.015,0,.023a3.527,3.527,0,1,0,7.053,0c0-.008,0-.015,0-.023Z" transform="translate(-166.81 -377.324)" fill="#e7c68e"/>
        <path id="Path_175" data-name="Path 175" d="M75.054,22.679l-3.28-4.854V11.77a8.4,8.4,0,0,0-6.718-8.255V1.651a1.639,1.639,0,1,0-3.277,0V3.515a8.4,8.4,0,0,0-6.718,8.255v6.055l-3.28,4.854a1.679,1.679,0,0,0-.095,1.72,1.655,1.655,0,0,0,1.465.889H73.684a1.656,1.656,0,0,0,1.465-.889A1.679,1.679,0,0,0,75.054,22.679Z" transform="translate(-51.493)" fill="#e7c68e"/>
      </g>
    </g>
  </g>
</svg>
const downArrow = <svg xmlns="http://www.w3.org/2000/svg" width="15.88" height="10.175" viewBox="0 0 12.88 7.175">
<g id="down-arrow" transform="translate(0.5 -116.825)">
  <g id="Group_8" data-name="Group 8" transform="translate(0 117.325)">
    <path id="Path_2" data-name="Path 2" d="M11.759,117.4a.257.257,0,0,0-.364,0l-5.478,5.478L.439,117.4a.257.257,0,0,0-.364.364l5.66,5.66a.258.258,0,0,0,.182.075.255.255,0,0,0,.182-.076l5.66-5.66A.257.257,0,0,0,11.759,117.4Z" transform="translate(0 -117.325)" fill="#ad8955" stroke="#fbe18e" stroke-width="1"/>
  </g>
</g>
</svg>


    return (
      <>
        <div className="container-fluid  p-4 pr-2">
          <div className="row Header">
            <div className=" col-md-7 col-sm-5 col-4 ">
              <img src={logo} className='logo' alt="logo" />
            </div>
            <div className="col-md-2 col-sm-1 col-2"></div>
            <div className="col-md-3 col-sm-6 col-5 ">
              <div className="icons my-4">
                <div className="message">{message}</div>
                <div className="notif">{notif}</div>
                <div className="user">
                  <p className=' mt-2'>Basit</p>
                  <span className='mt-3 ml-3'>{downArrow}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header
