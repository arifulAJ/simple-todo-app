import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const BulkControl = ({ clearSelected, clearComplete, reset }) => (
  <ButtonGroup>
    <Button color="danger" onClick={clearSelected}>
      Clear Selected
    </Button>
    <Button color="danger" onClick={clearComplete}>
      Clear Completed
    </Button>
    <Button color="danger" onClick={reset}>
      Reset
    </Button>
  </ButtonGroup>
);
BulkControl.propTypes = {
  clearSelected: PropTypes.func.isRequired,
  clearComplete: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
export default BulkControl;
