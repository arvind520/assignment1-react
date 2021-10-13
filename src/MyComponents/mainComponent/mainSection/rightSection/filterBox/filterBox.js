import "./filterBox.css";
import { itemsData } from "../items/itemsData.js";
export default function FilterBox(props) {
  const { showValue, setShowValue, sortValue, setSortValue } = props;
  function sortHandler(event) {
    setSortValue(event.target.value);
  }
  function showHandler(event) {
    setShowValue(event.target.value);
  }

  return (
    <>
      <div className="filter__box">
        <div className="no_of_items">
          <span id="countItem">{itemsData.length}</span>
          <span>Items</span>
        </div>
        {/* Sort */}
        <div className="sort_by">
          <label htmlFor="short">Sort By</label>
          <select value={sortValue} onChange={sortHandler}>
            <option value="name">Name</option>
            <option value="size">Size</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        {/* Show  */}
        <div className="show">
          <label htmlFor="showNo">Show</label>
          <select value={showValue} onChange={showHandler}>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="15">15</option>
          </select>
        </div>
        <div className="view__filter" selected>
          <i className="fas fa-th"></i>
        </div>
        <div className="hamBurger">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </>
  );
}
