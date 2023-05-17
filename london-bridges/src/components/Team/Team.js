import "./Team.css";
import insta from "../images/instagram.svg";
import mail from "../images/email.svg";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";

export default function Team() {

    const members = [
        { imgName: "JaidynBoyd.jpg", caption: "Jaidyn Boyd", role: "President", year: "Third", program: "Chemistry" },
        { imgName: "SydneyBury.jpg", caption: "Sydney Bury", role: "VP Communications", year: "Fourth", program: "Health Science" },
        { imgName: "ColtonUndseth.jpg", caption: "Colton Undseth", role: "VP Events", year: "Third", program: "Ivey HBA" },
        { imgName: "ShriyaStenger.jpg", caption: "Shriya Stenger", role: "VP Finance", year: "Third", program: "Ivey HBA" },
        { imgName: "NathanKerr.jpg", caption: "Nathan Kerr", role: "Director of External Affairs", year: "Second", program: "Consumer behavior and Psychology" }
    ]

    return (
        <div className="container team">
            <div className="team-header">
                <h1 className="Title">Our Team</h1>
                <div className="divider"></div>
                <h3 className="Meet">Meet the London Bridges Exec Team!</h3>
            </div>
            <div className="teamInfo">
                { members.map( member => <div key={member.role} className="card">
                    <img src={process.env.PUBLIC_URL + "LondonBridgesTeamPhotos/violet-abstract-bg.png"} className="card-img-top"/>
                    <div>
                        <div className="inner">
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + "LondonBridgesTeamPhotos/" + member.imgName}/>
                                <h1 className="caption">{member.caption}</h1>
                                <h3 className="role">{member.role}</h3>
                            </div>
                            <div className="card-footer">
                                <p className="year">Year: {member.year}</p>
                                <p className="program">Program: {member.program}</p>
                            </div>
                        </div>
                    </div>
                </div> )}
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
    )
}


