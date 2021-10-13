import "./menu.css";

export default function Menu() {
  const unique = [1, 2, 3, 4, 5, 6];
  let currentActive = 1;
  function clickChangeActive(event) {
    let element = event.target;
    document
      .querySelector(`[name="${currentActive}"]`)
      .classList.remove("activeItem");
    element.classList.add("activeItem");
    currentActive = Number(element.getAttribute("name"));
  }
  return (
    <>
      <div className="menu">
        <h3>ALL CATEGORIES</h3>
        <h4
          name={unique[0]}
          onClick={clickChangeActive}
          className="activeItem cat__item"
        >
          Accesories
        </h4>
        <h4 name={unique[1]} onClick={clickChangeActive} className="cat__item">
          Cables & Docks
        </h4>
        <h4 name={unique[2]} onClick={clickChangeActive} className="cat__item">
          Cases & Films
        </h4>
        <h4 name={unique[3]} onClick={clickChangeActive} className="cat__item">
          Charging Devices
        </h4>
        <h4 name={unique[4]} onClick={clickChangeActive} className="cat__item">
          Connected Home
        </h4>
        <h4 name={unique[5]} onClick={clickChangeActive} className="cat__item">
          Headphones
        </h4>
      </div>
    </>
  );
}
