// В state этого компонента хранится список дат и дистанций
// Эдесь же собрана вся логика работы со списком дат и дистанций

import React, {useState} from 'react';
import InputBox from './InputBox.js';
import ListBox from './ListBox.js';

export default function WidgetBox(props) {
  const [state, setState] = useState({
    records: [],
  });

  const onAddValue = newRecord =>
    setState(prevState => {
      let recordMod = newRecord
      const record = prevState.records.find(o => o.dateDist === newRecord.dateDist);
      if (record) recordMod = {
        dateDist: recordMod.dateDist,
        dist: Number(recordMod.dist) + Number(record.dist),
      }
      if (recordMod.dist === 0) {
        return {
          ...prevState,
          records: prevState.records.filter(o => o.dateDist !== newRecord.dateDist)
        }
      } else {
        return {
          ...prevState,
          records: [...prevState.records.filter(o => o.dateDist !== newRecord.dateDist), recordMod].sort(
            (a, b) => (a.dateDist > b.dateDist ? 1 : a.dateDist < b.dateDist ? -1 : 0)
          ),
        }
      }
    });

  const onRemoveValue = newRecord => setState(prevState => ({
    ...prevState,
    records: prevState.records.filter(o => o.dateDist !== newRecord.dateDist)
  }));

  return (
    <div className="widget_box">
      <InputBox onAddValue={onAddValue}/>
      <br/>
      <ListBox records={state.records} onRemoveValue={onRemoveValue}/>
    </div>
  );
}
