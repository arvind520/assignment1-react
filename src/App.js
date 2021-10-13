import "./App.css";
import HeaderComponent from "./MyComponents/header/headerComponent";
import MenuAndSliderComponent from "./MyComponents/mainComponent/menuAndSlider/menuAndSliderComponent";
import FooterComponent from "./MyComponents/footer/footerComponent";
import MainSection from "./MyComponents/mainComponent/mainSection/mainSection";
function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <MenuAndSliderComponent></MenuAndSliderComponent>
      <MainSection></MainSection>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
