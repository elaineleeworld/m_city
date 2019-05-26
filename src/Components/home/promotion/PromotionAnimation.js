import React from "react";
import Zoom from "react-reveal/Zoom";
import Jersey from "../../../Resources/images/jersey.jpg";

const PromotionAnimation = () => {
  return (
    <div className="promotion_animation">
      <Zoom>
        <div className="left">
          <span>Win a</span>
          <span>Jersey</span>
        </div>
      </Zoom>

      <div className="right">
        <Zoom>
          <div style={{ background: `url(${Jersey})` }} />
        </Zoom>
      </div>
    </div>
  );
};

export default PromotionAnimation;
