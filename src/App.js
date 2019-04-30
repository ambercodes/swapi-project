import React, { Component }from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
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
      axios.get('https://swapi.co/api/people/1').then(response => this.setState({ people: [{
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
    return (
      <div className="container"  style={{ marginTop: 50 }}>
        <BootstrapTable
        keyField= 'id'
        data={ this.state.people }
        columns={ this.state.columns }
        />
      </div>
    );
  }
}

export default App;
