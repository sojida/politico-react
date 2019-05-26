import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import OfficeList from '../../../src/components/common/OfficeList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const props = {
  changeOfficeFunc: jest.fn(),
  offices: {
    officeList: [{ id: 'id', party: 'party', partyname: 'partyname' }],
  },
};

const OfficeListComponent = (
  <Provider store={store}>
    <OfficeList {...props} />
  </Provider>
);

describe('<OfficeList />', () => {
  it('renders login page', () => {
    const wrapper = shallow(OfficeListComponent);
    expect(wrapper.find('div'));
  });
});

describe('<OfficeList />', () => {
  it('renders login page', () => {
    const wrapper = shallow(<OfficeList {...props} />);
    const event = { target: { value: 'pcp' } };
    expect(wrapper.find('div'));
    wrapper.find('select').simulate('change', event);
  });
});
