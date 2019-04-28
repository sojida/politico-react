import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from 'react-notify-toast';
import { connect } from 'react-redux';
import partyAction from '../../actions/party.actions';
import Loader from './Loader';

class partySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const { getAllParties } = this.props;
    getAllParties();
  };

  render() {
    const { changePartyFunc, parties } = this.props;
    const { partyList, loading } = parties;
    const list = partyList.map(party => (
      <option key={party.id} value={party.id}>
        {party.name}
      </option>
    ));
    return (
      <div>
        {loading && <Loader />}
        <Notifications />
        <select onChange={e => changePartyFunc(e.target.value)}>{list}</select>
      </div>
    );
  }
}

partySelector.propTypes = {
  changePartyFunc: PropTypes.func.isRequired,
  getAllParties: PropTypes.func.isRequired,
  parties: PropTypes.shape().isRequired,
};

const { getAllParties } = partyAction;

const mapStateToProps = ({ parties }) => ({ parties });

export default connect(
  mapStateToProps,
  { getAllParties }
)(partySelector);
