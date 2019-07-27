const getTwoDimesionArrayfromSerialData = (num_rows, num_cols, serieal_array) => {
  let twodimensionArray = [];
  for(let rown=1;rown<=num_rows;rown++)
  {
    let rowArray = [];
    for(let colNUMB = Number(num_cols*(rown-1)); colNUMB<=Number(num_cols*rown)-1 ; colNUMB++  )
    {
      rowArray.push(serieal_array[colNUMB]);
    }
    twodimensionArray.push(rowArray);
  }
  return twodimensionArray;
}

export default getTwoDimesionArrayfromSerialData;
