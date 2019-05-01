import React from 'react';
import PropTypes from 'prop-types';
import VotePageContainer from '../../container/votePage.container';
import PartyPage from '../../container/partyPage.container';
import PoliticianPage from './PoliticianPage';
import ProfilePage from './ProfilePage';
import ResultPage from './ResultPage';

const Navigation = ({ currentTab }) => {
  return (
    <div className="content">
      {currentTab === 'vote-section' ? <VotePageContainer /> : null}
      {currentTab === 'party-section' ? <PartyPage /> : null}
      {currentTab === 'politician-section' ? <PoliticianPage /> : null}
      {currentTab === 'result-section' ? <ResultPage /> : null}
      {currentTab === 'profile-section' ? <ProfilePage /> : null}
    </div>
  );
};

Navigation.propTypes = {
  currentTab: PropTypes.string.isRequired,
};

export default Navigation;
