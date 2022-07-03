import React, {useState} from 'react';
import PropTypes from "prop-types";

export default function InputBox(props) {
  const {onAddValue} = props;

  const [state, setState] = useState({
    dateDist: new Date().toLocaleString('fr-CA').substr(0, 10),
    dist: 0,
  });

  const handleDateDistChange = (evt) => {
    evt.preventDefault();
    const dateDist = evt.target.value;
    setState((prevForm) => ({...prevForm, dateDist}));
  };

  const handleDistChange = (evt) => {
    evt.preventDefault();
    const dist = evt.target.value;
    setState((prevForm) => ({...prevForm, dist}));
  };

  return (
    <div className="columns_block">
      <label>Дата
        <input type="date" value={state.dateDist} onChange={handleDateDistChange}/>
      </label>
      <label>Пройдено км
        <input type="number" value={state.dist} onChange={handleDistChange}/>
      </label>
      <label><br/>
        <button onClick={() => onAddValue({dateDist: state.dateDist, dist: Number(state.dist)})}>OK</button>
      </label>
    </div>
  );
}

InputBox.propTypes = {
  onAddValue: PropTypes.func.isRequired,
};
