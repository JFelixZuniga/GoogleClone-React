import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { GoogleInput } from "./GoogleInput";
import { GoogleButton } from "./GoogleButton";
import "./Search.css";
import { setTextstring } from "../features/textSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const history = useHistory();
  // Capturamos lo escrito por el usuario en el input, lo despachamos y cambiamos a la página Search
  const dispatch = useDispatch();
  const search = (e) => {
    e.preventDefault();
    dispatch(setTextstring(input));
    history.push("/search");
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
