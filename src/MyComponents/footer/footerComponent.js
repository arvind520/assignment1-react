import './footerComponent.css';
export default function FooterComponent(){
    let url="#";
    return(<>
    <div className="footer">
      <div className="container">
        <div className="company footer__content">
          <div className="company__heading">
            <img src="assets/img/logoGray.JPG" alt="" />
            <span className="beepHeading">beep</span>
          </div>
          <div className="footer__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever. Since the 1500s, when an unknown printer.
          </div>
        </div>
        <div className="follow__us footer__content">
          <div className="footer__heading">Follow Us</div>
          <div className="footer__text">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </div>
          <div className="follow__logos">
            <a href={url}
              ><img
                className="follow__logo"
                src="assets/img/faceBookLogo.png"
                alt=""
            /></a>
            <a href={url}
              ><img
                className="follow__logo"
                src="assets/img/Twitter-featured.png"
                alt=""
            /></a>
          </div>
        </div>
        <div className="contact__us footer__content">
          <div className="footer__heading">Contact Us</div>
          <div className="footer__text">
            <p>
              My Company, 4578 Mamrmora Road, Glasgow
              <br />
              D04 89GR
              <br />
              Call us now: 0123-456-789
              <br />
              Email: support@whatever.com
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="copywrite__contents">
      <div className="container">
        <div className="copywrite__text">
          &#169; 2021 Ecommerce site by www.beep.com
        </div>
        <div className="cards__imgs">
          <img src="assets/img/visa.png" alt="" />
          <img src="assets/img/masterCard.png" alt="" />
          <img src="assets/img/paypal.png" alt="" />
          <img src="assets/img/masteroCard.png" alt="" />
        </div>
      </div>
    </div>
    </>)
}