import React from 'react';
import PropTypes from "prop-types";
import RecordRow from "./RecordRow.js";
import {nanoid} from 'nanoid';

export default function ListBox(props) {
  const {records, onEditValue, onRemoveValue} = props;
  return (
    <>
      <div className="columns_block">
        <div>Дата</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </div>
      <div className="square_block">
        {records.map(record =>
          <RecordRow dateDist={record.dateDist} dist={record.dist} key={nanoid()} onEditValue={onEditValue}
                     onRemoveValue={onRemoveValue}/>
        )}
      </div>
    </>
  );
}

ListBox.propTypes = {
  records: PropTypes.array.isRequired,
  onRemoveValue: PropTypes.func.isRequired,
};
