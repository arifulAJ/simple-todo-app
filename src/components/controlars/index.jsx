import React from "react";
import PropTypes from "prop-types";
import SearchPanel from "./search-panel";
import { Col, Row } from "reactstrap";
import FilterController from "./filter-controller";
import ControlViews from "./controlView";
import BulkControl from "./bulk-control";

const Controllers = ({
  term,
  handelChange,
  toggleForm,
  handelFilter,
  changeView,
  view,
  clearSelected,
  clearComplete,
  reset,
}) => {
  return (
    <div>
      <SearchPanel
        term={term}
        handelChange={handelChange}
        toggleForm={toggleForm}
      />
      <Row className="my-4">
        <Col md={{ size: 4 }}>
          <FilterController handelFilter={handelFilter} />
        </Col>
        <Col md={{ size: 4 }}>
          <ControlViews view={view} changeView={changeView} />
        </Col>
        <Col md={{ size: 4 }}>
          <BulkControl
            clearComplete={clearComplete}
            clearSelected={clearSelected}
            reset={reset}
          />
        </Col>
      </Row>
    </div>
  );
};
Controllers.propsTypes = {
  term: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  handelChange: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handelFilter: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  clearComplete: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Controllers;
