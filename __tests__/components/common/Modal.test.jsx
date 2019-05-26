import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../../src/components/common/Modal';

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
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('div'));
    wrapper.find('.close').simulate('click');
    wrapper.find('.close').simulate('keydown');
    wrapper.find('.yes').simulate('click');
    wrapper.find('.no').simulate('click');
  });
});
