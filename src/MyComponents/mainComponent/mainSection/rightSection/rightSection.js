import "./rightSection.css";
import FilterBox from "./filterBox/filterBox";
import Items from "./items/items";
import PageNumber from "./pageNumber/pageNumber";
import { useState } from "react";
export default function RightSection() {
  const [showValue, setShowValue] = useState(12);
  const [sortValue, setSortValue] = useState("name");
  return (
    <>
      <div className="right__section">
        <FilterBox
          showValue={showValue}
          setShowValue={setShowValue}
          sortValue={sortValue}
          setSortValue={setSortValue}
        ></FilterBox>
        <Items showValue={showValue}></Items>
        <PageNumber></PageNumber>
      </div>
    </>
  );
}
