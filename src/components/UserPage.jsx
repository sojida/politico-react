import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import Navigation from './common/Navigation';
import SidebarButton from './common/SidebarButton';
import Header from './common/Header';
import '../assets/stylesheets/sidenav.css';
import Loader from './common/Loader';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'vote-section',
      className: 'active',
    };
  }

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  componentDidMount = async () => {
    const { getAllOffices, getAllParties } = this.props;
    getAllOffices();
    getAllParties();
  };

  render() {
    const { currentTab, className } = this.state;
    const { parties, offices } = this.props;
    const { loading: partyLoading } = parties;
    const { loading: officeLoading } = offices;

    return (
      <div>
        <Header />
        {partyLoading && <Loader />}
        {officeLoading && <Loader />}
        <LoadingBar />
        <div className="userTab">
          <div className="tab">
            <SidebarButton
              value="Vote"
              className={currentTab === 'vote-section' ? className : null}
              iconClass="fas fa-vote-yea"
              onClick={() => this.changeTab('vote-section')}
            />
            <SidebarButton
              value="Party"
              className={currentTab === 'party-section' ? className : null}
              iconClass="fas fa-republican"
              onClick={() => this.changeTab('party-section')}
            />
            <SidebarButton
              value="Politician"
              className={currentTab === 'politician-section' ? className : null}
              iconClass="fas fa-hands-helping"
              onClick={() => this.changeTab('politician-section')}
            />
            <SidebarButton
              value="Results"
              className={currentTab === 'result-section' ? className : null}
              iconClass="fas fa-bars"
              onClick={() => this.changeTab('result-section')}
            />
            <SidebarButton
              value="My Profile"
              className={currentTab === 'profile-section' ? className : null}
              iconClass="fas fa-user"
              onClick={() => this.changeTab('profile-section')}
            />
          </div>
          <Navigation currentTab={currentTab} />
        </div>
      </div>
    );
  }
}

UserPage.propTypes = {
  getAllOffices: PropTypes.func.isRequired,
  getAllParties: PropTypes.func.isRequired,
  offices: PropTypes.shape().isRequired,
  parties: PropTypes.shape().isRequired,
};

export default UserPage;
