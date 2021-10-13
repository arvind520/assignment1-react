import "./menuAndSliderComponent.css";
import Menu from "./menu/menu.js";
import Slider from "./slider/slider.js";

export default function MenuAndSliderComponent() {
  return (
    <>
      <div className="path">
        <div className="container">
          <h4>
            <span style={{ color: "deepskyblue" }}>Home</span> /
            <span>Accessories</span>
          </h4>
        </div>
      </div>
      <div className="main__slider">
        <div className="container">
          <div className="row__slider">
            <Menu></Menu>
            <Slider></Slider>
          </div>
        </div>
      </div>
    </>
  );
}
