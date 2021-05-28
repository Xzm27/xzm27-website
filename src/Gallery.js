import React, { useState } from "react";
import "./Gallery.css";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import heroimg from "./gallery-pics/IMG_20191220_011735.jpg";
import im1 from "./gallery-pics/IMG_20191229_190008_879.jpg";
import im2 from "./gallery-pics/IMG_20200126_181426_190.jpg";
import im3 from "./gallery-pics/IMG_20200309_152419_118.jpg";
import im4 from "./gallery-pics/IMG_20200724_174318_786.jpg";
import im5 from "./gallery-pics/IMG_20200617_144216_150.jpg";
import im6 from "./gallery-pics/IMG_20200130_171937_655.jpg";
import im7 from "./gallery-pics/IMG_20200310_175448_537.jpg";
import im8 from "./gallery-pics/IMG_20200118_115008_064.jpg";
import im9 from "./gallery-pics/IMG_20200104_153851_858.jpg";

import AOS from "aos";

AOS.init({
  duration: 2000,
  once: true,
});

function Gallery() {
  let images = [
    {
      url: `${im1}`,
    },
    {
      url: `${im2}`,
    },
    {
      url: `${im3}`,
    },
    {
      url: `${im4}`,
    },
    {
      url: `${im5}`,
    },
    {
      url: `${im6}`,
    },
    {
      url: `${im7}`,
    },
    {
      url: `${im8}`,
    },
    {
      url: `${im9}`,
    },
  ];

  const [light, showLight] = useState(false);

  const [eid, idof] = useState(0);

  function lightbox() {
    showLight(true);
  }

  return (
    <div className="gallery">
      {light ? (
        <Lightbox
          images={images}
          onClose={() => showLight(false)}
          startIndex={eid}
          className="mylight"
        />
      ) : null}
      <div data-aos="fade-in">
        <h1 className="gallery__title" id="gallery">
          Gallery
        </h1>
        <div className="gallery__info">
          <img src={heroimg} alt="" id="#heroimg" />
          <h1>
            “The camera is an instrument that teaches people how to see without
            a camera.”
            <br />
            <h5>– Dorothea Lange</h5>
          </h1>
        </div>
        <div className="gallery__oo">
          <div className="gallery__row">
            <div className="gallery__col">
              <img
                src={im1}
                alt=""
                onClick={() => {
                  lightbox();
                  idof(0);
                }}
              />
              <img
                src={im2}
                alt=""
                onClick={() => {
                  lightbox();
                  idof(1);
                }}
              />
              <img
                src={im3}
                alt=""
                className="third"
                onClick={() => {
                  lightbox();
                  idof(2);
                }}
              />
            </div>
          </div>
          <div className="gallery__row">
            <div className="gallery__col">
              <img
                src={im4}
                alt=""
                onClick={() => {
                  lightbox();
                  idof(3);
                }}
              />
              <img
                src={im5}
                alt=""
                onClick={() => {
                  lightbox();
                  idof(4);
                }}
              />
              <img
                src={im6}
                alt=""
                className="third"
                onClick={() => {
                  lightbox();
                  idof(5);
                }}
              />
            </div>
          </div>
          <div className="gallery__row">
            <div className="gallery__col">
              <img
                src={im7}
                alt=""
                onClick={() => {
                  lightbox();
                  idof(6);
                }}
              />
              <img
                src={im8}
                alt=""
                onClick={() => {
                  lightbox();
                  idof(7);
                }}
              />
              <img
                src={im9}
                alt=""
                className="third"
                onClick={() => {
                  lightbox();
                  idof(8);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
