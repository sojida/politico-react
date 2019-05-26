import React from 'react';
import { shallow } from 'enzyme';
import EditModal from '../../../src/components/common/EditModal';

const props = {
  modalState: true,
  confirmAction: jest.fn(),
  modalMessage: 'message',
  modalTitle: 'Title',
  partyName: 'Party',
  closeModal: jest.fn(),
  changePartyName: jest.fn(),
};

describe('<EditModal />', () => {
  it('renders login page', () => {
    const wrapper = shallow(<EditModal {...props} />);
    expect(wrapper.find('div'));
    wrapper.find('.close').simulate('click');
    wrapper.find('.close').simulate('keydown');
    wrapper.find('#name').simulate('change');
    wrapper.find('.yes').simulate('click');
    wrapper.find('.no').simulate('click');
  });
});
