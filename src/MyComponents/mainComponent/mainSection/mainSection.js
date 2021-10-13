import LeftSection from "./leftSection/leftSection";
import RightSection from "./rightSection/rightSection";
import "./mainSection.css";
export default function MainSection() {
  return (
    <>
      <div className="container">
        <div className="main__section">
          <LeftSection></LeftSection>
          <RightSection> </RightSection>
        </div>
      </div>
    </>
  );
}
