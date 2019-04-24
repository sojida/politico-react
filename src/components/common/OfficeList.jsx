import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Parties from '../../services/offices';

class OfficeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officeList: [],
    };
  }

  componentDidMount = async () => {
    const officeList = await Parties.getAllOffices();
    this.setState({ officeList: officeList.data });
  };

  render() {
    const { officeList } = this.state;
    const { changeOfficeFunc } = this.props;
    const list = officeList.map(office => (
      <option key={office.id} value={office.id}>
        {office.name}
      </option>
    ));
    return (
      <div>
        <select onChange={e => changeOfficeFunc(e.target.value)}>{list}</select>
      </div>
    );
  }
}

OfficeSelector.propTypes = {
  changeOfficeFunc: PropTypes.func.isRequired,
};

export default OfficeSelector;
