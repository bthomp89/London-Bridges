import "./History.css";

function History() {
  return (
    //Main Page Div
  <div className="historyPage">

  <div className="breakLine"></div>

    {/* Intro Text */}
      <div className="container">
        <div>
        <span style={{ fontSize: "45px", fontFamily: "Playfair Display", color:"#412079", fontWeight:"700" }}>
          OUR GOAL <br></br>
          SINCE xxxx
        </span>
        </div>

      <div>
        <p style={{ fontSize: "25px", fontFamily: "Inter", textAlign:"center" }}>
          To connect the Western student body <br/> to the greater London <br/>community by
          giving students<br/> the opportunity to volunteer and <br/>fundraise for local
          charitable <br/>organizations in need of greater <br/>support.
        </p>
      </div>
    </div>

    <div className="breakLine"></div>


{/* Past Events */}
<div className="pastEvents">

<span style={{ fontSize: "45px", fontFamily: "Sans-serif", color:"#412079", fontWeight:"700", marginLeft:"325px"}}>
          PAST EVENTS
        </span>






</div>

  </div>
  );
}

export default History;
