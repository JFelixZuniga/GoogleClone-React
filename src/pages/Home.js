import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">Sobre Google</Link>
          <Link to="/store">Tienda</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Imágenes</Link>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.cl/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
        />
        <h1>Búsqueda de Google</h1>
      </div>
    </div>
  );
};

export default Home;
