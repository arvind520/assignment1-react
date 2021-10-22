import LeftSection from "./leftSection/leftSection";
import RightSection from "./rightSection/rightSection";
import "./mainSection.css";
import { createContext, useState } from "react";

export const leftContext = createContext();

export default function MainSection() {
  const [selectedBrand, setSelectedBrand] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [activeColor, setActiveColor] = useState(1);
  const [noOfFileterItems, setNoOfFilterItems] = useState([]);

  return (
    <>
      <div className="container">
        <div className="main__section">
          <leftContext.Provider
            value={{
              setNoOfFilterItems,
              noOfFileterItems,
              selectedBrand,
              setSelectedBrand,
              activeColor,
              setActiveColor,
              pageNo,
              setPageNo,
            }}
          >
            <LeftSection></LeftSection>
            <RightSection></RightSection>
          </leftContext.Provider>
        </div>
      </div>
    </>
  );
}
