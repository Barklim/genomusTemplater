import React from 'react';
import styles from './CustomersPage.css';
// import stylesTemplatePage from './TemplatePage.css';
import routes from '../constants/routes.json';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import ReactPDF from '@react-pdf/renderer';
import { Test } from '../features/test/Test';

// Create styles
// const styles1 = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

          // <Document>
          //   <Page size="A4" style={styles1.page} wrap>
          //     <View style={styles1.section} wrap>
          //       <Text break>Section #1</Text>
          //     </View>
          //     <View style={styles1.section} fixed>
          //       <Text>Section #2</Text>
          //     </View>
          //   </Page>
          // </Document>

class TemplatePage extends React.Component {

  componentDidMount() {

  	  console.log('TEST1')
      console.log(this.props)
      console.log(this.props.match.params)

      // alert('Должно открыться окно для сохранения файла')}
      //  {ReactPDF.render(<Test />, `./example.pdf`)}
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
	            <Button variant="primary" onClick={(e) => 
                alert('Должно открыться окно для сохранения файла')}
                >Print</Button>
	          </div>
	        </div>
        	       
        	<br/>
        	<ul>
        		<li>Ваш GenId: {this.props.match.params.genid}</li>
        		<li>ФИО: {this.props.match.params.firstname} &nbsp; {this.props.match.params.lastname}</li>
        		<li></li>
        		<li>Qr-code картинка</li>
        		<li></li>
        	</ul>

          <Test />

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

// const Test1 = () => {
//     return (
//       <Document>
//         <Page size="A4" >
//           <View >
//             <Text>Section #1</Text>
//           </View>
//           <View>
//             <Text>Section #2</Text>
//           </View>
//         </Page>
//       </Document>
//     )
// }
// import ReactPDF from '@react-pdf/renderer';
// ReactPDF.render(<Test1 />, `${__dirname}/example.pdf`);

export default TemplatePage;
