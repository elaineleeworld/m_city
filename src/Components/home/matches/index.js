import React from "react";
import { Tag } from "../../ui/misc";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper" style={{ padding: "50px" }}>
      <div className="container" />
      <Tag
        bck="#0e1731"
        size="50px"
        color="#ffffff"
        padding="50px"
        // addStyles={{
        //   color: "red"
        // }}
      >
        MATCHES
      </Tag>
      BLOCK TAG
      <Tag bck="#ffffff" size="22px" color="#031731" link={true} linkto="/the_team">
        See more matches
      </Tag>
    </div>
  );
};

export default MatchesHome;
