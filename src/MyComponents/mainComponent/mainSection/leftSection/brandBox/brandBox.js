import { useState } from "react";
import "./brandBox.css";

export default function BrandBox() {
  const [selectedBrand, setSelectedBrand] = useState(1);
  return (
    <>
      <div className="brands">
        <div className="brand__heading">BRAND</div>
        <div className="brand__names">
          <div
            className={
              selectedBrand === 1
                ? "brand_item1 brand_item brand__selected"
                : "brand_item1 brand_item"
            }
            onClick={function () {
              setSelectedBrand(1);
            }}
          >
            <span>Apple</span>
            <span>99</span>
          </div>
          <div
            className={
              selectedBrand === 2
                ? "brand_item2 brand_item brand__selected"
                : "brand_item2 brand_item"
            }
            onClick={function () {
              setSelectedBrand(2);
            }}
          >
            <span>Beats</span>
            <span>99</span>
          </div>
          <div
            className={
              selectedBrand === 3
                ? "brand_item3 brand_item brand__selected"
                : "brand_item3 brand_item"
            }
            onClick={function () {
              setSelectedBrand(3);
            }}
          >
            <span>Samsung</span>
            <span>99</span>
          </div>
          <div
            className={
              selectedBrand === 4
                ? "brand_item4 brand_item brand__selected"
                : "brand_item4 brand_item"
            }
            onClick={function () {
              setSelectedBrand(4);
            }}
          >
            <span>Siemens</span>
            <span>99</span>
          </div>
        </div>
      </div>
    </>
  );
}
