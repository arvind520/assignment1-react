import "./items.css";
import { itemsData } from "./itemsData.js";
export default function Items(props) {
  let itemsToBeDisplay = [];
  for (let i = 0; i < props.showValue; i++) {
    itemsToBeDisplay.push(itemsData[i]);
  }
  return (
    <>
      <div className="items__section">
        {itemsToBeDisplay.map(function (item, i) {
          return (
            <div className="container" key={"itemId" + i}>
              <img className="productImg" src={item.imgSrc} alt="" />
              <div className="item__name">{item.productName}</div>
              <img src={item.ratingImg} alt="" />
              <div className="price__value">
                <span className="offerPrice">${item.offerPrice}</span>
                <span className="realPrice">${item.mrp}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
