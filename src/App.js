import React, { Component } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './components/cards.jsx';
import styles from './App.css';
import Navbar from 'react-bootstrap/Navbar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      columns: [
          {
          dataField: 'name',
          text: 'Name',
          headerStyle: {
            backgroundColor: '#FFD700'
          }
        },
        {
          dataField: 'birth_year',
          text: 'Birth Year',
          headerStyle: {
            backgroundColor: '#FFD700'
          }
        },
        {
          dataField: 'gender',
          text: 'Gender',
          headerStyle: {
            backgroundColor: '#FFD700'
          }
        },
        {
          dataField: 'mass',
          text: 'Mass',
          headerStyle: {
            backgroundColor: '#FFD700'
          }
        },
        {
          dataField: 'height',
          text: 'Height',
          headerStyle: {
            backgroundColor: '#FFD700'
          }
        }],
      isLoading: true,
      errors: null
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
      axios.get('https://swapi.co/api/people/1')
      .then(response => this.setState({ people: [{
      name: response.data.name,
      birth_year: response.data.birth_year,
      gender: response.data.gender,
      mass: response.data.mass,
      height: response.data.height
       }]
      }))
      .catch(error => this.setState({ error, isLoading: false }));
    }

  render() {
    const rowStyle = { backgroundColor: '#e7a11c' };

    const letterStyle = {
      padding: 10,
      margin: 10,
      color: 'black',
      display: "inline-block",
      fontFamily: "Star Jedi",
      src: 'https://www.dafont.com/star-jedi.font',
      fontSize: 40,
      textAlign: "center"
    };
    return (
    <Container fluid>
    <Navbar fixed="top">
      <Navbar.Brand style={letterStyle}>STARWARS CHARACTERS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
      </Navbar.Collapse>
      </Navbar>
      <Row style={{marginTop: 150}}>
        <Col> </Col>
        <Col>{ Cards() }</Col>
        <Col> </Col>
      </Row>
        <div className="container"  style={{ marginTop: 200}}>
          <BootstrapTable
          keyField= 'id'
          data={ this.state.people }
          columns={ this.state.columns }
          rowStyle= { rowStyle }
          />
      </div>
    </Container>
    );
  }
}

export default App;
