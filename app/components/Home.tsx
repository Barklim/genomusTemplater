import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.IMPORTTABLE} className={styles.container__links}>1.Import Excel Table</Link>
      <div className={styles.container__links}> ... </div>
      <Link to={routes.COUNTER} className={styles.container__links}>4.Counter</Link>
      <Link to={routes.CUSTOMERS} className={styles.container__links}>5.Customers ExportCSV</Link>
    </div>
  );
}