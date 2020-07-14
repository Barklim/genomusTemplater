import React from 'react'
// import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import styles from './Customers.css';
import { Link } from 'react-router-dom';

export const Customers = ({customers}) => {
// export default function Customers(customers) {

    const CustomerRow = (customer,index) => {

      // console.log('TEST')
      // console.log(customer)
      // console.log(index)1

        return(
              <tr key = {index} className={styles.tableCustomers} >
                  <td> {index + 1} </td>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                  <td>{customer.genId}</td>
                  <td>
                    <Link to={
                          `/user/${index}&${customer.firstName}&${customer.lastName}&${customer.email}&${customer.address}&${customer.genId}`}>
                          <button className={styles.printBtn}>View</button>
                    </Link>
                    <button className={styles.printBtn} onClick={(e) => alert('Должно открыться окно для сохранения файла')}>Print</button>
                  </td>
              </tr>
          )
      }
      // <td><Button class="btn btn-outline-primary btn-sm">Import</Button></td>
      // <td><Button className="btn btn-outline-primary btn-sm">Import</Button></td>
      //  <td><button className={styles.printBtn}>Print</button></td>

      const CustomerTable = customers.map((cust,index) => CustomerRow(cust,index))

      const tableHeader = <thead className={styles.theadCustomers}>
                            <tr>
                                <th>#</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Adress</th>
                                <th>GenId</th>
                                <th>Print</th>
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