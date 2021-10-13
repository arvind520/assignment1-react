import "./leftSection.css";
import ColorBox from "./colorBox/colorBox";
import PriceBox from "./priceBox/priceBox";
import BrandBox from "./brandBox/brandBox";
export default function LeftSection() {
  return (
    <>
      <div className="left__section">
        <PriceBox></PriceBox>
        <ColorBox></ColorBox>
        <BrandBox></BrandBox>

        <div className="moreButton">MORE</div>
      </div>
    </>
  );
}
