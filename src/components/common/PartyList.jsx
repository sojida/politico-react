import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Parties from '../../services/parties';

class partySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyList: [],
    };
  }

  componentDidMount = async () => {
    const partyList = await Parties.getAllParties();
    this.setState({ partyList: partyList.data });
  };

  render() {
    const { partyList } = this.state;
    const { changePartyFunc } = this.props;
    const list = partyList.map(party => (
      <option key={party.id} value={party.id}>
        {party.name}
      </option>
    ));
    return (
      <div>
        <select onChange={e => changePartyFunc(e.target.value)}>{list}</select>
      </div>
    );
  }
}

partySelector.propTypes = {
  changePartyFunc: PropTypes.func.isRequired,
};

export default partySelector;
