import React from 'react';
import styles from './CustomersPage.css';
// import stylesTemplatePage from './TemplatePage.css';
import routes from '../constants/routes.json';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import PdfTemplate from '../components/PdfTemplate/PdfTemplate';

import Pdf from "react-to-pdf";
const ref = React.createRef();

const options = {
    orientation: 'landscape',
    // unit: 'in',
    // format: [1074,760]
    format: [850,570]
};

class TemplatePage extends React.Component {

	render() {
      return (
      	<div>
	      	<div className={styles.backButton} data-tid="backButton">
	          <Link to={routes.IMPORTTABLE}>
	            <i className="fa fa-arrow-left fa-3x" style={{color: "#007bff"}} />
	          </Link>
	        </div>

	       	<div className="row" style={{height: 26}}>
	          <div className="col-md-10">
	            <p className='h2' color='secondary'>Html template for export pdf file</p>
	          </div>

	          <div className="col-md-1 center">
              <Pdf targetRef={ref} filename="qr_code.pdf" options={options}>
                {({ toPdf }) => <Button variant='primary' onClick={toPdf}>Print</Button>}
              </Pdf>
	          </div>
	        </div>
        	       
        	<br/>
        	<div ref={ref} style={{width: 1074, height: 760}}>

          <PdfTemplate userInfo={this.props.match.params}/>

        	</div>

        <style jsx>
        {`
          body {
					color: black !important;
					 background-color: white !important;
					 background-image: none !important;
          }
        `}
        </style>
       	</div>
      )
    }

}

export default TemplatePage;
