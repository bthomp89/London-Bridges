import "./Home.css";
import Event from "../Event/Event";
import phss from "../images/phss.png";
import invinchild from "../images/invinchild.png";
import ymca from "../images/ymca.png";
import twitter from "../images/twitter.png";
import insta from "../images/insta.png";
import mail from "../images/mail.png";

function Home() {
  return (
    <div id="container">
      <div class="header">
        <div class="height80"></div>
        <h1 class="headerMsg">Welcome to London Bridges!</h1>
        <form action="https://google.com">
          <button class="headerBtn" type="submit">
            {" "}
            Get Involved
          </button>
        </form>
      </div>
      <div class="breakLine"></div>
      <div id="upNext">
        <Event></Event>
      </div>
      <div class="breakLine"></div>
      <div class="ourPartners">
        <div className="partners">
          <h1 class="partnersHeader">Our Partners</h1>
        </div>

        <div class="wrap-grid">
          <a href="https://www.phsscommunity.com">
            <img src={phss} alt="Participation House Support Services" />
          </a>
          <a href="https://investinginchildren.on.ca">
            <img src={invinchild} alt="Investing in Children" />
          </a>
          <a href="https://www.ymcaswo.ca/#no-back">
            <img src={ymca} alt="YMCA of Western Ontario" />
          </a>
        </div>
      </div>
      <div class="footer">
        <div class="brPadding"></div>

        <div class="socials-grid">
          <div className="contact">
            <h1 class="contactHead">Contact</h1>
          </div>
          <a href="https://www.phsscommunity.com">
            <img src={insta} alt="Visit our Instagram" />
          </a>
          <a href="https://investinginchildren.on.ca">
            <img src={mail} alt="Email Us" />
          </a>
          <a href="https://www.ymcaswo.ca/#no-back">
            <img src={twitter} alt="Visit our Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
