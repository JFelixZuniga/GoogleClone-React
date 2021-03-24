import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import "./SearchPage.css";
import { selectTextstring } from "../features/textSlice";
import { useSelector } from "react-redux";
import useGoogleSearch from "../useGoogleSearch";

const SearchPage = () => {
  const textString = useSelector(selectTextstring);

  const { data } = useGoogleSearch(textString);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.cl/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google Logo"
          />
        </Link>
        <div className="searchPage__headerCenter">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon fontSize="small" />
                <Link to="/all">Todos</Link>
              </div>
              <div className="searchPage__option">
                <ImageOutlinedIcon fontSize="small" />
                <Link to="/images">Imágenes</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionOutlinedIcon fontSize="small" />
                <Link to="/news">Noticias</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferOutlinedIcon fontSize="small" />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomOutlinedIcon fontSize="small" />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertOutlinedIcon fontSize="small" />
                <Link to="/more">Más</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Preferencias</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Herramientas</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="searchPage__headerRight">
          <AppsIcon fontSize="small" />
          <Avatar className="headerRight__avatar" />
        </div>
      </div>
      {textString && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            Cerca de {data?.searchInformation.formattedTotalResults} resultados
            ({data?.searchInformation.formattedSearchTime} segundos)
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
