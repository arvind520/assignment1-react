import "./colorBox.css";
import { useState } from "react";
export default function ColorBox() {
  const [activeColor, setActiveColor] = useState(1);
  function handleBorder(event) {
    setActiveColor(parseInt(event.target.classList[0].charAt(5)));
  }
  return (
    <>
      <div className="color__box">
        <h3>COLOR</h3>
        <div className="colorPicker">
          <div className="color1" onClick={handleBorder}>
            <div
              className={
                activeColor === 1
                  ? "color1-border outer__color"
                  : "outer__color"
              }
            >
              <div className="color1-fill inner__color"></div>
            </div>
          </div>

          <div className="color2" onClick={handleBorder}>
            <div
              className={
                activeColor === 2
                  ? "color2-border outer__color"
                  : "outer__color"
              }
            >
              <div className="color2-fill inner__color"></div>
            </div>
          </div>

          <div className="color3" onClick={handleBorder}>
            <div
              className={
                activeColor === 3
                  ? "color3-border outer__color"
                  : "outer__color"
              }
            >
              <div className="color3-fill inner__color"></div>
            </div>
          </div>

          <div className="color4" onClick={handleBorder}>
            <div
              className={
                activeColor === 4
                  ? "color4-border outer__color"
                  : "outer__color"
              }
            >
              <div className="color4-fill inner__color"></div>
            </div>
          </div>

          <div className="color5" onClick={handleBorder}>
            <div
              className={
                activeColor === 5
                  ? "color5-border outer__color"
                  : "outer__color"
              }
            >
              <div className="color5-fill inner__color"></div>
            </div>
          </div>

          <div className="color6" onClick={handleBorder}>
            <div
              className={
                activeColor === 6
                  ? "color6-border outer__color"
                  : "outer__color"
              }
            >
              <div className="color6-fill inner__color"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
