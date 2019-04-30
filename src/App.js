import React, { Component }from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: 1,
          name: '',
          birth_year: '',
          gender: '',
          mass: '',
          height: ''
        }],
      columns: [
          {
          dataField: 'id',
          text: 'ID'
        },
        {
          dataField: 'name',
          text: 'Name'
        },
        {
          dataField: 'birth_year',
          text: 'Birth Year'
        },
        {
          dataField: 'gender',
          text: 'Gender'
        },
        {
          dataField: 'mass',
          text: 'Mass'
        },
        {
          dataField: 'height',
          text: 'Height'
        }],
      isLoading: true,
      errors: null
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://swapi.co/api/people/1').then(response => console.log(response))
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
      <div className= "container"  >
        <BootstrapTable
         data= { this.state.people }
         columns= { this.state.columns }
         keyField= 'id' />
      </div>
    );
  }
}

export default App;
