import { Link } from "react-router-dom";
import Menu from "./Menu";
import  BannerImage  from "../assets/banneryeni.jpg";
import '../styles/Home.css'
function Home() {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <Link to={Menu}>
          <button className="">Sipariş Ver</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
