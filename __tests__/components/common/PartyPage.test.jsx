import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import PartyPage from '../../../src/components/common/PartyPage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const props = {
  parties: {
    partyList: [{ id: 'id', party: 'party', partyname: 'partyname' }],
  },
  deleteParty: jest.fn(),
  getAllParties: jest.fn(),
  editPartyname: jest.fn(),
};

const PartyPagePartyPage = (
  <Provider store={store}>
    <PartyPage {...props} />
  </Provider>
);

describe('<PartyPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(PartyPagePartyPage);
    expect(wrapper.find('div'));
  });
});

describe('<PartyPage />', () => {
  it('renders party page', () => {
    const wrapper = shallow(<PartyPage {...props} />);
    const inputEvent = { target: { id: 'name', value: 'pcp' } };
    expect(wrapper.find('div'));
    wrapper.instance().closeModal();
    wrapper.instance().closeEditModal();
    wrapper.instance().editModal('pdc', 2);
    wrapper.instance().changePartyName(inputEvent);
    wrapper.instance().deleteModal(2);
    wrapper.instance().confirmEdit();
    wrapper.instance().confirmDelete();
  });
});
