import React, { Component } from 'react';
import axios from 'axios';

import AppLogs from './AppLogs';
import './App.scss';

import FormEntry from './components/formEntry';
import ResponseEntry from './components/responseEntry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NbResults: 0,
      response: [],
      name: '',
      state: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  handleStateChange(e) {
    this.setState({ state: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault();

    axios
      .get(' https://api.schooldigger.com/v1/schools', {params: {
        q: this.state.name,
        st: this.state.state,
        appId: AppLogs.id,
        appKey: AppLogs.key,
      }})
      .then(response => {
        this.setState({
          NbResults: response.data.numberOfSchools,
          response: response.data.schoolList,
        });
      })
      .catch(error => {
        this.setState({
          NbResults: -1,
          response: []
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Schooldigger API</h1>
        <form>
          <FormEntry
            label="Etat dans lequel chercher des écoles?"
            name="state"
            id="state"
            value={this.state.state}
            onChange={this.handleStateChange}
            placeholder="En 2 lettres. eg: 'CA'"
          />
          <FormEntry
            label="Le nom d'une école ou d'une ville?"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder="Facultatif"
          />
            <input type="submit" value="Chercher" onClick={this.handleSubmit} />
        </form>
        {
          this.state.NbResults > 0 &&
          <p>{`Votre recherche a donné ${this.state.NbResults} résultats`}</p>
        }
        {
          this.state.response.map((item, index) => 
            <ResponseEntry 
              key={index}
              schoolName={item.schoolName}
              studentsNb={item.schoolYearlyDetails[0].numberOfStudents}
              address={`${item.address.street}, ${item.address.city}, ${item.address.stateFull}`}
              latLong={item.address.latLong}
              />
          )
        }
      </div>
    );
  }
}

export default App;
