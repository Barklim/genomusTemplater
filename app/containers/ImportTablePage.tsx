import React from 'react';
import { Customers } from '../features/customers1/Customers';
import ImportCSV from '../features/importCSV/ImportCSV1';

import { Link } from 'react-router-dom';
import styles from './CustomersPage.css';
import routes from '../constants/routes.json';

class ImportTablePage extends React.Component {

  // customers = () => {
  //   let custs = []
  //   for (let i = 0; i <= 25; i++) {
  //     custs.push({firstName: `first${i}`, lastName: `last${i}`, thirdName: `third${i}`,
  //     email: `abc${i}@mail.com`, address: `000${i} street city, ST`, genId: `00000${i}`});
  //   }
  //   return custs;
  // }

  // userFormate

  updateData = (value) => {

     // this.setState({ excelTable: value })

     console.log('value')
     console.log(value)

     value
  .then(
    result => {
      console.log(result); // result - аргумент resolve
      console.log(result[0]); // result - аргумент resolve

      this.setState({ excelTable: result })
    },
    error => {
      // console.log("Rejected: " + error); // error - аргумент reject
    }
  );
  }

  state = {
    // customers: '',
    // excelTable: '',
    // excelTable: [{address: 'testAdress', email: 'testEmail', firstName: 'testFirst', genId: 'testGenId', lastName: 'testLast'},
    // {address: 'testAdress', email: 'testEmail', firstName: 'testFirst', genId: 'testGenId', lastName: 'testLast'}]
    excelTable: [{address: 'testAdress', email: 'testEmail', firstName: 'testFirst', genId: 'testGenId', lastName: 'testLast'}]
  }
  
  render() {

    return (
      <div className="ImportTablePage">
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h1 className={styles.counterPage__header}>Genomus table Excel</h1>
        <div className="row">
          <div className="col-md-10">
              <h2>Users:</h2>
          </div>
          <div className="col-md-1 center">
            <ImportCSV csvData={this.state.excelTable} updateData={this.updateData}/>  
          </div>
        </div>
        <Customers customers={this.state.excelTable}/>
      </div>
    );
  }
}

export default ImportTablePage;

// <Customers customers={this.state.excelTable}/>
