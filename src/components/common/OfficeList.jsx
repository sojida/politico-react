import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class OfficeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { changeOfficeFunc, offices } = this.props;
    const { officeList } = offices;
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
  offices: PropTypes.shape().isRequired,
};

const mapStateToProps = ({ offices }) => ({ offices });

export default connect(
  mapStateToProps,
  {}
)(OfficeSelector);
