import React, { Component } from 'react';
import PartyList from './PartyList';
import OfficeList from './OfficeList';
import parties from '../../services/parties';
import offices from '../../services/offices';

class PoliticianPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      party: '',
      office: '',
    };
  }

  render() {
    const { party, office } = this.state;
    return (
      <div>
        <div className="center">
          <h2>Choose the party you want to represent</h2>
          <PartyList />

          <h2>Choose the office you want to run for</h2>
          <OfficeList />
        </div>
      </div>
    );
  }
}

export default PoliticianPage;
