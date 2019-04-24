import React, { Component } from 'react';
import Navigation from './Navigation';
import SidebarButton from './SidebarButton';
import '../../assets/stylesheets/sidenav.css';

class Sidenav extends Component {
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

  render() {
    const { currentTab, className } = this.state;
    return (
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
    );
  }
}

export default Sidenav;
