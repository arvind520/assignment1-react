import "./priceBox.css";
export default function PriceBox() {
  return (
    <>
      <div className="prices__box">
        <h3>PRICES</h3>
        <div className="price__rangeLabel">
          <label htmlFor="min__price">Min</label>
          <label htmlFor="max__price">Max</label>
        </div>
        <div className="price__rangeInput">
          <input type="number" id="min__price" placeholder="$499" />
          <span>-</span>
          <input type="number" id="max__price" placeholder="$499" />
        </div>
      </div>
    </>
  );
}
