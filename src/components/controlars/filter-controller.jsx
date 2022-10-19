import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const FilterController = ({ handelFilter }) => (
  <ButtonGroup>
    <Button onClick={() => handelFilter("all")}>All</Button>
    <Button onClick={() => handelFilter("running")}>Running</Button>
    <Button onClick={() => handelFilter("complete")}>Complete</Button>
  </ButtonGroup>
);
FilterController.propTypes = {
  handelFilter: PropTypes.func.isRequired,
};
export default FilterController;
