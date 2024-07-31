/*import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/headphone.svg";

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
      <img src={Headphone} alt="Headphone" height="212px" width="212px" />
      </div>
    </div>
  );
}

export default HeroSection;*/

import React from "react";
import styles from "./HeroSection.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require("../../assets/headphone.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
