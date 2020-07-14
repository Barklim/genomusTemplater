import React from 'react'
// import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import styles from './Customers.css';

export const Customers = ({customers}) => {
// export default function Customers(customers) {

    const CustomerRow = (customer,index) => {

        return(
              <tr key = {index} className={styles.tableCustomers} >
                  <td> {index + 1} </td>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                  <td>{customer.genId}</td>
              </tr>
          )
      }
      // <td><Button class="btn btn-outline-primary btn-sm">Import</Button></td>
      // <td><Button className="btn btn-outline-primary btn-sm">Import</Button></td>

      const CustomerTable = customers.map((cust,index) => CustomerRow(cust,index))

      const tableHeader = <thead className={styles.theadCustomers}>
                            <tr>
                                <th>#</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Adress</th>
                                <th>GenId</th>
                            </tr>
                        </thead>
    
    return (
        <Table striped bordered hover>
            {tableHeader}
            <tbody className={styles.tbodyCustomers}>
                {CustomerTable}
            </tbody>
        </Table>
    )
}