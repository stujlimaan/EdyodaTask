import React from "react";
import { Icon } from "../../images/Icon-1.png";
import {FaBookOpen} from "react-icons/fa"
function MainLockup() {
  return (
    <div className="main-lockup">
      <div className="main">
        <h2>Access curated courses worth ₹ <span style={{textDecoration:"line-through" ,textDecorationColor:"red"}}>18,500 </span>   at just  <span style={{color:"#0096FF"}}> ₹ 99 </span>per year!</h2>
      </div>
      <div className="main-mid">

        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" /> */}
        <FaBookOpen />
        <p className="afterIcon">
          <span style={{color:"#0096FF"}}>100+</span> Job relevant courses
        </p>
      </div>
      <div className="main-mid">
        <img src="../../images/Icon.png" />

        <p className="afterIcon">
          <span style={{color:"#0096FF"}}>20000+</span>Hours of content
        </p>
      </div>
      <div className="main-mid">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />

        <p className="afterIcon">
          <span style={{color:"#0096FF"}}>Excluive</span>webinar access
        </p>
      </div>
      <div className="main-mid">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />

        <p className="afterIcon">Scholarship worth<span style={{color:"#0096FF"}}> ₹94,500</span></p>
      </div>
      <div className="main-mid">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />

        <p className="afterIcon"><span style={{color:"#0096FF"}}>Ad Free</span> learning experience</p>
      </div>
    </div>
  );
}

export default MainLockup;
