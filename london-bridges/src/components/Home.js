


function Home() {
    return (
      <body>
        <head>
          <link rel="stylesheet" href="Home.css"> </link>
        </head>
        {/*container div for everything */}
        <div id="container">
            
            {/*header div*/}
            <div class="header">
              {/*extra padding for formatting */}
                <div class="height80"></div>
                <h1 class="headerMsg">Welcome to London Bridges!</h1>
                <form action="https://google.com">
                    <button class="headerBtn" type="submit"> Get Involved</button>
                </form>
            </div>

            {/*Div used to create the breaklines*/}
            <div class="breakLine"></div>

            {/*Contains everything within the UpNext section*/}
            <div id="upNext">
                <h1 class="upNextHead">UP NEXT</h1>
                <img class="upNextPhoto" src="stockhoto.jpg" alt="UpNextPhoto"> </img>

                {/*nested div for the purple section*/}
                <div id="eventInfo">
                    <h1 class="eventName">Event Name</h1>
                    <p class="eventDate">Date:</p>
                    <p class="eventCost">Cost:</p>
                    <p class="eventAbout">About the Event:</p>
                    <p class="eventAboutInfo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a class="eventRegLink" href="">Registration Link<br></br></a>
                    <br></br>
                </div>

                {/*text that goes under the purple div*/}
                <p class="clickHereMessage">
                    Click
                    <a class="eventsLink" href="eventsPageLink">here</a>  
                    to view more of our past and upcoming events!
                </p>
            </div>
            <div class="breakLine"></div>

            {/*partners div and associated links and photos*/}
            <div class="ourPartners">
                <div className="partners">
                    <h1 class="partnersHeader">Our Partners</h1>
                  </div>
                  <div class="wrap-grid">
                    <a href="https://www.phsscommunity.com">
                      <img src="1.png" alt="Participation House Support Services" />
                    </a>
                    <a href="https://investinginchildren.on.ca">
                      <img src="2.png" alt="Investing in Children" />
                    </a>
                    <a href="https://www.ymcaswo.ca/#no-back">
                      <img src="3.png" alt="YMCA of Western Ontario" />
                    </a>
                  </div>
            </div>

            {/*footer div with admin, contact, and socials links*/}
            <div class="footer">
                <div class="brPadding"></div>
                
                <div class="socials-grid">
                    <div className="admin">
                      <h1 class="adminHead">Admin </h1>
                    </div>
          
                    <div className="admin"></div>
          
                    <div className="contact">
                      <h1 class="contactHead">Contact</h1>
                    </div>
                    <a href="https://www.phsscommunity.com">
                      <img src="instagram.png" alt="Visit our Instagram" />
                    </a>
                    <a href="https://investinginchildren.on.ca">
                      <img src="mail.png" alt="Email Us" />
                    </a>
                    <a href="https://www.ymcaswo.ca/#no-back">
                      <img src="twitter.png" alt="Visit our Twitter" />
                    </a>
                </div>
            </div>
        </div>
      </body>  
    );
  }
  
  
  export default Home;