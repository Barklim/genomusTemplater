import React from 'react'
import Button from 'react-bootstrap/Button';
import * as XLSX from 'xlsx';

export const ImportCSV = ({csvData}) => {

    const importToCSV = (csvData) => {

    const remote = require('electron').remote;

    console.log('TEST')

    remote.dialog.showOpenDialog({
        properties: ['openFile']

      }).then(result => {

        if(!result.canceled) {

          var workbook = XLSX.readFile(result.filePaths[0]);

          // const ws = XLSX.utils.sheet_to_json(workbook.Sheets.data, {header:1, raw:false});
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets.data);

          console.log(ws)
          console.log(csvData)
          var test = localStorage.getItem('fileExcelPath');
          console.log(test)

          localStorage.setItem('fileExcelPath', result.filePaths[0]);
        }

      }).catch(err => {
        console.log(err)
      })

    }

    // <button onClick={() => { this.props.updateData(this.state.name)}}>Запустить бумеранг</button>
    // <Button variant="warning" onClick={(e) => importToCSV(csvData)}>Import</Button>

    return (
      <Button variant="warning" onClick={(e) => importToCSV(csvData)}>Import</Button>
    )
}