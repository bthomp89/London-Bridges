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

          <div className="header-content">
              <span class="title">Welcome to London Bridges</span>
              <div className="divider"></div>
              <span class="body">Connecting the Western student body to the greater London community by giving students the opportunity to volunteer and fundraise for local charitable organizations in need of greater support.</span>
              <button>Meet the Team</button>
          </div>

          <div class="background">
              <div class="back_main">
                  <div class="back_top">
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

      <div id="upNext">
        <h1 class="upNextHead">UP NEXT</h1>
        <Event></Event>
        <span>Click <a href="http://google.ca/">here</a> to view more of our past and upcoming events!</span>
      </div>

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
        <div class="socials-grid">
          <div className="contact">
            <h1 class="contactHead">Contact</h1>
          </div>
            <div class="links">
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
    </div>
  );
}
export default Home;