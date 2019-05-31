import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AdminPage from '../../../src/components/common/AdminPage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const props = {
  createParties: jest.fn(),
  createOffice: jest.fn(),
  getAllParties: jest.fn(),
  getAllOffices: jest.fn(),
  getInterestedCandidates: jest.fn(),
  createCandidate: jest.fn(),
  candidates: {
    interestedCandidates: [],
  },
  offices: {
    officeList: [{ id: 'id', party: 'party', partyname: 'partyname' }],
  },
};

const AdminPageComponent = (
  <Provider store={store}>
    <AdminPage {...props} />
  </Provider>
);

describe('<AdminPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(AdminPageComponent);
    expect(wrapper.find('div'));
  });
});

describe('<AdminPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(<AdminPage {...props} />);
    expect(wrapper.find('div'));
  });
});

describe('<AdminPage />', () => {
  it('renders login page', () => {
    const wrapper = shallow(<AdminPage {...props} />);
    const event = { preventDefault: jest.fn() };
    expect(wrapper.find('div'));
    wrapper.find('.ad-form').simulate('submit');
    wrapper.find('.ad-form2').simulate('submit');
    wrapper.instance().changeOffice(2);
    wrapper.instance().createOffice(event);
    wrapper.instance().createParty(event);
  });
});
