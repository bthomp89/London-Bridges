import "./Event.css";
import eventImg from "../images/image 7.png";

let onLoad = (e) => {
  const backgroundImg = e.target;

  backgroundImg.parentNode.style.backgroundImage = `url(${backgroundImg.src})`;
  console.log(backgroundImg.parentNode);
};

function Event() {
  return (
    <div id="background" class="flex">
      <img
        src={eventImg}
        alt="Participation House Support Services"
        onLoad={(e) => {
          onLoad(e);
        }}
      />
      <div id="event">
        <p class="event-title">Event name</p>
        <p>Date</p>
        <p>Cost:</p>
        <p>About the event:</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default Event;
