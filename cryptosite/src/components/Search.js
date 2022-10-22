import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/search.css";

const Search = (props) => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const navToCoin = function (e) {
    e.preventDefault();
    props.setSearchTerms(inputRef.current.value);
    navigate(`/coin/${inputRef.current.value}`);
  };
  return (
    <div className="search">
      <div className="search-wrapper">
        <form
          className="search-form"
          name="search"
          onSubmit={(e) => navToCoin(e)}
        >
          <input
            name="search"
            placeholder="Crypto Search..."
            ref={inputRef}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
