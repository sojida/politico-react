import React, { Component } from 'react';
import uniqid from 'uniqid';
import OfficeList from './OfficeList';
import offices from '../../services/offices';

class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOffice: 1,
      officeResult: [],
    };
  }

  componentDidMount = async () => {
    const { selectedOffice } = this.state;
    const officesData = await offices.getOfficeResultById(selectedOffice);
    this.setState({ officeResult: officesData.data });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { selectedOffice } = this.state;
    if (prevState.selectedOffice !== selectedOffice) {
      const officesData = await offices.getOfficeResultById(selectedOffice);
      this.setState({ officeResult: officesData.data });
    }
  };

  changeOffice = officeid => {
    this.setState({ selectedOffice: officeid });
  };

  render() {
    const { officeResult } = this.state;
    const noResult = (
      <div className="center">
        <h2>No results in this office</h2>
      </div>
    );

    const resultList = officeResult.map((info, index) => (
      <tr key={uniqid()}>
        <td>{index + 1}</td>
        <td>
          {info.firstname}
          &nbsp;
          {info.lastname}
        </td>
        <td>{info.partyname}</td>
        <td>{info.results}</td>
      </tr>
    ));

    return (
      <div>
        <div className="center">
          <h2>Select the office you want to see results</h2>
          <OfficeList changeOfficeFunc={this.changeOffice} />
          {resultList.length ? (
            <table className="result-table">
              <tbody>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Party</th>
                  <th>Votes</th>
                </tr>
                {resultList}
              </tbody>
            </table>
          ) : (
            noResult
          )}
        </div>
      </div>
    );
  }
}

export default ResultPage;
