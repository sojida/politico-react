import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class partySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { changePartyFunc, parties } = this.props;
    const { partyList } = parties;
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
  parties: PropTypes.shape().isRequired,
};

const mapStateToProps = ({ parties }) => ({ parties });

export default connect(
  mapStateToProps,
  {}
)(partySelector);
