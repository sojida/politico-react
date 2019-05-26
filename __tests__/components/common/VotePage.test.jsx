import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import VotePage from '../../../src/components/common/VotePage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const props = {
  getCandidates: jest.fn(),
  candidates: { voteCandidatesList: [] },
};

const VotePageComponent = (
  <Provider store={store}>
    <VotePage {...props} />
  </Provider>
);

describe('<VotePage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(VotePageComponent);
    expect(wrapper.find('div'));
  });
});

describe('<VotePage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(<VotePage {...props} />);
    expect(wrapper.find('div'));
    wrapper.instance().changeOffice(2);
    wrapper.instance().closeModal(2);
    wrapper.instance().confirmVote();
    wrapper
      .instance()
      .voteCandidate(3, 4, { firstname: 'sam', lastname: 'peter' });
  });
});
