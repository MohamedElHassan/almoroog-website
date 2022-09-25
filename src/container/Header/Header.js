import React from "react";
import HeroSlider, { Slide, Overlay } from "hero-slider";
import { AppWrapper } from "../../wrapper";
import movingHouse from "../../assets/movingHouse.png";
import movingHouse2 from "../../assets/movingHouse2.png";
import movingHouse3 from "../../assets/movingHouse3.png";
import movingHouse4 from "../../assets/movingHouse4.png";
import movingHouse5 from "../../assets/movingHouse5.png";

import "./Header.scss";

const Header = () => {
  return (
    <div>
      <HeroSlider
        // slideAnimation="left_to_right"
        // orientation="horizontal"
        // initialSlide={1}
        // onBeforeChange={(previousSlide, nextSlide) =>
        //   console.log("Yes", previousSlide, nextSlide)
        // }
        // onChange={(nextSlide) => console.log("onChange", nextSlide)}
        // onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        // style={{
        //   backgroundColor: "rgba(0, 0, 0, 0.33)",
        // }}
        // settings={{
        //   slidingDuration: 250,
        //   slidingDelay: 100,
        //   shouldAutoplay: true,
        //   shouldDisplayButtons: true,
        //   autoplayDuration: 5000,
        //   height: "40vh",
        // }}
        height={"100vh"}
        autoplay={{
          autoplayDuration: 2000,
          autoplayDebounce:0,
        }}
        controller={{
          initialSlide: 1,
          slidingDuration: 600,
          // slidingDelay: 200,
          // onSliding: (nextSlide) =>
          //   console.log("onSliding(nextSlide): ", nextSlide),
          // onBeforeSliding: (previousSlide, nextSlide) =>
          //   console.log(
          //     "onBeforeSliding(previousSlide, nextSlide): ",
          //     previousSlide,
          //     nextSlide
          //   ),
          // onAfterSliding: (nextSlide) =>
          //   console.log("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Overlay>
          <div className="overlay-content">
            <h1>شركة المروج للشحن</h1>
            <div className="contact-btn">
              <a href="tel:+971582881365">إتصل بنا الاَن</a>
            </div>
          </div>
        </Overlay>
        <Slide
          background={{
            backgroundImage: movingHouse,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: movingHouse2,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: movingHouse3,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: movingHouse4,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: movingHouse5,
            backgroundAttachment: "fixed",
          }}
        />
      </HeroSlider>
    </div>
  );
};

export default AppWrapper(Header);
