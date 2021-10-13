
import './headerComponent.css';
function HeaderComponent(){
    return (
        <nav>
      <div className="container">
        <div className="row">
          <div className="main__icon" style={{"cursor": "pointer"}}>
            <img src="assets/img/logo.JPG" alt="" />
            <span>beep</span>
          </div>

          <div className="nav__item user__nav" style={{"cursor": "pointer"}}>
            <i className="fas fa-user"></i>
            <span className="nav__item--name">My Profile</span>
          </div>

          <div className="nav__item cart__nav" style={{"cursor": "pointer"}}>
            <i className="fas fa-shopping-bag"></i>
            <span className="nav__item--name">0 Items</span>
            <span className="nav__item--price">$0.0</span>
          </div>

          <div className="nav__item" style={{"cursor": "pointer"}}>
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default HeaderComponent;