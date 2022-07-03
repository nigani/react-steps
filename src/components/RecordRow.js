import React from "react";
import PropTypes from "prop-types";

export default function RecordRow(props) {
  const {dateDist, dist, onRemoveValue} = props;
  return (
    <div className="columns_block">
      <div>{dateDist.substr(8, 4)+'.'+dateDist.substr(5, 2)+'.'+dateDist.substr(0, 4)}</div>
      <div>{dist}</div>
      <div>
         <label className="actions" onClick={() => onRemoveValue({dateDist})}>✘</label>
      </div>
    </div>
  );
}

RecordRow.propTypes = {
  dateDist: PropTypes.string.isRequired,
  dist: PropTypes.number.isRequired,
  onRemoveValue: PropTypes.func.isRequired,
};
