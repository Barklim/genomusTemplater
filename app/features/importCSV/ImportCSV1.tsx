import React from 'react'
import Button from 'react-bootstrap/Button';
import * as XLSX from 'xlsx';

// export const ImportCSV = ({csvData}) => {
class ImportCSV extends React.Component {

    // const importToCSV = (csvData) => {
    importToCSV = () => {

    const remote = require('electron').remote;

    var remotePromise = remote.dialog.showOpenDialog({
        properties: ['openFile']

      }).then(result => {

        if(!result.canceled) {

          var workbook = XLSX.readFile(result.filePaths[0]);

          // const ws = XLSX.utils.sheet_to_json(workbook.Sheets.data, {header:1, raw:false});
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets.data);

          // console.log(ws)
          var test = localStorage.getItem('fileExcelPath');
          // console.log(test)

          localStorage.setItem('fileExcelPath', result.filePaths[0]);

          return ws

        } else {

          return false

        }

      }).catch(err => {
        console.log(err)

        return err
      })

      return remotePromise
    }

    render() {
      return (
        <Button variant="warning" onClick={(e) => this.props.updateData(this.importToCSV())}>Import</Button>
      )
    }
}

export default ImportCSV;