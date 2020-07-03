import React, { useState } from "react";
import * as S from "./styled";

export default function ScrollTop() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 100) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 100) {
        setShowScroll(false);
      }
    };
  
    const scrollTopClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    window.addEventListener("scroll", checkScrollTop);
    return (
        <S.scrollTop style={{ display: showScroll ? "flex" : "none" }} >
            <S.scrollTopIcone
            onClick={() => scrollTopClick()}/>
        </S.scrollTop>
    );


}