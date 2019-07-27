import React from 'react';
import Row from './gRow';
import getTwoDimesionArrayfromSerialData from '../help/helper';

const GoogleSheetTable = (props) => {
  const sheetDataInArray = Array.from(props.json_data);
  const lastElement = sheetDataInArray[sheetDataInArray.length-1];
  if(lastElement !== undefined)
  {
    let numberofRows =  lastElement['gs$cell']["row"];
    let numberofCols = lastElement['gs$cell']["col"];
    const googleSheetDataInTwoDArray = getTwoDimesionArrayfromSerialData(numberofRows,numberofCols,sheetDataInArray);
    return(
      <table align="center">
      <tbody>
      {
        googleSheetDataInTwoDArray.map(rowData  => {
          return(<Row rowD={rowData} />)
        })
      }
      </tbody>
      </table>
  )
  }else {
    return(
      <span>Click on above button to retieve the data from google sheet</span>
    )
  }
}

export default GoogleSheetTable;
