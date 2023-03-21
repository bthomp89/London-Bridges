import "./Event.css";

let onLoad = () => {
    const backgroundDiv = document.getElementById('background');
    const backgroundImg = document.getElementById('background-img');

    backgroundDiv.style.backgroundImage = `url(${backgroundImg.src})`;
    console.log(backgroundImg);
}

function Event() {
  return (
    <div id="background" class="flex">
      <img src="image 7.png" id="background-img" onLoad={onLoad}></img>
      <div id="event">
        <p class="event-title">Event name</p>
        <p>Date</p>
        <p>Cost:</p>
        <p>About the event:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default Event;
