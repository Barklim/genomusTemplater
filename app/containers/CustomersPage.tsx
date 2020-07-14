import React from 'react';
import { Customers } from '../features/customers/Customers';
import { ExportCSV } from '../features/exportCSV/ExportCSV';

import { Link } from 'react-router-dom';
import styles from './CustomersPage.css';
import routes from '../constants/routes.json';

class CounterPage extends React.Component {

  customers = () => {
    let custs = []
    for (let i = 0; i <= 25; i++) {
      custs.push({firstName: `first${i}`, lastName: `last${i}`,
      email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, genId: `0000${i}`});
    }
    console.log('sdf')
    console.log(custs)
    return custs;
  }

  state = {
    customers: this.customers(),
    fileName: 'Customers'
  }
  
  render() {
    return (
      <div className="CounterPage">
      	<div className={styles.backButton} data-tid="backButton">
	        <Link to={routes.HOME}>
	          <i className="fa fa-arrow-left fa-3x" />
	        </Link>
	      </div>
        <h1 className={styles.counterPage__header}>Export to Excel</h1>
        <div className="row">
          <div className="col-md-10">
              <h2>Users:</h2>
          </div>
          <div className="col-md-1 center">
            <ExportCSV csvData={this.state.customers} fileName={this.state.fileName} />
          </div>
        </div>
        <Customers customers={this.customers()}/>
      </div>
    );
  }
}

export default CounterPage;
