import React from "react";
import { Button, Input } from "reactstrap";
import PropTypes from "prop-types";
const SearchPanel = ({ term, handelChange, toggleForm }) => {
  return (
    <div className="d-flex">
      <Input
        placeholder="enter search term"
        className="mr-4"
        value={term}
        onChange={(e) => handelChange(e.target.value)}
      />
      <Button onClick={toggleForm} color="success">
        New
      </Button>
    </div>
  );
};
SearchPanel.propTypes = {
  term: PropTypes.string.isRequired,
  handelChange: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};
export default SearchPanel;
