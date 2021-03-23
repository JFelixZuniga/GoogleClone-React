import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { GoogleInput } from "./GoogleInput";
import { GoogleButton } from "./GoogleButton";
import "./Search.css";

const Search = () => {
  return (
    <form action="" className="search">
      <GoogleInput>
        <SearchIcon className="search__inputIcon" />
        <input type="text" />
        <MicIcon />
      </GoogleInput>
      <div className="search__butttons">
        <GoogleButton>Buscar con Google</GoogleButton>
        <GoogleButton>Me siento con suerte</GoogleButton>
      </div>
    </form>
  );
};

export default Search;
