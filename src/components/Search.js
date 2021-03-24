import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { GoogleInput } from "./GoogleInput";
import { GoogleButton } from "./GoogleButton";
import "./Search.css";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    
  };

  return (
    <form action="" className="search">
      <GoogleInput>
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </GoogleInput>
      <div className="search__butttons">
        <GoogleButton
          onClick={search}
          type="submit"
          className={hideButtons ? "search__hideButtons" : ""}
        >
          Buscar con Google
        </GoogleButton>
        <GoogleButton className={hideButtons ? "search__hideButtons" : ""}>
          Me siento con suerte
        </GoogleButton>
      </div>
    </form>
  );
};

export default Search;
