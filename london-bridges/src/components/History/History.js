import "./History.css";
import Event from "../Event/Event"

function History() {
  return (
    //Main Page Div
  <div className="historyPage">

      <div className="main">
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


    {/* Past Events */}
    <div className="pastEvents">
        <span>PAST EVENTS</span>
        <div class="events">
            <Event></Event>
            <Event></Event>
            <Event></Event>
        </div>
    </div>
  </div>
  );
}

export default History;
