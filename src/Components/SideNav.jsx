import React from 'react'
import './SideNav.css'
function SideNav() {
  const profile = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.125"
      height="26.318"
      viewBox="0 0 24.125 26.318"
    >
      <g id="user" transform="translate(-6.5 -6.5)">
        <g
          id="Group_421"
          data-name="Group 421"
          transform="translate(11.983 6.5)"
        >
          <path
            id="Path_203"
            data-name="Path 203"
            d="M15.579,19.659A6.462,6.462,0,0,1,9,13.079,6.462,6.462,0,0,1,15.579,6.5a6.462,6.462,0,0,1,6.579,6.579A6.462,6.462,0,0,1,15.579,19.659Zm0-10.966a4.386,4.386,0,1,0,4.386,4.386A4.4,4.4,0,0,0,15.579,8.693Z"
            transform="translate(-9 -6.5)"
            fill="#e7c68e"
          />
        </g>
        <g
          id="Group_422"
          data-name="Group 422"
          transform="translate(6.5 21.852)"
        >
          <path
            id="Path_204"
            data-name="Path 204"
            d="M29.528,24.966a1.036,1.036,0,0,1-1.1-1.1V19.483a3.373,3.373,0,0,0-3.29-3.29H11.983a3.373,3.373,0,0,0-3.29,3.29v4.386a1.036,1.036,0,0,1-1.1,1.1,1.036,1.036,0,0,1-1.1-1.1V19.483A5.43,5.43,0,0,1,11.983,14H25.142a5.43,5.43,0,0,1,5.483,5.483v4.386A1.036,1.036,0,0,1,29.528,24.966Z"
            transform="translate(-6.5 -14)"
            fill="#e7c68e"
          />
        </g>
      </g>
    </svg>
  );
  const posting = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      viewBox="0 0 27 27"
    >
      <g id="posting" transform="translate(0 0)" opacity="0.6">
        <g id="Group_423" data-name="Group 423" transform="translate(0 0)">
          <path
            id="Path_205"
            data-name="Path 205"
            d="M27,13.5a.791.791,0,0,0-.376-.672L23.88,11.135l2.747-1.71a.791.791,0,0,0,0-1.342L13.92.121a.791.791,0,0,0-.84,0L.371,8.084a.791.791,0,0,0,0,1.342l2.728,1.7L.372,12.829a.791.791,0,0,0,0,1.342L3.1,15.87.372,17.575a.791.791,0,0,0,0,1.341L13.08,26.879a.791.791,0,0,0,.84,0l12.709-7.963a.791.791,0,0,0,0-1.344L23.88,15.881l2.747-1.71A.791.791,0,0,0,27,13.5ZM2.284,8.752,13.5,1.725,24.716,8.752,13.5,15.732Zm22.426,9.5L13.5,25.276,2.282,18.247,4.6,16.8l8.485,5.281a.791.791,0,0,0,.836,0l8.462-5.267ZM13.5,20.478,2.286,13.5,4.6,12.054l8.485,5.281a.791.791,0,0,0,.836,0l8.462-5.267L24.707,13.5Z"
            transform="translate(0 0)"
            fill="#e7c68e"
          />
        </g>
      </g>
    </svg>
  );
  const heartGold = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.318"
      height="30.5"
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
  const buy = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.308"
      height="23.467"
      viewBox="0 0 27.308 23.467"
    >
      <g id="buy" transform="translate(0 -36.002)">
        <path
          id="Path_547"
          data-name="Path 547"
          d="M26.88,39.7a1.912,1.912,0,0,0-1.494-.713H4.573l-.186-1.332A1.928,1.928,0,0,0,2.485,36H.853a.853.853,0,0,0,0,1.707H2.485a.214.214,0,0,1,.211.184L5,54.4a1.928,1.928,0,0,0,1.9,1.655h.925a2.56,2.56,0,1,0,4.827,0h4.56a2.56,2.56,0,1,0,4.827,0h1.854a.853.853,0,1,0,0-1.707H6.9a.214.214,0,0,1-.211-.184l-.212-1.523H23.284a1.931,1.931,0,0,0,1.878-1.518l2.1-9.813A1.911,1.911,0,0,0,26.88,39.7ZM11.094,56.909a.853.853,0,1,1-.853-.853A.854.854,0,0,1,11.094,56.909Zm9.387,0a.853.853,0,1,1-.853-.853A.854.854,0,0,1,20.48,56.909ZM25.6,40.953l-2.1,9.813a.215.215,0,0,1-.209.169H6.24L4.811,40.7H25.387a.213.213,0,0,1,.209.258Z"
          fill="#e7c68e"
        />
      </g>
    </svg>
  );
  const dollar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="24.107"
      viewBox="0 0 13.787 24.107"
    >
      <g id="dollar" transform="translate(-109.589 0)" opacity="0.6">
        <g
          id="Group_424"
          data-name="Group 424"
          transform="translate(109.589 0)"
        >
          <path
            id="Path_209"
            data-name="Path 209"
            d="M117.548,10.547V5.191a7.142,7.142,0,0,1,3.15,1.37,1.127,1.127,0,0,0,.624.2,1.308,1.308,0,0,0,1.309-1.293,1.162,1.162,0,0,0-.335-.822,8.03,8.03,0,0,0-4.763-1.917V.93A.928.928,0,0,0,116.6,0a.227.227,0,0,0-.032,0,.943.943,0,0,0-.957.93V2.664c-3.424.243-5.752,2.359-5.752,5.174,0,3.454,2.937,4.413,5.752,5.174V19.1a7.9,7.9,0,0,1-4.033-1.78,1.267,1.267,0,0,0-.761-.274,1.324,1.324,0,0,0-1.233,1.339,1.162,1.162,0,0,0,.335.822,8.962,8.962,0,0,0,5.707,2.3v1.674c0,.011,0,.021,0,.032a.942.942,0,0,0,.988.9.928.928,0,0,0,.928-.928v-1.7c4.154-.274,5.828-2.8,5.828-5.478C123.376,12.4,120.363,11.308,117.548,10.547Zm-1.917-.487c-1.659-.487-2.952-.989-2.952-2.4s1.172-2.435,2.952-2.572Zm1.917,9.07V13.591c1.72.487,3.059,1.141,3.043,2.739C120.591,17.486,119.8,18.856,117.548,19.13Z"
            transform="translate(-109.589 0)"
            fill="#e7c68e"
          />
        </g>
      </g>
    </svg>
  );
  const logout = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25.042"
      viewBox="0 0 25.042 25.042"
    >
      <g id="logout" opacity="0.6">
        <path
          id="Path_206"
          data-name="Path 206"
          d="M184.493,25.042H173.537a2.872,2.872,0,0,1-2.869-2.869v-4.7a.783.783,0,1,1,1.565,0v4.7a1.306,1.306,0,0,0,1.3,1.3h10.956a1.306,1.306,0,0,0,1.3-1.3V2.869a1.306,1.306,0,0,0-1.3-1.3H173.537a1.306,1.306,0,0,0-1.3,1.3v4.7a.783.783,0,1,1-1.565,0v-4.7A2.872,2.872,0,0,1,173.537,0h10.956a2.872,2.872,0,0,1,2.869,2.869v19.3A2.872,2.872,0,0,1,184.493,25.042Zm0,0"
          transform="translate(-162.321)"
          fill="#e7c68e"
        />
        <path
          id="Path_207"
          data-name="Path 207"
          d="M15.912,241.565H.783a.783.783,0,1,1,0-1.565h15.13a.783.783,0,1,1,0,1.565Zm0,0"
          transform="translate(0 -228.262)"
          fill="#e7c68e"
        />
        <path
          id="Path_208"
          data-name="Path 208"
          d="M224.786,164.543a.783.783,0,0,1-.553-1.337l3.621-3.621-3.621-3.621a.783.783,0,0,1,1.107-1.107l4.174,4.174a.783.783,0,0,1,0,1.107l-4.174,4.174A.777.777,0,0,1,224.786,164.543Zm0,0"
          transform="translate(-213.048 -147.066)"
          fill="#e7c68e"
        />
      </g>
    </svg>
  );

  return (
    <>
      <div className="container mainSide">
        <div className=" row">
          <div className="col-md-10 offsetMob offset-1">
            <button className="bidBtn">Go to Bidding Panel</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-10 offset-1">
            <li className="sideList mb-2">
              {profile}
              <p>My Profile</p>
            </li>
            <li className="sideList mb-2">
              {posting}
              <p>My Posting</p>
            </li>
            <li className="sideList mb-2 drafLike">
              <div className="sideList">
                {posting}
                <p>Drafts</p>
              </div>
              <div className="DLbtn">
                <button>02</button>
              </div>
            </li>
            <li className="sideList mb-2 drafLike">
              <div className="sideList">
                {heartGold}
                <p>My Like's</p>
              </div>
              <div className="DLbtn">
                <button>01</button>
              </div>
            </li>
            <li className="sideList mb-2">
              {buy}
              <p>My Purchase</p>
            </li>
            <li className="sideList mb-2">
              {dollar}
              <p>Billing</p>
            </li>
            <li className="sideList">
              {logout}
              <p>Logout</p>
            </li>
          </div>
        </div>
      </div> <br/>
    </>
  );
}

export default SideNav
