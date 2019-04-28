import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import officeAction from '../../actions/office.actions';
import Loader from './Loader';

class OfficeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const { getAllOffices } = this.props;
    getAllOffices();
  };

  render() {
    const { changeOfficeFunc, offices } = this.props;
    const { officeList, loading } = offices;
    const list = officeList.map(office => (
      <option key={office.id} value={office.id}>
        {office.name}
      </option>
    ));
    return (
      <div>
        {loading && <Loader />}
        <select onChange={e => changeOfficeFunc(e.target.value)}>{list}</select>
      </div>
    );
  }
}

OfficeSelector.propTypes = {
  changeOfficeFunc: PropTypes.func.isRequired,
  getAllOffices: PropTypes.func.isRequired,
  offices: PropTypes.shape().isRequired,
};

const { getAllOffices } = officeAction;

const mapStateToProps = ({ offices }) => ({ offices });

export default connect(
  mapStateToProps,
  { getAllOffices }
)(OfficeSelector);
