import "./slider.css";
import { useState, useEffect } from "react";
export default function Slider() {
  let url = "#";
  let [current, setCurrent] = useState(0);
  useEffect(() => {
    const slider3 = document.querySelector(".slider3");
    slider3.style.transform = `translateX(-${current}00%)`;
  }, [current]);

  useEffect(() => {
    const id = setInterval(function () {
      setCurrent(function (oldState) {
        return (oldState + 1) % 3;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slider2">
          <div className="slider3">
            <div className="img__box">
              <img src="assets/img/img1.jpg" alt="" />
              <div className="img__content">
                <h1>iPhone 8</h1>
                <p>Performance and design. Taken right to the edge.</p>
                <a href={url}>SHOP NOW</a>
              </div>
            </div>
            <div className="img__box">
              <img src="assets/img/img2.jpg" alt="" />
              <div className="img__content">
                <h1>Samsung Galaxy</h1>
                <p>We create the world.</p>
                <a href={url}>SHOP NOW</a>
              </div>
            </div>
            <div className="img__box">
              <img src="assets/img/img3.jpg" alt="" />
              <div className="img__content">
                <h1>Xiaomi</h1>
                <p>Smart Desh ka Smartphone</p>
                <a href={url}>SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider__navBtn navBtn1"
          onClick={function () {
            setCurrent(0);
          }}
        ></div>
        <div
          className="slider__navBtn navBtn2"
          onClick={function () {
            setCurrent(1);
          }}
        ></div>
        <div
          className="slider__navBtn navBtn3"
          onClick={function () {
            setCurrent(2);
          }}
        ></div>
      </div>
    </>
  );
}
