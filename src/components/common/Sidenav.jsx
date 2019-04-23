import React, { Component } from 'react';
import Navigation from './Navigation';
import SidebarButton from './SidebarButton';
import '../../assets/stylesheets/sidenav.css';

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'vote-section',
    };
  }

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  render() {
    const { currentTab } = this.state;
    return (
      <div className="userTab">
        <div className="tab">
          <SidebarButton
            value="Vote"
            className="tablinks"
            iconClass="fas fa-vote-yea"
            onClick={() => this.changeTab('vote-section')}
          />
          <SidebarButton
            value="Party"
            className="tablinks"
            iconClass="fas fa-republican"
            onClick={() => this.changeTab('party-section')}
          />
          <SidebarButton
            value="Politician"
            className="tablinks"
            iconClass="fas fa-hands-helping"
            onClick={() => this.changeTab('politician-section')}
          />
          <SidebarButton
            value="Results"
            className="tablinks"
            iconClass="fas fa-bars"
            onClick={() => this.changeTab('result-section')}
          />
          <SidebarButton
            value="My Profile"
            className="tablinks"
            iconClass="fas fa-user"
            onClick={() => this.changeTab('profile-section')}
          />
        </div>
        <Navigation currentTab={currentTab} />
      </div>
    );
  }
}

export default Sidenav;
