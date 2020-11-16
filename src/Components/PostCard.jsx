import { Avatar } from '@material-ui/core';
import React from 'react'
import './PostCard.css'
const PostCard = (props) => {
    const iphone = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwAkEHZdn2OLJBnQrZWUv5-uZfb2fpBMEodg&usqp=CAU'
    const heartGold = (

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40.318"
          height="40.5"
          viewBox="0 0 34.217 30.5"
        >
          <g id="heart" transform="translate(1.25 1.25)">
            <g id="Group_12" data-name="Group 12">
              <path
                id="Path_5"
                data-name="Path 5"
                d="M23.292,30a7.509,7.509,0,0,0-4.69,1.621,10.683,10.683,0,0,0-2.744,3.3,10.682,10.682,0,0,0-2.744-3.3A7.509,7.509,0,0,0,8.425,30C3.622,30,0,33.928,0,39.138c0,5.628,4.519,9.479,11.359,15.308,1.162.99,2.478,2.112,3.847,3.309a.991.991,0,0,0,1.3,0c1.369-1.2,2.685-2.319,3.848-3.31,6.84-5.829,11.358-9.679,11.358-15.308C31.717,33.928,28.095,30,23.292,30Z"
                transform="translate(0 -30)"
                stroke="#e7c68e"
                stroke-width="2.5"
              />
            </g>
          </g>
        </svg>
      );
      const location = <svg id="Location" xmlns="http://www.w3.org/2000/svg" width="14.291" height="19" viewBox="0 0 15.291 27">
      <g id="Group_477" data-name="Group 477" transform="translate(0 0)">
        <path id="Path_509" data-name="Path 509" d="M7.645,0a7.645,7.645,0,0,1,7.645,7.645c0,3.535-4.814,11.327-7.031,15.185a.709.709,0,0,1-1.228,0C4.814,18.973,0,11.181,0,7.645A7.645,7.645,0,0,1,7.645,0Zm0,3.532A4.113,4.113,0,1,1,3.532,7.645,4.112,4.112,0,0,1,7.645,3.532Z" transform="translate(0 0)" fill="#e7c68e" fill-rule="evenodd"/>
        <path id="Path_510" data-name="Path 510" d="M15.262,343.8a.655.655,0,1,1,.282-1.28,8.117,8.117,0,0,1,2.8,1.12c2.328,1.611,1.055,3.614-1.137,4.522a14.768,14.768,0,0,1-9.95,0c-2.192-.908-3.464-2.908-1.14-4.522a8.161,8.161,0,0,1,2.805-1.12.655.655,0,1,1,.282,1.28,6.827,6.827,0,0,0-2.338.92c-1.41.987-.239,1.761.894,2.23a13.519,13.519,0,0,0,8.943,0c1.13-.468,2.308-1.247.893-2.229A6.781,6.781,0,0,0,15.262,343.8Z" transform="translate(-4.589 -322.024)" fill="#e7c68e"/>
      </g>
    </svg>
     
    const share = <svg xmlns="http://www.w3.org/2000/svg" width="27.25" height="29" viewBox="0 0 27.25 29">
    <g id="share_1_" data-name="share(1)" transform="translate(0.5 0.5)">
      <g id="Group_11" data-name="Group 11">
        <path id="Path_4" data-name="Path 4" d="M37.328,18.156a4.918,4.918,0,0,0-3.958,2l-7.726-3.948a4.922,4.922,0,0,0-.16-3.234l8.1-4.865A4.9,4.9,0,1,0,32.739,6.7l-8.117,4.877a4.921,4.921,0,1,0,.3,6.1l7.7,3.937a4.922,4.922,0,1,0,4.7-3.463Zm0-16.516a3.281,3.281,0,1,1-3.281,3.281A3.285,3.285,0,0,1,37.328,1.641ZM20.922,18.1A3.281,3.281,0,1,1,24.2,14.82,3.285,3.285,0,0,1,20.922,18.1Zm16.406,8.258a3.281,3.281,0,1,1,3.281-3.281A3.285,3.285,0,0,1,37.328,26.359Z" transform="translate(-16)" fill="#e7c68e" stroke="#e7c68e" stroke-width="1"/>
      </g>
    </g>
  </svg>
  

    return (
      <>
        <div className="col-md-12 col-lg-6 col-sm-12 col-12">
          <div class="card mainCard mt-4">
            <div class="card-header">
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-10">
                        <img src={props.image} className='img-fluid imgProduct ml-4' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body ">
              <div className="cardBody">
                <div className="contentCard">
                  <p>{props.productName}</p>
                  <h5>{props.price}</h5>
                </div>
                <div className="heartCard mb-4 mt-3">{heartGold}</div>
              </div>
            </div>
            <div class="card-footer">
              <div className="infoContainer">
                <div className="userInfo">
                  <div className="avatar ">
                    <Avatar
                      style={{ width: "50px", height: "50px" }}
                      alt="Remy Sharp"
                      src={props.userImg}
                    />
                  </div>
                  <div className="userName mt-1">
                    <span style={{ fontSize: "17px" }}>{props.userName}</span>{" "}
                    <br />
                    <span style={{ fontSize: "15px" }}>{location} {props.userPlace}</span>
                  </div>
                </div>
                <div className="share pt-2">{share}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default PostCard
