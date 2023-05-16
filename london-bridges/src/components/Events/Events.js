import "./Events.css";
import Event from "../Event/Event"

function Events() {
  return (
    //Main Page Div
  <div className="container">

    <div className="pastEvents">
        <span>Upcoming Events</span>

        <div className="events">
            <Event></Event>
            <Event></Event>
            <Event></Event>
        </div>
    </div>
  </div>
  );
}

export default Events;
