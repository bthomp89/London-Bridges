import "./Home.css";
import Event from "../Event/Event";
import phss from "../images/phss.png";
import invinchild from "../images/invinchild.png";
import ymca from "../images/ymca.png";
import insta from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import mail from "../images/email.svg";
import facebook from "../images/facebook.svg";

function Home() {
  return (
    <div className="container">

      <div className="header">

          <div className="header-content">
              <span className="title">Welcome to London Bridges</span>
              <div className="divider"></div>
              <span className="body">Connecting the Western student body to the greater London community by giving students the opportunity to volunteer and fundraise for local charitable organizations in need of greater support.</span>
              <button>Meet the Team</button>
          </div>

          <div className="background">
              <div className="back_main">
                  <div className="back_top">
                      <div className="back_top_1"></div>
                      <div className="back_top_2"></div>
                  </div>
                  <div className="back_bottom">
                      <div className="back_bottom_1"></div>
                      <div className="back_bottom_2"></div>
                  </div>
              </div>
              <div className="random_shapes">
                  <div className="box"></div>
                  <div className="circle"></div>
                  <div className="dot"></div>
                  <div className="triangle"></div>
              </div>
              <div className="hands"></div>
          </div>

      </div>

      <div className="ourPartners">

        <div className="partners">
            <div className="divider"></div>
            <h1 className="partnersHeader">Our Partners</h1>
        </div>

        <div className="wrap-grid">
            <a href="https://www.phsscommunity.com">
                <img src={phss} alt="Participation House Support Services" />
            </a>
            <a href="https://www.ymcaswo.ca/#no-back">
                <img src={ymca} alt="YMCA of Western Ontario" />
            </a>
            <a href="https://investinginchildren.on.ca">
                <img src={invinchild} alt="Investing in Children" />
            </a>
        </div>

      </div>

        <div id="getInvolved">
            <h1 className="title">Get <b>Involved</b></h1>
            <div className="events">
                <Event></Event>
                <Event></Event>
                <Event></Event>
            </div>
            <span className="tail">Making a positive difference in the London community.</span>
        </div>

      <div className="footer">
        <div className="socials-grid">
            <div className="links">
                <a href="https://www.phsscommunity.com">
                    <img src={insta} alt="Visit our Instagram" />
                </a>
                <a href="https://investinginchildren.on.ca">
                    <img src={mail} alt="Email Us" />
                </a>
                <a href="https://www.ymcaswo.ca/#no-back">
                    <img src={facebook} alt="Visit our Twitter" />
                </a>
                <a href="https://www.ymcaswo.ca/#no-back">
                    <img src={linkedin} alt="See our Linkedin" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
