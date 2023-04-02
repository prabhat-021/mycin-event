import "./front.css";
import image from "../../assets/AboutKietImages/kiet-logo.png";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="frontcontainer">
      <section className="top-marquee">
        {/* header part with marquee */}
        <marquee behaviour="scroll" scrollamount="4" direction="horizontal">
          &gt;&gt; REGISTRATION IS ON GOING &lt;&lt;
        </marquee>
      </section>
      <section className="mid-body">
        <div className="logo-div">
          <div className="logo-inner">
            <img src={image} alt="KIET Logo" className="kiet-logo" />
            <div>
              <div className="logo-name">KIET</div>
              <div className="logo-dtls">GROUP OF INSTITUTIONS</div>
            </div>
          </div>
          <div className="presents">PRESENTS</div>
        </div>
        <div className="event-title-div">
          <div className="event-title">MycinHacks-2k23</div>
        </div>
        <div className="event-status">Event Status</div>
      </section>
      <section className="login-div">
        <Link to="/login" className="login-btn">
          LOGIN
        </Link>
      </section>
    </div>
  );
}

export default Home;
