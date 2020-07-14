import React from 'react';
import styles from './CustomersPage.css';
// import stylesTemplatePage from './TemplatePage.css';
import routes from '../constants/routes.json';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import Pdf from "react-to-pdf";
const ref = React.createRef();

class TemplatePage extends React.Component {

  componentDidMount() {

  	  console.log('TEST1')
      console.log(this.props)
      console.log(this.props.match.params)

      // alert('Должно открыться окно для сохранения файла')}
  }

	render() {
      return (
      	<div>
	      	<div className={styles.backButton} data-tid="backButton">
	          <Link to={routes.IMPORTTABLE}>
	            <i className="fa fa-arrow-left fa-3x" style={{color: "#007bff"}} />
	          </Link>
	        </div>

	       	<div className="row">
	          <div className="col-md-10">
	            <div>Будущий темплейт для печати и экспорта pdf файла</div>
	          </div>
	          <div className="col-md-1 center">
              <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <Button variant='primary' onClick={toPdf}>Print</Button>}
              </Pdf>
	          </div>
	        </div>
        	       
        	<br/>
        	<ul ref={ref}>
        		<li>Ваш GenId: {this.props.match.params.genid}</li>
        		<li>ФИО: {this.props.match.params.firstname} &nbsp; {this.props.match.params.lastname}</li>
        		<li></li>
        		<li>Qr-code картинка</li>
        		<li></li>
        	</ul>

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
