import { useContext } from "react";
import "./brandBox.css";
import { leftContext } from "../../mainSection";
export default function BrandBox() {
  // const [selectedBrand, setSelectedBrand] = useState(0);
  const myContext = useContext(leftContext);
  return (
    <>
      <div className="brands">
        <div className="brand__heading">BRAND</div>
        <div className="brand__names">
          <div
            className={
              myContext.selectedBrand === 0
                ? "brand_item1 brand_item brand__selected"
                : "brand_item1 brand_item"
            }
            onClick={function () {
              myContext.setSelectedBrand(0);
            }}
          >
            <span>All</span>
            <span>99</span>
          </div>
          <div
            className={
              myContext.selectedBrand === 1
                ? "brand_item1 brand_item brand__selected"
                : "brand_item1 brand_item"
            }
            onClick={function () {
              myContext.setSelectedBrand(1);
            }}
          >
            <span>Apple</span>
            <span>99</span>
          </div>
          <div
            className={
              myContext.selectedBrand === 2
                ? "brand_item2 brand_item brand__selected"
                : "brand_item2 brand_item"
            }
            onClick={function () {
              myContext.setSelectedBrand(2);
            }}
          >
            <span>Beats</span>
            <span>99</span>
          </div>
          <div
            className={
              myContext.selectedBrand === 3
                ? "brand_item3 brand_item brand__selected"
                : "brand_item3 brand_item"
            }
            onClick={function () {
              myContext.setSelectedBrand(3);
            }}
          >
            <span>Samsung</span>
            <span>99</span>
          </div>
          <div
            className={
              myContext.selectedBrand === 4
                ? "brand_item4 brand_item brand__selected"
                : "brand_item4 brand_item"
            }
            onClick={function () {
              myContext.setSelectedBrand(4);
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
