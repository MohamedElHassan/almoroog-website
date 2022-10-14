import React from "react";
import HeroSlider, { Slide, Overlay } from "hero-slider";
import { AppWrapper } from "../../wrapper";
import images from "../../images";
import { Link } from "react-router-dom";
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
          autoplayDuration: 3000,
          autoplayDebounce: 0,
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
            <h1> نُعطي للأشياء قيمة حقيقية.</h1>
            <p>
              نشحن أشياء لا تعقل، لكنها تتذكر قصة أصحابها جيدًا، قصة العناء،
              الشقاء، الغربة، لذلك نُعطي لأشيائك قيمة حقيقية عن طريق الأعتناء
              بها لأقصى درجة، لتصل لأحبائك كما تحب أن يراوها.
            </p>
            <div className="contact-btns">
              <a href="tel:+971582881365">إتصل بنا</a>
            </div>
          </div>
        </Overlay>
        <Slide
          background={{
            backgroundImage: images.movingHouse,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: images.movingHouse2,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: images.horizontal8,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: images.movingHouse4,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: images.horizontal9,
            backgroundAttachment: "fixed",
          }}
        />
      </HeroSlider>
    </div>
  );
};

export default AppWrapper(Header);
