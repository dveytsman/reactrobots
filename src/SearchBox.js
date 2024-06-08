import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ setSearchField }) => {
  return (
    <div className="pa3 ma2 search-box">
      <input
        className="pa2"
        onChange={(e) => {
          setSearchField(e.target.value);
        }}
        type="search"
        placeholder="Search..."
      />
    </div>
  );
};

SearchBox.propTypes = {
  setSearchField: PropTypes.func.isRequired,
};

export default SearchBox;
